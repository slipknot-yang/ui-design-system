"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemePreset = "default" | "blue" | "green" | "orange";
export type Font = "inter" | "geist" | "mono";
export type PageLayout = "centered" | "full-width";
export type NavbarBehavior = "sticky" | "scroll";
export type SidebarStyle = "inset" | "sidebar" | "floating";
export type SidebarCollapseMode = "icon" | "offcanvas";

export interface Preferences {
  themePreset: ThemePreset;
  font: Font;
  pageLayout: PageLayout;
  navbarBehavior: NavbarBehavior;
  sidebarStyle: SidebarStyle;
  sidebarCollapseMode: SidebarCollapseMode;
}

const DEFAULTS: Preferences = {
  themePreset: "default",
  font: "inter",
  pageLayout: "full-width",
  navbarBehavior: "sticky",
  sidebarStyle: "sidebar",
  sidebarCollapseMode: "offcanvas",
};

const COOKIE_NAME = "dashboard-preferences";

function readCookie(): Partial<Preferences> {
  if (typeof document === "undefined") return {};
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`),
  );
  if (!match?.[1]) return {};
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return {};
  }
}

function writeCookie(prefs: Preferences) {
  const maxAge = 365 * 24 * 60 * 60;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(prefs))};path=/;max-age=${maxAge};SameSite=Lax`;
}

interface PreferencesContextValue extends Preferences {
  setPreference: <K extends keyof Preferences>(
    key: K,
    value: Preferences[K],
  ) => void;
  restoreDefaults: () => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<Preferences>(() => ({
    ...DEFAULTS,
    ...readCookie(),
  }));

  useEffect(() => {
    writeCookie(prefs);
  }, [prefs]);

  // Apply font class to html element
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("font-inter", "font-geist", "font-mono");
    html.classList.add(`font-${prefs.font}`);
  }, [prefs.font]);

  const setPreference = useCallback(
    <K extends keyof Preferences>(key: K, value: Preferences[K]) => {
      setPrefs((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const restoreDefaults = useCallback(() => {
    setPrefs(DEFAULTS);
  }, []);

  return (
    <PreferencesContext.Provider
      value={{ ...prefs, setPreference, restoreDefaults }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx)
    throw new Error("usePreferences must be used within PreferencesProvider");
  return ctx;
}

export { DEFAULTS as PREFERENCE_DEFAULTS };
