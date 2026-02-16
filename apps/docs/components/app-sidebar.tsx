"use client";

import { type LucideIcon } from "lucide-react";
import {
  Globe,
  FileText,
  Package,
  ShieldCheck,
  Banknote,
  Settings,
  ChevronRight,
  Shield,
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
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarSeparator,
} from "@workspace/ui/components/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  label: string;
  icon: LucideIcon;
  items: NavItem[];
}

export function AppSidebar() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const portalSection: NavSection = {
    label: t("portal"),
    icon: Globe,
    items: [
      { title: t("dashboard"), href: "/" },
      { title: t("myPage"), href: "/patterns/complex-form" },
      { title: t("documentBox"), href: "/patterns/master-detail" },
      { title: t("companyMgmt"), href: "/patterns/search-table" },
    ],
  };

  const declarationSection: NavSection = {
    label: t("declaration"),
    icon: FileText,
    items: [
      { title: t("newDeclaration"), href: "/patterns/complex-form" },
      { title: t("declarationQuery"), href: "/patterns/search-table" },
      { title: t("declarationList"), href: "/patterns/advanced-search" },
    ],
  };

  const cargoSection: NavSection = {
    label: t("cargo"),
    icon: Package,
    items: [
      { title: t("cargoTracking"), href: "/patterns/search-table" },
      { title: t("cargoDeclaration"), href: "/patterns/complex-form" },
      { title: t("warehouse"), href: "/patterns/master-detail" },
      { title: t("unloadLoad"), href: "/patterns/search-table" },
    ],
  };

  const clearanceSection: NavSection = {
    label: t("clearanceMenu"),
    icon: ShieldCheck,
    items: [
      { title: t("clearanceDecl"), href: "/patterns/search-table" },
      { title: t("pricing"), href: "/patterns/complex-form" },
      { title: t("security"), href: "/patterns/master-detail" },
    ],
  };

  const collectionSection: NavSection = {
    label: t("collection"),
    icon: Banknote,
    items: [
      { title: t("taxNotice"), href: "/patterns/search-table" },
      { title: t("finesMgmt"), href: "/patterns/search-table" },
      { title: t("deposit"), href: "/patterns/master-detail" },
    ],
  };

  const systemSection: NavSection = {
    label: t("system"),
    icon: Settings,
    items: [
      { title: t("components"), href: "/components" },
      { title: t("themes"), href: "/themes" },
      { title: t("i18n"), href: "/i18n" },
      { title: t("login"), href: "/login" },
    ],
  };

  const mainSections: NavSection[] = [
    portalSection,
    declarationSection,
    cargoSection,
    clearanceSection,
    collectionSection,
  ];

  function isSectionActive(section: NavSection): boolean {
    return section.items.some((item) => pathname === item.href);
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Shield className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">CUPIA</span>
            <span className="text-[10px] text-muted-foreground">
              Customs Administration
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {mainSections.map((section) => (
          <SidebarGroup key={section.label}>
            <Collapsible
              defaultOpen={isSectionActive(section)}
              className="group/collapsible"
            >
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center gap-2">
                  <section.icon className="h-4 w-4" />
                  <span className="flex-1 text-left">{section.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={`${section.label}-${item.title}`}>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.href}
                            >
                              <Link href={item.href}>
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        ))}

        <SidebarSeparator />

        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="flex-1 text-left">{systemSection.label}</span>
                <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {systemSection.items.map((item) => (
                    <SidebarMenuItem key={`system-${item.title}`}>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === item.href}
                          >
                            <Link href={item.href}>
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2026 CUPIA</p>
          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            v1.0.0
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
