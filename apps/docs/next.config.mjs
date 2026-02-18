import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  ...(isStaticExport && {
    output: "export",
    ...(basePath && { basePath }),
    images: { unoptimized: true },
  }),
};

export default withNextIntl(nextConfig);
