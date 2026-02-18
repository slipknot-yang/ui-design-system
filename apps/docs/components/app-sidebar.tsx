"use client";

import { type LucideIcon } from "lucide-react";
import {
  Home,
  Component,
  LayoutGrid,
  FormInput,
  BarChart3,
  MessageSquare,
  Navigation,
  Blocks,
  LayoutList,
  Palette,
  Languages,
  LogIn,
  ChevronRight,
  ChevronsUpDown,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CupiaLogo } from "@/components/cupia-logo";

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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarSeparator,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import { componentCategories } from "@/lib/component-registry";

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  label: string;
  icon: LucideIcon;
  items: NavItem[];
}

const categoryIcons: Record<string, LucideIcon> = {
  Layout: LayoutGrid,
  Forms: FormInput,
  "Data Display": BarChart3,
  Feedback: MessageSquare,
  Navigation: Navigation,
};

interface AppSidebarProps {
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  side?: "left" | "right";
}

export function AppSidebar({
  variant = "sidebar",
  collapsible = "offcanvas",
  side = "left",
}: AppSidebarProps) {
  const pathname = usePathname();
  const { setOpenMobile, state } = useSidebar();
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  const patternItems: NavItem[] = [
    { title: tNav("searchTable"), href: "/patterns/search-table" },
    { title: tNav("advancedSearch"), href: "/patterns/advanced-search" },
    { title: tNav("masterDetail"), href: "/patterns/master-detail" },
    { title: tNav("complexForm"), href: "/patterns/complex-form" },
    { title: tNav("calendar"), href: "/patterns/calendar" },
    { title: tNav("workflow"), href: "/patterns/workflow" },
    { title: tNav("dashboardPattern"), href: "/patterns/dashboard" },
    { title: tNav("treeDetail"), href: "/patterns/tree-detail" },
  ];

  const componentSections: NavSection[] = componentCategories.map((cat) => ({
    label: `${cat.category} (${cat.items.length})`,
    icon: categoryIcons[cat.category] || Component,
    items: cat.items.map((item) => ({
      title: item.name,
      href: `/components/${item.slug}`,
    })),
  }));

  const pattern2Items: NavItem[] = [
    { title: tNav("govSearchDetail"), href: "/patterns2/search-detail" },
  ];

  const patternSection: NavSection = {
    label: tNav("patterns"),
    icon: Blocks,
    items: patternItems,
  };

  const pattern2Section: NavSection = {
    label: tNav("patterns2"),
    icon: LayoutList,
    items: pattern2Items,
  };

  function isSectionActive(section: NavSection): boolean {
    return section.items.some((item) => pathname === item.href);
  }

  function renderCollapsibleSection(section: NavSection) {
    const isActive = isSectionActive(section);
    return (
      <SidebarGroup key={section.label}>
        <SidebarMenu>
          {state === "collapsed" ? (
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    className={
                      isActive
                        ? "text-sidebar-foreground font-medium"
                        : "text-muted-foreground hover:text-sidebar-foreground"
                    }
                  >
                    <section.icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{section.label}</span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side={side === "right" ? "left" : "right"}
                  align="start"
                  className="min-w-56 max-h-80 overflow-y-auto"
                >
                  {section.items.map((item) => (
                    <DropdownMenuItem
                      key={`${section.label}-${item.title}`}
                      asChild
                      className={
                        pathname === item.href
                          ? "bg-accent font-medium"
                          : undefined
                      }
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpenMobile(false)}
                      >
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          ) : (
            <Collapsible defaultOpen={isActive} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={section.label}
                    className="text-muted-foreground hover:text-sidebar-foreground group-data-[state=open]/collapsible:text-sidebar-foreground group-data-[state=open]/collapsible:font-medium"
                  >
                    <section.icon className="h-4 w-4 shrink-0 group-data-[state=open]/collapsible:text-sidebar-foreground" />
                    <span className="flex-1 text-left">{section.label}</span>
                    <ChevronRight className="ms-auto h-3.5 w-3.5 opacity-40 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[state=open]/collapsible:opacity-70" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {section.items.map((item) => (
                      <SidebarMenuSubItem
                        key={`${section.label}-${item.title}`}
                      >
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === item.href}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setOpenMobile(false)}
                          >
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )}
        </SidebarMenu>
      </SidebarGroup>
    );
  }

  return (
    <Sidebar
      variant={variant}
      collapsible={collapsible}
      side={side}
      className="[--color-sidebar:var(--color-background)] [--color-sidebar-accent:oklch(0.90_0_0)] dark:[--color-sidebar-accent:oklch(0.25_0_0)]"
    >
      <SidebarHeader className="border-b px-4 h-14 flex items-center bg-background group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpenMobile(false)}
        >
          <CupiaLogo
            size="lg"
            className="shrink-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6"
          />
          <div className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate text-base font-bold tracking-wide">
              CUPIA
            </span>
            <span className="truncate text-xs tracking-wide text-muted-foreground">
              Design System
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-primary/[0.005] via-background to-accent/[0.005]">
        {/* Home */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/"}
                  tooltip={tNav("home")}
                >
                  <Link href="/" onClick={() => setOpenMobile(false)}>
                    <Home className="h-4 w-4" />
                    <span>{tNav("home")}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard"}
                  tooltip={tNav("dashboard")}
                >
                  <Link href="/dashboard" onClick={() => setOpenMobile(false)}>
                    <LayoutDashboard className="h-4 w-4" />
                    <span>{tNav("dashboard")}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/components"}
                  tooltip={tNav("components")}
                >
                  <Link href="/components" onClick={() => setOpenMobile(false)}>
                    <Component className="h-4 w-4" />
                    <span>{tNav("components")}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Component categories */}
        {componentSections.map((section) => renderCollapsibleSection(section))}

        <SidebarSeparator />

        {/* UI Patterns */}
        {renderCollapsibleSection(patternSection)}

        {/* UI Patterns 2 */}
        {renderCollapsibleSection(pattern2Section)}

        <SidebarSeparator />

        {/* Utility pages */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/themes"}
                  tooltip={tNav("themes")}
                >
                  <Link href="/themes" onClick={() => setOpenMobile(false)}>
                    <Palette className="h-4 w-4" />
                    <span>{tNav("themes")}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/i18n"}
                  tooltip={tNav("i18n")}
                >
                  <Link href="/i18n" onClick={() => setOpenMobile(false)}>
                    <Languages className="h-4 w-4" />
                    <span>{tNav("i18n")}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/login"}
                  tooltip={tNav("login")}
                >
                  <Link href="/login" onClick={() => setOpenMobile(false)}>
                    <LogIn className="h-4 w-4" />
                    <span>{tNav("login")}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg shrink-0">
                    <AvatarImage src="" alt="Admin" />
                    <AvatarFallback className="rounded-lg text-xs">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold">
                      {tCommon("adminUser")}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      admin@cupia.or.kr
                    </span>
                  </div>
                  <ChevronsUpDown className="ms-auto h-4 w-4 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="top"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <User className="me-2 h-4 w-4" />
                  {tCommon("profile")}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="me-2 h-4 w-4" />
                  {tCommon("settings")}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="me-2 h-4 w-4" />
                  {tCommon("signOut")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
