import { getTranslations, setRequestLocale } from "next-intl/server";
import { EventCalendar } from "@/components/patterns/event-calendar";

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("patterns");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("calendar.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("calendar.description")}
        </p>
      </div>
      <EventCalendar />
    </div>
  );
}
