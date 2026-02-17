import { getTranslations, setRequestLocale } from "next-intl/server";
import { MasterDetailView } from "@/components/patterns/master-detail-view";

export default async function MasterDetailPage({
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
          {t("masterDetail.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("masterDetail.description")}
        </p>
      </div>
      <MasterDetailView />
    </div>
  );
}
