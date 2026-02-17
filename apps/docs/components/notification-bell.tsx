"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Bell, Check, Info, FileText, ClipboardCheck } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";

interface Notification {
  id: string;
  titleKey: string;
  descKey: string;
  icon: typeof Bell;
  time: { key: "minutesAgo" | "hoursAgo"; count: number };
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    titleKey: "notifSystemUpdate",
    descKey: "notifSystemUpdateDesc",
    icon: Info,
    time: { key: "minutesAgo", count: 5 },
    read: false,
  },
  {
    id: "2",
    titleKey: "notifNewDeclaration",
    descKey: "notifNewDeclarationDesc",
    icon: FileText,
    time: { key: "minutesAgo", count: 32 },
    read: false,
  },
  {
    id: "3",
    titleKey: "notifInspectionComplete",
    descKey: "notifInspectionCompleteDesc",
    icon: ClipboardCheck,
    time: { key: "hoursAgo", count: 2 },
    read: true,
  },
];

export function NotificationBell() {
  const t = useTranslations("common");
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function markRead(id: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute end-1 top-1 flex h-2 w-2 items-center justify-center rounded-full bg-red-600" />
          )}
          <span className="sr-only">{t("notifications")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <h4 className="text-sm font-semibold">
            {t("notifications")}
            {unreadCount > 0 && (
              <span className="ms-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                {unreadCount}
              </span>
            )}
          </h4>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
              onClick={markAllRead}
            >
              <Check className="me-1 h-3 w-3" />
              {t("markAllRead")}
            </Button>
          )}
        </div>

        <Separator />

        {/* Notification list */}
        <div className="max-h-72 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
              <Bell className="mb-2 h-8 w-8 opacity-40" />
              <p className="text-sm">{t("noNotifications")}</p>
            </div>
          ) : (
            notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <button
                  key={notification.id}
                  className={cn(
                    "flex w-full items-start gap-3 px-4 py-3 text-start transition-colors hover:bg-muted/50",
                    !notification.read && "bg-muted/30",
                  )}
                  onClick={() => markRead(notification.id)}
                >
                  <div
                    className={cn(
                      "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      !notification.read
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <p
                        className={cn(
                          "text-sm leading-tight",
                          !notification.read && "font-medium",
                        )}
                      >
                        {t(notification.titleKey)}
                      </p>
                      {!notification.read && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {t(notification.descKey)}
                    </p>
                    <p className="text-[10px] text-muted-foreground/70">
                      {t(notification.time.key, {
                        count: notification.time.count,
                      })}
                    </p>
                  </div>
                </button>
              );
            })
          )}
        </div>

        <Separator />

        {/* Footer */}
        <div className="p-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-xs text-muted-foreground hover:text-foreground"
          >
            {t("viewAll")}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
