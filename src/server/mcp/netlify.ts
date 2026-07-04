// Netlify REST client: deploy status, rebuild trigger, form submissions.

import { cfg } from "./config";

const API = "https://api.netlify.com/api/v1";

function headers() {
  return {
    Authorization: `Bearer ${cfg.netlify.token}`,
    "Content-Type": "application/json",
    "User-Agent": "hopecare-site-mcp",
  };
}

export async function latestDeploy() {
  const res = await fetch(`${API}/sites/${cfg.netlify.siteId}/deploys?per_page=5`, {
    headers: headers(),
  });
  if (!res.ok) throw new Error(`Netlify deploys ${res.status}`);
  const deploys = await res.json();
  return (Array.isArray(deploys) ? deploys : []).slice(0, 5).map(
    (d: Record<string, unknown>) => ({
      state: d.state,
      commit_ref: typeof d.commit_ref === "string" ? d.commit_ref.slice(0, 7) : null,
      branch: d.branch,
      created_at: d.created_at,
      error_message: d.error_message || null,
      deploy_url: d.deploy_ssl_url || d.ssl_url,
    })
  );
}

/** Trigger a fresh production build. Uses a build hook if configured, else the deploys API. */
export async function triggerRebuild(clearCache = false) {
  if (cfg.netlify.buildHook) {
    const res = await fetch(cfg.netlify.buildHook, { method: "POST" });
    if (!res.ok) throw new Error(`Build hook ${res.status}`);
    return { triggered: true, via: "build_hook" };
  }
  const res = await fetch(`${API}/sites/${cfg.netlify.siteId}/builds`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(clearCache ? { clear_cache: true } : {}),
  });
  if (!res.ok) throw new Error(`Netlify build ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const b = await res.json();
  return { triggered: true, via: "api", id: b.id, state: b.deploy_state || b.state };
}

export async function formSubmissions(formName?: string, limit = 20) {
  const res = await fetch(
    `${API}/sites/${cfg.netlify.siteId}/submissions?per_page=${Math.min(limit, 100)}`,
    { headers: headers() }
  );
  if (!res.ok) throw new Error(`Netlify submissions ${res.status}`);
  let subs = await res.json();
  if (!Array.isArray(subs)) subs = [];
  if (formName) subs = subs.filter((s: Record<string, unknown>) => s.form_name === formName);
  return subs.slice(0, limit).map((s: Record<string, unknown>) => ({
    id: s.id,
    form_name: s.form_name,
    email: s.email,
    name: s.name,
    created_at: s.created_at,
    data: s.data,
  }));
}
