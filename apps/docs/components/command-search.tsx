"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import {
  Search,
  Home,
  Blocks,
  Palette,
  Languages,
  LogIn,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Kbd } from "@workspace/ui/components/kbd";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command";
import { componentCategories } from "@/lib/component-registry";

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("common");
  const tNav = useTranslations("nav");
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  const navigationItems = [
    { label: tNav("home"), href: "/", icon: Home },
    { label: tNav("dashboard"), href: "/dashboard", icon: LayoutDashboard },
    { label: tNav("components"), href: "/components", icon: Blocks },
    { label: tNav("themes"), href: "/themes", icon: Palette },
    { label: tNav("i18n"), href: "/i18n", icon: Languages },
    { label: tNav("login"), href: "/login", icon: LogIn },
  ];

  const patternItems = [
    { label: tNav("searchTable"), href: "/patterns/search-table" },
    { label: tNav("advancedSearch"), href: "/patterns/advanced-search" },
    { label: tNav("masterDetail"), href: "/patterns/master-detail" },
    { label: tNav("complexForm"), href: "/patterns/complex-form" },
    { label: tNav("calendar"), href: "/patterns/calendar" },
    { label: tNav("workflow"), href: "/patterns/workflow" },
    { label: tNav("dashboardPattern"), href: "/patterns/dashboard" },
  ];

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-auto min-w-[2.5rem] justify-start rounded-md text-sm text-muted-foreground sm:w-56 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 sm:me-2" />
        <span className="hidden lg:inline-flex">{t("searchPlaceholder")}</span>
        <span className="hidden sm:inline-flex lg:hidden">{t("search")}</span>
        <span className="pointer-events-none absolute end-1.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5">
          <Kbd className="text-[10px]">⌘</Kbd>
          <Kbd className="text-[10px]">K</Kbd>
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t("searchPlaceholder")} />
        <CommandList>
          <CommandEmpty>{t("noResults")}</CommandEmpty>

          <CommandGroup heading={t("navigation")}>
            {navigationItems.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                <item.icon className="me-2 h-4 w-4" />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading={tNav("patterns")}>
            {patternItems.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                <Blocks className="me-2 h-4 w-4" />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          {componentCategories.map((cat) => (
            <CommandGroup key={cat.category} heading={cat.category}>
              {cat.items.map((item) => (
                <CommandItem
                  key={item.slug}
                  onSelect={() => navigate(`/components/${item.slug}`)}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
