import "./globals.css";
import localFont from "next/font/local";
import LayoutWrapper from "@/layout/LayoutWrapper";
import {
  fetchGraphQL,
  GET_HEADER_PRODUCTS,
  GET_FOOTER_PRODUCTS,
  transformHeaderProducts,
  transformFooterProducts,
} from "@/lib/graphql";

// YekanBakh Variable Font - Best practice for modern browsers
const yekanBakhVF = localFont({
  src: "../public/fonts/YekanBakh-VF.ttf",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Tahoma", "Arial"],
  variable: "--font-yekan-bakh",
});

// YekanBakh Static Fonts - Fallback for older browsers
const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakh-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/YekanBakh-ExtraBlack.ttf",
      weight: "950",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Tahoma", "Arial"],
  variable: "--font-yekan-bakh-static",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ilive.ir";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "آیلایو | بزرگترین پلتفرم پخش آنلاین ایران",
    template: "%s | آیلایو",
  },
  description:
    "آیلایو پلتفرم جامع پخش آنلاین با قابلیت‌های استریم، ری‌استریم، VOD و اتاق رویداد. به راحتی با OBS، vMix، Zoom و پلتفرم‌های YouTube، LinkedIn و Aparat یکپارچه شوید.",
  keywords: [
    "پخش آنلاین",
    "استریم",
    "ری‌استریم",
    "VOD",
    "پلتفرم استریم ایران",
    "آیلایو",
    "iLive",
    "پخش زنده",
    "لایو استریم",
    "وبینار",
  ],
  authors: [{ name: "آیلایو", url: baseUrl }],
  creator: "آیلایو",
  publisher: "آیلایو",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: baseUrl,
    siteName: "آیلایو",
    title: "آیلایو | بزرگترین پلتفرم پخش آنلاین ایران",
    description:
      "پلتفرم جامع پخش آنلاین با قابلیت‌های استریم، ری‌استریم، VOD و اتاق رویداد",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "آیلایو - پلتفرم پخش آنلاین",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آیلایو | بزرگترین پلتفرم پخش آنلاین ایران",
    description:
      "پلتفرم جامع پخش آنلاین با قابلیت‌های استریم، ری‌استریم، VOD و اتاق رویداد",
    images: ["/og-image.png"],
    creator: "@ilive_ir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "fa-IR": baseUrl,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#81d44d" },
    { media: "(prefers-color-scheme: dark)", color: "#041a20" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({ children }) {
  // Fetch header and footer products data in parallel
  let headerProducts = [];
  let footerProducts = [];

  try {
    const [headerData, footerData] = await Promise.all([
      fetchGraphQL(GET_HEADER_PRODUCTS, {}, { revalidate: 3600 }),
      fetchGraphQL(GET_FOOTER_PRODUCTS, {}, { revalidate: 3600 }),
    ]);
    headerProducts = transformHeaderProducts(headerData);
    footerProducts = transformFooterProducts(footerData);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "آیلایو",
    alternateName: "iLive",
    url: baseUrl,
    logo: `${baseUrl}/assets/logo/iLiveLogo.svg`,
    description:
      "بزرگترین پلتفرم پخش آنلاین ایران با قابلیت‌های استریم، ری‌استریم، VOD و اتاق رویداد",
    sameAs: [
      // Add your social media URLs here
      // "https://twitter.com/ilive_ir",
      // "https://instagram.com/ilive_ir",
      // "https://linkedin.com/company/ilive",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Persian", "English"],
    },
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${yekanBakh.className} ${yekanBakh.variable} ${yekanBakhVF.variable}`}>
        <LayoutWrapper
          headerProducts={headerProducts}
          footerProducts={footerProducts}
        >
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
