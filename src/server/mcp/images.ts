// OpenRouter image generation. Returns base64 PNG so it can be committed to
// the repo (public/education/<slug>.png) via the GitHub Git Data API.

import { cfg } from "./config";

// Shared brand art direction so generated images match the existing hero set.
const BRAND_STYLE =
  "Editorial conceptual illustration for an ovarian cancer / women's health nonprofit. " +
  "Brand palette: soft teal #14b5cc, deep teal, warm cream #faf9f4, muted navy, gentle sage green. " +
  "Clean, modern, hopeful, dignified, calm and trustworthy, generous negative space, soft natural light, " +
  "flat-meets-painterly texture. Diverse, respectful representation of women. Non-clinical, non-alarmist, " +
  "never graphic or scary. ABSOLUTELY NO text, no words, no letters, no numbers, no logos.";

export async function generateImageBase64(
  prompt: string,
  useBrandStyle = true
): Promise<string> {
  const fullPrompt = useBrandStyle ? `${BRAND_STYLE}\n\nSubject: ${prompt}` : prompt;
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.openrouter.key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: cfg.openrouter.imageModel,
      messages: [{ role: "user", content: fullPrompt }],
      modalities: ["image", "text"],
    }),
  });
  const j = await res.json();
  if (j.error) throw new Error(`OpenRouter: ${JSON.stringify(j.error).slice(0, 200)}`);
  const url: string | undefined = j?.choices?.[0]?.message?.images?.[0]?.image_url?.url;
  if (!url) throw new Error("OpenRouter returned no image");
  return url.split(",")[1]; // strip the data: prefix -> raw base64
}
