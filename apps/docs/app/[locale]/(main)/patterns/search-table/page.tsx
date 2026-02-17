import { getTranslations, setRequestLocale } from "next-intl/server";
import { DeclarationsDataTable } from "@/components/patterns/declarations-data-table";

export default async function SearchTablePage({
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
          {t("searchTable.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("searchTable.description")}
        </p>
      </div>
      <DeclarationsDataTable />
    </div>
  );
}
