"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@workspace/ui/components/button";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("common");

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7"
      onClick={handleCopy}
      aria-label={copied ? t("copied") : t("copyCode")}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </Button>
  );
}
