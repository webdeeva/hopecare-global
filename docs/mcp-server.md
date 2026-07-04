# HopeCare Global — Site Management MCP

A remote **MCP server** that lets an AI agent fully manage this website:
write and publish education articles, generate on-brand images, edit page
content, trigger deploys, and read form submissions.

It's a standard **Streamable-HTTP MCP server with bearer-token auth**, so it
works with any standard MCP client (Cursor, Cline, custom / OpenAI-based agents,
etc.). It is **not** tied to Claude.

- **Endpoint:** `https://hopecareglobal.org/mcp`
- **Auth:** HTTP header `Authorization: Bearer <MCP_AUTH_TOKEN>`
- **Transport:** Streamable HTTP, stateless JSON-RPC 2.0 (POST)
- **Code:** `src/app/mcp/route.ts` + `src/server/mcp/*`

Everything runs as a serverless function on the site's own Netlify deploy, so
there's nothing extra to host. Content changes are committed to the GitHub repo
via the Git Data API (one atomic commit per change), which triggers a normal
Netlify deploy. **If the agent ever commits something that breaks the build,
Netlify keeps the last good deploy live** — the site can't be taken down by a
bad edit.

---

## 1. Setup (one-time)

Set these environment variables in **Netlify → Site settings → Environment
variables**, then redeploy. Some are already set:

| Variable | Status | Purpose |
|---|---|---|
| `MCP_AUTH_TOKEN` | ✅ set | The bearer token the client must send. Keep it secret. |
| `OPENROUTER_API_KEY` | ✅ set | AI image generation. |
| `GITHUB_REPO` | ✅ set | `webdeeva/hopecare-global` |
| `NETLIFY_SITE_ID` | ✅ set | This site. |
| **`GITHUB_TOKEN`** | ⛔ **you add** | GitHub PAT with **Contents: Read and write** on this repo. Required for all content tools. |
| **`NETLIFY_AUTH_TOKEN`** | ⛔ **you add** | Netlify personal access token. Only needed for deploy-status / rebuild / form-submission tools. |

### Create the GitHub token
1. GitHub → **Settings → Developer settings → Personal access tokens →
   Fine-grained tokens → Generate new token**.
2. Repository access: **Only select repositories → `webdeeva/hopecare-global`**.
3. Permissions → Repository permissions → **Contents: Read and write**.
4. Generate, copy, and set it as `GITHUB_TOKEN` in Netlify. Redeploy.

### Create the Netlify token (optional)
Netlify → **User settings → Applications → Personal access tokens → New access
token**. Set it as `NETLIFY_AUTH_TOKEN`. (Skip if you don't need the
deploy/forms tools.)

---

## 2. Connect an MCP client

Point your agent's MCP client at the endpoint with the bearer header. Typical
config shape (varies slightly by client):

```json
{
  "mcpServers": {
    "hopecare-site": {
      "url": "https://hopecareglobal.org/mcp",
      "headers": { "Authorization": "Bearer <MCP_AUTH_TOKEN>" }
    }
  }
}
```

For a raw check:

```bash
curl -s https://hopecareglobal.org/mcp \
  -H "Authorization: Bearer <MCP_AUTH_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

---

## 3. Tools

**Articles**
- `list_articles` — list guides (filter by status/cluster)
- `get_article` — full metadata + body + sources
- `create_article` — new `/education/<slug>` page (created as draft)
- `update_article` — edit any field / body / sources
- `set_article_status` — publish or unpublish
- `delete_article` — remove an article (and optionally its image)

**Images**
- `generate_hero_image` — AI, on-brand, committed to `public/education/<slug>.png`

**Pages / files**
- `read_file` — read any repo file
- `list_files` — list a directory
- `write_file` — create/edit a file (scoped to `data/`, `public/`, `src/`)

**Deploy & forms**
- `get_deploy_status` — latest Netlify deploys
- `trigger_rebuild` — force a production build
- `list_form_submissions` — contact/newsletter submissions

### Recommended article workflow
1. `create_article` (draft) → 2. `generate_hero_image` → 3. review →
4. `set_article_status` to `published`. Each step is one commit + deploy.

---

## 4. Security notes
- The bearer token is the only gate — **treat `MCP_AUTH_TOKEN` like a password.**
  Rotate it any time by changing the Netlify env var (and updating the client).
- `write_file` is limited to `data/`, `public/`, and `src/` and cannot touch
  secrets, CI, or dependencies.
- This is a YMYL medical site: an agent can publish live. Keep a human in the
  loop for medical-claim content, same as the rest of the site.
