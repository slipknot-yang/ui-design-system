"use client";

import { useTranslations } from "next-intl";
import { Bell } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";

export function NotificationBell() {
  const t = useTranslations("common");

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="relative h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
            <span className="sr-only">{t("notifications")}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("notifications")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
