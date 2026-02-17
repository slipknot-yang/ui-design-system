"use client";

import { useTranslations } from "next-intl";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";
import { Separator } from "@workspace/ui/components/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { CountrySwitcher } from "@/components/country-switcher";
import { CommandSearch } from "@/components/command-search";
import { NotificationBell } from "@/components/notification-bell";
import { UserNav } from "@/components/user-nav";
import { PreferencesPanel } from "@/components/preferences-panel";
import { cn } from "@workspace/ui/lib/utils";

interface AppHeaderProps {
  navbarBehavior?: "sticky" | "scroll";
}

export function AppHeader({ navbarBehavior = "sticky" }: AppHeaderProps) {
  const t = useTranslations("common");

  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b px-4",
        navbarBehavior === "sticky" && "sticky top-0 z-10 bg-background",
      )}
    >
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("appName")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("appName")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-2">
        <CommandSearch />
        <CountrySwitcher />
        <LocaleSwitcher />
        <ThemeSwitcher />
        <PreferencesPanel />
        <NotificationBell />
        <UserNav />
      </div>
    </header>
  );
}
