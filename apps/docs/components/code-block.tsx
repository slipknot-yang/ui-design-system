import { codeToHtml } from "shiki";
import { CopyButton } from "@/components/copy-button";

interface CodeBlockProps {
  code: string;
  lang?: string;
}

const langLabels: Record<string, string> = {
  tsx: "TSX",
  typescript: "TypeScript",
  javascript: "JavaScript",
  bash: "Terminal",
  css: "CSS",
  json: "JSON",
  html: "HTML",
  plaintext: "Text",
};

export async function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });

  const displayLabel = langLabels[lang] ?? lang;

  return (
    <div className="overflow-hidden rounded-lg border">
      {/* Header bar: language label + copy button */}
      <div className="flex items-center justify-between border-b bg-zinc-200 px-4 py-1.5 dark:bg-zinc-800">
        <span className="select-none font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {displayLabel}
        </span>
        <CopyButton code={code} />
      </div>
      {/* Code */}
      <div
        className="bg-zinc-100 text-[12.5px] leading-[1.7] dark:bg-zinc-950 [&_pre]:overflow-x-auto [&_pre]:px-4 [&_pre]:py-3.5 [&_pre]:font-mono [&_code]:font-mono [&_.shiki]:!bg-transparent dark:[&_.shiki_span]:!text-[var(--shiki-dark)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
