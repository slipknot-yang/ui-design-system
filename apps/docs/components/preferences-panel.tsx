"use client";

import { Settings2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Button } from "@workspace/ui/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group";
import { Label } from "@workspace/ui/components/label";
import { Separator } from "@workspace/ui/components/separator";
import {
  usePreferences,
  type Font,
  type PageLayout,
  type NavbarBehavior,
  type SidebarStyle,
  type SidebarCollapseMode,
  type ThemePreset,
} from "@/lib/preferences";

export function PreferencesPanel() {
  const t = useTranslations("common");
  const { theme, setTheme } = useTheme();
  const {
    themePreset,
    font,
    pageLayout,
    navbarBehavior,
    sidebarStyle,
    sidebarCollapseMode,
    setPreference,
    restoreDefaults,
  } = usePreferences();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings2 className="h-4 w-4" />
          <span className="sr-only">{t("preferences")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <h4 className="font-medium leading-none">{t("preferences")}</h4>
            <p className="text-muted-foreground mt-1 text-sm">
              {t("preferencesDescription")}
            </p>
          </div>
          <p className="text-muted-foreground text-xs italic">
            *{t("preferencesStorageNote")}
          </p>

          <Separator />

          {/* Theme Preset */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">{t("themePreset")}</Label>
            <Select
              value={themePreset}
              onValueChange={(v) =>
                setPreference("themePreset", v as ThemePreset)
              }
            >
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Fonts */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">{t("fonts")}</Label>
            <Select
              value={font}
              onValueChange={(v) => setPreference("font", v as Font)}
            >
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="geist">Geist</SelectItem>
                <SelectItem value="mono">Mono</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Theme Mode */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">{t("themeMode")}</Label>
            <ToggleGroup
              type="single"
              value={theme}
              onValueChange={(v) => v && setTheme(v)}
              className="w-full"
            >
              <ToggleGroupItem value="light" className="flex-1 text-xs">
                {t("lightMode")}
              </ToggleGroupItem>
              <ToggleGroupItem value="dark" className="flex-1 text-xs">
                {t("darkMode")}
              </ToggleGroupItem>
              <ToggleGroupItem value="system" className="flex-1 text-xs">
                {t("system")}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Page Layout */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">{t("pageLayout")}</Label>
            <ToggleGroup
              type="single"
              value={pageLayout}
              onValueChange={(v) =>
                v && setPreference("pageLayout", v as PageLayout)
              }
              className="w-full"
            >
              <ToggleGroupItem value="centered" className="flex-1 text-xs">
                {t("centered")}
              </ToggleGroupItem>
              <ToggleGroupItem value="full-width" className="flex-1 text-xs">
                {t("fullWidth")}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Navbar Behavior */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">{t("navbarBehavior")}</Label>
            <ToggleGroup
              type="single"
              value={navbarBehavior}
              onValueChange={(v) =>
                v && setPreference("navbarBehavior", v as NavbarBehavior)
              }
              className="w-full"
            >
              <ToggleGroupItem value="sticky" className="flex-1 text-xs">
                {t("sticky")}
              </ToggleGroupItem>
              <ToggleGroupItem value="scroll" className="flex-1 text-xs">
                {t("scrollNav")}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Sidebar Style */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">{t("sidebarStyle")}</Label>
            <ToggleGroup
              type="single"
              value={sidebarStyle}
              onValueChange={(v) =>
                v && setPreference("sidebarStyle", v as SidebarStyle)
              }
              className="w-full"
            >
              <ToggleGroupItem value="inset" className="flex-1 text-xs">
                {t("inset")}
              </ToggleGroupItem>
              <ToggleGroupItem value="sidebar" className="flex-1 text-xs">
                {t("sidebarLabel")}
              </ToggleGroupItem>
              <ToggleGroupItem value="floating" className="flex-1 text-xs">
                {t("floatingLabel")}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Sidebar Collapse Mode */}
          <div className="space-y-2">
            <Label className="text-xs font-medium">
              {t("sidebarCollapseMode")}
            </Label>
            <ToggleGroup
              type="single"
              value={sidebarCollapseMode}
              onValueChange={(v) =>
                v &&
                setPreference("sidebarCollapseMode", v as SidebarCollapseMode)
              }
              className="w-full"
            >
              <ToggleGroupItem value="icon" className="flex-1 text-xs">
                {t("iconMode")}
              </ToggleGroupItem>
              <ToggleGroupItem value="offcanvas" className="flex-1 text-xs">
                {t("offcanvas")}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <Separator />

          {/* Restore Defaults */}
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => {
              restoreDefaults();
              setTheme("system");
            }}
          >
            {t("restoreDefaults")}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
