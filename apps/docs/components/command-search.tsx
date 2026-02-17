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
    { label: "Home", href: "/", icon: Home },
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Components", href: "/components", icon: Blocks },
    { label: "Themes", href: "/themes", icon: Palette },
    { label: "i18n", href: "/i18n", icon: Languages },
    { label: "Login", href: "/login", icon: LogIn },
  ];

  const patternItems = [
    { label: "Search + Table", href: "/patterns/search-table" },
    { label: "Advanced Search", href: "/patterns/advanced-search" },
    { label: "Master-Detail", href: "/patterns/master-detail" },
    { label: "Complex Form", href: "/patterns/complex-form" },
    { label: "Calendar", href: "/patterns/calendar" },
    { label: "Workflow", href: "/patterns/workflow" },
    { label: "Dashboard", href: "/patterns/dashboard" },
  ];

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-auto min-w-[2.5rem] justify-start rounded-md text-sm text-muted-foreground sm:w-56 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 sm:mr-2" />
        <span className="hidden lg:inline-flex">{t("searchPlaceholder")}</span>
        <span className="hidden sm:inline-flex lg:hidden">{t("search")}</span>
        <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5">
          <Kbd className="text-[10px]">⌘</Kbd>
          <Kbd className="text-[10px]">K</Kbd>
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t("searchPlaceholder")} />
        <CommandList>
          <CommandEmpty>{t("noResults")}</CommandEmpty>

          <CommandGroup heading="Navigation">
            {navigationItems.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="UI Patterns">
            {patternItems.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                <Blocks className="mr-2 h-4 w-4" />
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
