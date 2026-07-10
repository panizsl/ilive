export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ilive.ir";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
