"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
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

function useBreadcrumbs() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  const labelMap: Record<string, string> = {
    "/": tNav("home"),
    "/dashboard": tNav("dashboard"),
    "/components": tNav("components"),
    "/themes": tNav("themes"),
    "/i18n": tNav("i18n"),
    "/login": tNav("login"),
    "/patterns": tNav("patterns"),
    "/patterns/search-table": tNav("searchTable"),
    "/patterns/advanced-search": tNav("advancedSearch"),
    "/patterns/master-detail": tNav("masterDetail"),
    "/patterns/complex-form": tNav("complexForm"),
    "/patterns/calendar": tNav("calendar"),
    "/patterns/workflow": tNav("workflow"),
    "/patterns/dashboard": tNav("dashboardPattern"),
  };

  if (pathname === "/") {
    return [{ label: tNav("home"), href: undefined }];
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; href: string | undefined }[] = [];

  let accumulated = "";
  for (let i = 0; i < segments.length; i++) {
    accumulated += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const seg = segments[i] ?? "";
    const label =
      labelMap[accumulated] ||
      seg
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    crumbs.push({ label, href: isLast ? undefined : accumulated });
  }

  return crumbs;
}

export function AppHeader({ navbarBehavior = "sticky" }: AppHeaderProps) {
  const breadcrumbs = useBreadcrumbs();

  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b px-2 sm:px-4",
        navbarBehavior === "sticky" && "sticky top-0 z-10 bg-background",
      )}
    >
      <SidebarTrigger className="-ms-1" />
      <Separator orientation="vertical" className="me-2 hidden sm:block h-4" />
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, i) => (
            <BreadcrumbItem key={i}>
              {i > 0 && <BreadcrumbSeparator className="me-1.5" />}
              {crumb.href ? (
                <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ms-auto flex items-center gap-1 sm:gap-2">
        <CommandSearch />
        <CountrySwitcher />
        <LocaleSwitcher />
        <ThemeSwitcher />
        <div className="hidden sm:flex items-center gap-1 sm:gap-2">
          <PreferencesPanel />
          <NotificationBell />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
