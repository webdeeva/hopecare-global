// Minimal, dependency-free markdown renderer for trusted (in-repo) article
// bodies. Handles the subset our content pipeline produces: ##/### headings,
// paragraphs, unordered/ordered lists, blockquotes, **bold**, *italic*, and
// [links](url). Swap for react-markdown if richer markdown is ever needed.

import React from "react";

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Tokenise on **bold**, *italic*, and [text](url)
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const tok = match[0];
    if (tok.startsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-navy">
          {tok.slice(2, -2)}
        </strong>
      );
    } else if (tok.startsWith("*")) {
      nodes.push(<em key={`${keyPrefix}-i-${i}`}>{tok.slice(1, -1)}</em>);
    } else {
      const m = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok);
      if (m) {
        nodes.push(
          <a
            key={`${keyPrefix}-a-${i}`}
            href={m[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-deep font-medium underline underline-offset-2 hover:text-teal-bright"
          >
            {m[1]}
          </a>
        );
      }
    }
    last = match.index + tok.length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function MarkdownArticle({ body }: { body: string }) {
  const blocks = body.trim().split(/\n{2,}/);

  return (
    <div className="space-y-6">
      {blocks.map((block, bi) => {
        const lines = block.split("\n");

        if (block.startsWith("### ")) {
          return (
            <h3
              key={bi}
              className="font-display text-xl md:text-2xl font-bold text-navy mt-8 leading-snug"
            >
              {renderInline(block.slice(4), `h3-${bi}`)}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2
              key={bi}
              className="font-display text-2xl md:text-3xl font-bold text-navy mt-10 leading-snug"
            >
              {renderInline(block.slice(3), `h2-${bi}`)}
            </h2>
          );
        }
        if (block.startsWith("> ")) {
          return (
            <blockquote
              key={bi}
              className="border-l-3 border-teal pl-5 italic text-ink-soft my-6"
              style={{ borderLeftWidth: 3 }}
            >
              {renderInline(block.replace(/^> ?/gm, ""), `q-${bi}`)}
            </blockquote>
          );
        }
        if (lines.every((l) => /^[-*] /.test(l))) {
          return (
            <ul key={bi} className="space-y-2 pl-1">
              {lines.map((l, li) => (
                <li key={li} className="flex gap-3 text-ink-soft leading-relaxed">
                  <span
                    className="mt-2.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0"
                    aria-hidden
                  />
                  <span>{renderInline(l.slice(2), `ul-${bi}-${li}`)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={bi} className="space-y-2 pl-1 list-none">
              {lines.map((l, li) => (
                <li key={li} className="flex gap-3 text-ink-soft leading-relaxed">
                  <span className="font-display font-bold text-teal-deep shrink-0">
                    {li + 1}.
                  </span>
                  <span>
                    {renderInline(l.replace(/^\d+\.\s/, ""), `ol-${bi}-${li}`)}
                  </span>
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={bi} className="text-ink-soft leading-[1.75] text-[1.05rem]">
            {renderInline(block, `p-${bi}`)}
          </p>
        );
      })}
    </div>
  );
}
