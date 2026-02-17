import { codeToHtml } from "shiki";
import { CopyButton } from "@/components/copy-button";

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export async function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });

  return (
    <div className="overflow-hidden rounded-lg border bg-muted">
      {/* Header bar: language label + copy button */}
      <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-1.5">
        <span className="select-none font-mono text-xs text-muted-foreground">
          {lang}
        </span>
        <CopyButton code={code} />
      </div>
      {/* Code */}
      <div
        className="text-[13px] leading-relaxed [&_pre]:overflow-x-auto [&_pre]:p-4 [&_pre]:font-mono [&_.shiki]:!bg-transparent dark:[&_.shiki_span]:!text-[var(--shiki-dark)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
