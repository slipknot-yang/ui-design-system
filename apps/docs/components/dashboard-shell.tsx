"use client";

import { useEffect, useRef, useState } from "react";
import { usePreferences } from "@/lib/preferences";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { cn } from "@workspace/ui/lib/utils";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { sidebarStyle, sidebarCollapseMode, pageLayout, navbarBehavior } =
    usePreferences();

  const [open, setOpen] = useState(true);
  const prevMode = useRef(sidebarCollapseMode);

  // Auto-collapse when collapse mode changes so user sees the effect
  useEffect(() => {
    if (prevMode.current !== sidebarCollapseMode) {
      prevMode.current = sidebarCollapseMode;
      setOpen(false);
    }
  }, [sidebarCollapseMode]);

  return (
    <SidebarProvider key={sidebarStyle} open={open} onOpenChange={setOpen}>
      <AppSidebar variant={sidebarStyle} collapsible={sidebarCollapseMode} />
      <SidebarInset className="min-w-0 overflow-x-hidden">
        <AppHeader navbarBehavior={navbarBehavior} />
        <div
          className={cn(
            "flex-1 p-4 lg:p-6",
            pageLayout === "centered" && "mx-auto max-w-5xl",
          )}
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
