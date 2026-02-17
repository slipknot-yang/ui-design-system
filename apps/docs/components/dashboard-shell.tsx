"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { usePreferences } from "@/lib/preferences";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import {
  SidebarInset,
  SidebarProvider,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { cn } from "@workspace/ui/lib/utils";
import { TooltipProvider } from "@workspace/ui/components/tooltip";

const SIDEBAR_MIN_WIDTH = 200;
const SIDEBAR_MAX_WIDTH = 480;
const SIDEBAR_DEFAULT_WIDTH = 256; // 16rem
const SIDEBAR_WIDTH_KEY = "sidebar-width";

function useDirection() {
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
  useEffect(() => {
    setDir(document.documentElement.dir === "rtl" ? "rtl" : "ltr");
  }, []);
  return dir;
}

function SidebarResizeHandle({
  onResize,
  isRtl,
}: {
  onResize: (width: number) => void;
  isRtl: boolean;
}) {
  const { state } = useSidebar();
  const isResizing = useRef(false);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (state === "collapsed") return;
      e.preventDefault();
      isResizing.current = true;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      const handleMouseMove = (e: MouseEvent) => {
        if (!isResizing.current) return;
        const rawWidth = isRtl ? window.innerWidth - e.clientX : e.clientX;
        const newWidth = Math.min(
          SIDEBAR_MAX_WIDTH,
          Math.max(SIDEBAR_MIN_WIDTH, rawWidth),
        );
        onResize(newWidth);
      };

      const handleMouseUp = () => {
        isResizing.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [state, onResize, isRtl],
  );

  if (state === "collapsed") return null;

  return (
    <div
      onMouseDown={handleMouseDown}
      className="group/resize fixed inset-y-0 z-20 hidden w-1.5 cursor-col-resize md:block"
      style={
        isRtl
          ? { right: "var(--sidebar-width)" }
          : { left: "var(--sidebar-width)" }
      }
    >
      <div className="absolute inset-y-0 start-1/2 w-px -translate-x-1/2 bg-border transition-colors group-hover/resize:bg-primary/40 group-active/resize:bg-primary" />
    </div>
  );
}

function DashboardShellInner({ children }: { children: React.ReactNode }) {
  const { sidebarStyle, sidebarCollapseMode, pageLayout, navbarBehavior } =
    usePreferences();
  const dir = useDirection();
  const isRtl = dir === "rtl";

  const [open, setOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_DEFAULT_WIDTH);

  useEffect(() => {
    const saved = localStorage.getItem(SIDEBAR_WIDTH_KEY);
    if (saved) {
      const width = parseInt(saved, 10);
      if (width >= SIDEBAR_MIN_WIDTH && width <= SIDEBAR_MAX_WIDTH) {
        setSidebarWidth(width);
      }
    }
  }, []);

  const handleResize = useCallback((width: number) => {
    setSidebarWidth(width);
    localStorage.setItem(SIDEBAR_WIDTH_KEY, String(width));
  }, []);

  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      style={{ "--sidebar-width": `${sidebarWidth}px` } as React.CSSProperties}
    >
      <AppSidebar
        variant={sidebarStyle}
        collapsible={sidebarCollapseMode}
        side={isRtl ? "right" : "left"}
      />
      <SidebarResizeHandle onResize={handleResize} isRtl={isRtl} />
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

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      <DashboardShellInner>{children}</DashboardShellInner>
    </TooltipProvider>
  );
}
