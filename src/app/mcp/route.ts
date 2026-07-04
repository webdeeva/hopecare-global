// Remote MCP server (Streamable HTTP, stateless JSON-RPC 2.0) for managing the
// HopeCare Global site. Auth: Authorization: Bearer <MCP_AUTH_TOKEN>.
// Works with any standard MCP client (Cursor, Cline, custom/OpenAI agents, ...).

import type { NextRequest } from "next/server";
import { cfg, SERVER_INFO } from "@/server/mcp/config";
import { TOOLS, callTool } from "@/server/mcp/tools";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROTOCOL = "2025-06-18";

const CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers":
    "Authorization, Content-Type, MCP-Protocol-Version, Mcp-Session-Id",
};

function json(body: unknown, status = 200, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS, ...extra },
  });
}
function result(id: unknown, res: unknown) {
  return json({ jsonrpc: "2.0", id, result: res });
}
function error(id: unknown, code: number, message: string, status = 200) {
  return json({ jsonrpc: "2.0", id, error: { code, message } }, status);
}
function errMessage(e: unknown) {
  return e instanceof Error ? e.message : String(e);
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function GET() {
  return json({
    name: SERVER_INFO.name,
    version: SERVER_INFO.version,
    transport: "streamable-http",
    hint: "POST JSON-RPC 2.0 with header  Authorization: Bearer <token>",
    tools: TOOLS.map((t) => t.name),
  });
}

export async function POST(req: NextRequest) {
  if (!cfg.authToken) return error(null, -32000, "Server misconfigured: MCP_AUTH_TOKEN not set");
  if ((req.headers.get("authorization") || "") !== `Bearer ${cfg.authToken}`) {
    return error(null, -32001, "Unauthorized", 401);
  }

  let msg: { id?: unknown; method?: string; params?: Record<string, unknown> };
  try {
    msg = (await req.json()) as typeof msg;
  } catch {
    return error(null, -32700, "Parse error");
  }

  const id = msg.id ?? null;
  const method = msg.method;
  const params = msg.params || {};

  // JSON-RPC notifications carry no id -> acknowledge with 202, no body.
  if (msg.id === undefined || msg.id === null) {
    return new Response(null, { status: 202, headers: CORS });
  }

  try {
    switch (method) {
      case "initialize":
        return result(id, {
          protocolVersion:
            typeof params.protocolVersion === "string" ? params.protocolVersion : PROTOCOL,
          capabilities: { tools: {} },
          serverInfo: SERVER_INFO,
        });

      case "ping":
        return result(id, {});

      case "tools/list":
        return result(id, { tools: TOOLS });

      case "tools/call": {
        const name = String(params.name || "");
        const args = (params.arguments as Record<string, unknown>) || {};
        try {
          const data = await callTool(name, args);
          return result(id, {
            content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
          });
        } catch (e) {
          return result(id, {
            content: [{ type: "text", text: `Error: ${errMessage(e)}` }],
            isError: true,
          });
        }
      }

      default:
        return error(id, -32601, `Method not found: ${method}`);
    }
  } catch (e) {
    return error(id, -32603, errMessage(e));
  }
}
