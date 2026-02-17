"use client";

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

  return (
    <SidebarProvider>
      <AppSidebar variant={sidebarStyle} collapsible={sidebarCollapseMode} />
      <SidebarInset>
        <AppHeader navbarBehavior={navbarBehavior} />
        <main
          className={cn(
            "flex-1 p-4 lg:p-6",
            pageLayout === "centered" && "mx-auto max-w-5xl",
          )}
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
