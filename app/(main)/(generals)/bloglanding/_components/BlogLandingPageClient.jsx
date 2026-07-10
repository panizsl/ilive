"use client";

import React, { useState, useMemo } from "react";
import ArticleCard from "@/shared/components/cards/ArticleCard";
import TabNavigation from "@/shared/components/ui/TabNavigation";

function BlogLandingPageClient() {
  const navItems = [
    { id: "1", name: "همه‌ی مقالات" },
    { id: "2", name: "آموزش استریم" },
    { id: "3", name: "رویداد و وبینار" },
    { id: "4", name: "کار با پلیر آیلایو" },
    { id: "5", name: "خرید/تمدید اشتراک" },
  ];

  const ARTICLES_DATA = [
    {
      id: 1,
      categoryId: "2",
      imageSrc: "/assets/images/article1.jpg",
      title: "آموزش اتصال نرم‌افزار‌ها Ilive stream به پلتفرم کیک (KICK)",
      tags: ["آموزش استریم", "KICK"],
      date: "۱۴ اردیبهشت ۱۴۰۵",
      readTime: "۵ دقیقه مطالعه",
    },
    {
      id: 2,
      categoryId: "2",
      imageSrc: "/assets/images/article2.jpg",
      title: "بررسی بهترین تجهیزات برای شروع استریمینگ در سال ۲۰۲۵",
      tags: ["آموزش استریم", "تجهیزات"],
      date: "۲۰ اردیبهشت ۱۴۰۵",
      readTime: "۷ دقیقه مطالعه",
    },
    {
      id: 3,
      categoryId: "3",
      imageSrc: "/assets/images/frame7.png",
      title: "چگونه بازدید لایو خود را در توییچ افزایش دهیم؟",
      tags: ["رویداد و وبینار", "توییچ"],
      date: "۲۵ اردیبهشت ۱۴۰۵",
      readTime: "۴ دقیقه مطالعه",
    },
    {
      id: 4,
      categoryId: "2",
      imageSrc: "/assets/images/article3.jpg",
      title: "راهنمای جامع تنظیمات OBS برای سیستم‌های ضعیف",
      tags: ["آموزش استریم", "OBS"],
      date: "۰۱ خرداد ۱۴۰۵",
      readTime: "۱۰ دقیقه مطالعه",
    },
    {
      id: 5,
      categoryId: "4",
      imageSrc: "/assets/images/article1.jpg",
      title: "شخصی‌سازی پلیر آیلایو برای برند شما",
      tags: ["کار با پلیر آیلایو", "برندینگ"],
      date: "۰۵ خرداد ۱۴۰۵",
      readTime: "۱۵ دقیقه مطالعه",
    },
    {
      id: 6,
      categoryId: "3",
      imageSrc: "/assets/images/article2.jpg",
      title: "تاثیر هوش مصنوعی بر آینده تولید محتوا و استریم",
      tags: ["رویداد و وبینار", "AI"],
      date: "۱۰ خرداد ۱۴۰۵",
      readTime: "۶ دقیقه مطالعه",
    },
    {
      id: 7,
      categoryId: "4",
      imageSrc: "/assets/images/frame7.png",
      title: "رفع مشکل تاخیر (Latency) در پلیر آیلایو",
      tags: ["کار با پلیر آیلایو", "آموزش"],
      date: "۱۴ خرداد ۱۴۰۵",
      readTime: "۵ دقیقه مطالعه",
    },
    {
      id: 8,
      categoryId: "5",
      imageSrc: "/assets/images/article3.jpg",
      title: "راهنمای گام‌به‌گام خرید و ارتقای پلن‌های آیلایو",
      tags: ["خرید/تمدید اشتراک", "آموزش"],
      date: "۱۸ خرداد ۱۴۰۵",
      readTime: "۸ دقیقه مطالعه",
    },
  ];

  const [activeTabId, setActiveTabId] = useState("1");

  const filteredArticles = useMemo(() => {
    if (activeTabId === "1") return ARTICLES_DATA;
    return ARTICLES_DATA.filter(
      (article) => article.categoryId === activeTabId,
    );
  }, [activeTabId]);

  return (
    <main className="w-full min-h-screen flex justify-center">
      <section className="w-full max-w-360 flex flex-col lg:flex-row items-start justify-between px-4 lg:px-47.5 gap-8 relative">
        {/* Sidebar: Tab Navigation */}
        <aside className="w-full lg:w-62.5 lg:sticky lg:top-24 shrink-0 z-10">
          <TabNavigation
            variant="boxed"
            title="دسته‌بندی مقالات"
            items={navItems}
            activeId={activeTabId}
            onItemClick={(id) => setActiveTabId(id)}
          />
        </aside>

        {/* Article Cards Section */}
        <div className="w-full max-w-202 desktop:pb-25 pb-10">
          {filteredArticles.length === 0 ? (
            <div className="text-center text-white-3 py-20 w-full">
              مقاله‌ای در این دسته‌بندی پیدا نشد.
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8 md:gap-x-8 md:gap-y-13">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  size="default"
                  imageSrc={article.imageSrc}
                  title={article.title}
                  tags={article.tags}
                  date={article.date}
                  readTime={article.readTime}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogLandingPageClient;
