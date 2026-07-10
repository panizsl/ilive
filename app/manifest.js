export default function manifest() {
  return {
    name: "آیلایو - پلتفرم پخش آنلاین",
    short_name: "آیلایو",
    description:
      "بزرگترین پلتفرم پخش آنلاین ایران با قابلیت‌های استریم، ری‌استریم، VOD و اتاق رویداد",
    start_url: "/",
    display: "standalone",
    background_color: "#041a20",
    theme_color: "#81d44d",
    dir: "rtl",
    lang: "fa",
    orientation: "portrait-primary",
    scope: "/",
    categories: ["entertainment", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
