import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { PreferencesProvider } from "@/lib/preferences";
import { DashboardShell } from "@/components/dashboard-shell";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PreferencesProvider>
      <DashboardShell>{children}</DashboardShell>
    </PreferencesProvider>
  );
}
