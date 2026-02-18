import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  ...(isGithubPages && {
    output: "export",
    basePath: "/ui-design-system",
    images: { unoptimized: true },
  }),
};

export default withNextIntl(nextConfig);
