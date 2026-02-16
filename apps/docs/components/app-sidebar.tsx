"use client";

import {
  LayoutDashboard,
  Search,
  SearchCheck,
  SplitSquareVertical,
  FileText,
  CalendarDays,
  GitPullRequest,
  BarChart3,
  Component,
  Palette,
  Languages,
  Home,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@workspace/ui/components/sidebar";

export function AppSidebar() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const patternItems = [
    {
      title: t("searchTable"),
      href: "/patterns/search-table",
      icon: Search,
    },
    {
      title: t("advancedSearch"),
      href: "/patterns/advanced-search",
      icon: SearchCheck,
    },
    {
      title: t("masterDetail"),
      href: "/patterns/master-detail",
      icon: SplitSquareVertical,
    },
    {
      title: t("complexForm"),
      href: "/patterns/complex-form",
      icon: FileText,
    },
    {
      title: t("calendar"),
      href: "/patterns/calendar",
      icon: CalendarDays,
    },
    {
      title: t("workflow"),
      href: "/patterns/workflow",
      icon: GitPullRequest,
    },
    {
      title: t("dashboardPattern"),
      href: "/patterns/dashboard",
      icon: BarChart3,
    },
  ];

  const mainItems = [
    { title: t("home"), href: "/", icon: Home },
    { title: t("dashboard"), href: "/dashboard", icon: LayoutDashboard },
    { title: t("components"), href: "/components", icon: Component },
    { title: t("themes"), href: "/themes", icon: Palette },
    { title: t("i18n"), href: "/i18n", icon: Languages },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">CUPIA</span>
            <span className="text-xs text-muted-foreground">Design System</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{t("patterns")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {patternItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <p className="text-xs text-muted-foreground">&copy; 2026 CUPIA</p>
      </SidebarFooter>
    </Sidebar>
  );
}
