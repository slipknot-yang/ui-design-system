"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Separator } from "@workspace/ui/components/separator";
import { Badge } from "@workspace/ui/components/badge";
import {
  Shield,
  Globe,
  Eye,
  EyeOff,
  Building2,
  User,
  ArrowRight,
} from "lucide-react";
import { CountrySwitcher } from "@/components/country-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function LoginPage() {
  const t = useTranslations("common");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"company" | "personal">("company");

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-background via-background to-muted/50 p-4">
      {/* Top bar */}
      <div className="flex w-full max-w-[420px] items-center justify-end gap-2 py-2">
        <CountrySwitcher />
        <Select defaultValue="ko">
          <SelectTrigger className="h-8 w-[120px] text-xs">
            <Globe className="mr-1 h-3 w-3" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ko">한국어</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
            <SelectItem value="ar">العربية</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="ja">日本語</SelectItem>
            <SelectItem value="zh">中文</SelectItem>
          </SelectContent>
        </Select>
        <ThemeSwitcher />
      </div>

      {/* Logo & title */}
      <Link href="/" className="mt-auto mb-8 text-center block">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
          <Shield className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">CUPIA</h1>
        <p className="text-sm text-muted-foreground">
          Customs Administration System
        </p>
      </Link>

      {/* Login card */}
      <Card className="w-full max-w-[420px] shadow-xl">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-xl">{t("welcome")}</CardTitle>
          <CardDescription>{t("loginDescription")}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* User type toggle */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={userType === "company" ? "default" : "outline"}
              size="sm"
              className="h-9"
              onClick={() => setUserType("company")}
            >
              <Building2 className="mr-2 h-4 w-4" />
              {t("companyUser")}
            </Button>
            <Button
              variant={userType === "personal" ? "default" : "outline"}
              size="sm"
              className="h-9"
              onClick={() => setUserType("personal")}
            >
              <User className="mr-2 h-4 w-4" />
              {t("personalUser")}
            </Button>
          </div>

          <Separator />

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@customs.gov"
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{t("password")}</Label>
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {t("forgotPassword")}
              </button>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("rememberMe")}
            </label>
          </div>

          {/* Login button */}
          <Button className="w-full" size="lg">
            {t("login")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>

        <CardFooter className="flex-col gap-3 pt-0">
          <Separator />
          <div className="flex w-full items-center justify-between text-sm">
            <span className="text-muted-foreground">{t("register")}</span>
            <Link href="/">
              <Button variant="link" size="sm" className="h-auto p-0">
                {t("register")} <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>

      {/* Footer */}
      <div className="mt-auto pt-8 flex items-center gap-2 text-xs text-muted-foreground">
        <Badge variant="outline" className="text-[10px]">
          v1.0.0
        </Badge>
        <span>© 2026 CUPIA. {t("allRightsReserved")}</span>
      </div>
    </div>
  );
}
