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
  Palette,
  Languages,
  LogIn,
  ChevronRight,
  Shield,
  ChevronsUpDown,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
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

const patternItems: NavItem[] = [
  { title: "Search + Table", href: "/patterns/search-table" },
  { title: "Advanced Search", href: "/patterns/advanced-search" },
  { title: "Master-Detail", href: "/patterns/master-detail" },
  { title: "Complex Form", href: "/patterns/complex-form" },
  { title: "Calendar", href: "/patterns/calendar" },
  { title: "Workflow", href: "/patterns/workflow" },
  { title: "Dashboard", href: "/patterns/dashboard" },
];

interface AppSidebarProps {
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

export function AppSidebar({
  variant = "sidebar",
  collapsible = "offcanvas",
}: AppSidebarProps) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const componentSections: NavSection[] = componentCategories.map((cat) => ({
    label: `${cat.category} (${cat.items.length})`,
    icon: categoryIcons[cat.category] || Component,
    items: cat.items.map((item) => ({
      title: item.name,
      href: `/components/${item.slug}`,
    })),
  }));

  const patternSection: NavSection = {
    label: "UI Patterns",
    icon: Blocks,
    items: patternItems,
  };

  function isSectionActive(section: NavSection): boolean {
    return section.items.some((item) => pathname === item.href);
  }

  function renderCollapsibleSection(section: NavSection) {
    return (
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
                          <Link
                            href={item.href}
                            onClick={() => setOpenMobile(false)}
                          >
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
    );
  }

  return (
    <Sidebar variant={variant} collapsible={collapsible}>
      <SidebarHeader className="border-b px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpenMobile(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Shield className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              CUPIA Design System
            </span>
            <span className="text-[10px] text-muted-foreground">
              UI Component Library
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {/* Home */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/" onClick={() => setOpenMobile(false)}>
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                  <Link href="/dashboard" onClick={() => setOpenMobile(false)}>
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/components"}
                >
                  <Link href="/components" onClick={() => setOpenMobile(false)}>
                    <Component className="h-4 w-4" />
                    <span>Components</span>
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

        <SidebarSeparator />

        {/* Utility pages */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/themes"}>
                  <Link href="/themes" onClick={() => setOpenMobile(false)}>
                    <Palette className="h-4 w-4" />
                    <span>Themes</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/i18n"}>
                  <Link href="/i18n" onClick={() => setOpenMobile(false)}>
                    <Languages className="h-4 w-4" />
                    <span>i18n</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/login"}>
                  <Link href="/login" onClick={() => setOpenMobile(false)}>
                    <LogIn className="h-4 w-4" />
                    <span>Login (Demo)</span>
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
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="" alt="Admin" />
                    <AvatarFallback className="rounded-lg text-xs">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Admin User</span>
                    <span className="truncate text-xs text-muted-foreground">
                      admin@cupia.or.kr
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="top"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
