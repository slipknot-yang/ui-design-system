import { getTranslations, setRequestLocale } from "next-intl/server";
import { GovSearchDetail } from "@/components/patterns2/gov-search-detail";

export default async function GovSearchDetailPage({
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
          {t("govSearchDetail.title")}
        </h1>
        <p className="text-muted-foreground mt-1">
          {t("govSearchDetail.description")}
        </p>
      </div>
      <GovSearchDetail />
    </div>
  );
}
