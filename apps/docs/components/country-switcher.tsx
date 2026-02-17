"use client";

import { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Flag } from "lucide-react";

export type CountryTheme =
  | "korea"
  | "ecuador"
  | "ethiopia"
  | "algeria"
  | "ghana"
  | "cameroon"
  | "uzbekistan"
  | "tanzania"
  | "nepal"
  | "guatemala";

const countries: { code: CountryTheme; name: string; flag: string }[] = [
  { code: "korea", name: "대한민국", flag: "🇰🇷" },
  { code: "ecuador", name: "Ecuador", flag: "🇪🇨" },
  { code: "ethiopia", name: "Ethiopia", flag: "🇪🇹" },
  { code: "algeria", name: "Algérie", flag: "🇩🇿" },
  { code: "ghana", name: "Ghana", flag: "🇬🇭" },
  { code: "cameroon", name: "Cameroun", flag: "🇨🇲" },
  { code: "uzbekistan", name: "O'zbekiston", flag: "🇺🇿" },
  { code: "tanzania", name: "Tanzania", flag: "🇹🇿" },
  { code: "nepal", name: "Nepal", flag: "🇳🇵" },
  { code: "guatemala", name: "Guatemala", flag: "🇬🇹" },
];

export function CountrySwitcher() {
  const [current, setCurrent] = useState<CountryTheme>("korea");

  useEffect(() => {
    const saved = localStorage.getItem("country-theme") as CountryTheme | null;
    const theme = saved || "korea";
    setCurrent(theme);
    document.documentElement.dataset.countryTheme = theme;
  }, []);

  function onSelect(country: CountryTheme) {
    setCurrent(country);
    document.documentElement.dataset.countryTheme = country;
    localStorage.setItem("country-theme", country);
  }

  const currentCountry = countries.find((c) => c.code === current);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
          <span>{currentCountry?.flag}</span>
          <span>{currentCountry?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {countries.map((c) => (
          <DropdownMenuItem
            key={c.code}
            onClick={() => onSelect(c.code)}
            className={current === c.code ? "bg-accent" : ""}
          >
            <span className="me-2">{c.flag}</span>
            {c.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
