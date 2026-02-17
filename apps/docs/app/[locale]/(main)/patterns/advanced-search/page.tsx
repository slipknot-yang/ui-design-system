import { getTranslations, setRequestLocale } from "next-intl/server";
import { AdvancedSearchTable } from "@/components/patterns/advanced-search-table";

export default async function AdvancedSearchPage({
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
          {t("advancedSearch.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("advancedSearch.description")}
        </p>
      </div>
      <AdvancedSearchTable />
    </div>
  );
}
