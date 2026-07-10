import ContentCard from "@/shared/components/cards/ContentCard";
import InfoCard from "@/shared/components/cards/IntegrationCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import React from "react";

function CaseStudiesPage() {
  const CASE_STUDIES = [
    {
      id: 1,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/event1.png",
    },
    {
      id: 2,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/event3.png",
    },
    {
      id: 3,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/article1.jpg",
    },
    {
      id: 4,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/event4.png",
    },
    {
      id: 5,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/article2.jpg",
    },
    {
      id: 6,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/article3.jpg",
    },
    {
      id: 7,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/event1.png",
    },
    {
      id: 8,
      tagText: "کیس استادی",
      title: "هم‌زمانی بی‌نقص استریم مسابقات eSports ایران در یوتیوب و آپارات",
      date: "۱۴ اردیبهشت ۱۴۰۴",
      imageSrc: "/assets/images/article1.jpg",
    },
  ];
  return (
    <>
      {/* Navbar (breadcrumb) */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "در کنار اینتلیو", href: "/", active: false },
            { label: "سؤالات متداول", active: false },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>

      {/* (case studies) */}
      <section
        id="events-gallery"
        aria-label="لیست رویدادها و مقالات"
        className="container mx-auto w-full min-h-440 pt-20 px-5 md:px-10 lg:px-20 pb-20"
      >
        {/* (Header Section) */}
        <header className="w-full flex justify-start pb-10">
          <h2
            id="main-section-title"
            className="
            w-60 h-12 flex items-center type-h4
            text-right text-white
          "
          >
            کیس استادی‌ها
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {CASE_STUDIES.map((item) => (
            <article
              key={item.id}
              id={`content-card-${item.id}`}
              aria-labelledby={`card-title-${item.id}`}
            >
              <ContentCard
                variant="default"
                imageSrc={item.imageSrc}
                imageAlt=""
                tagText={item.tagText}
                description={item.title}
                date={item.date}
                titleId={`card-title-${item.id}`}
              />
            </article>
          ))}
        </div>
      </section>
      {/* know more section */}
      <section
        className="w-full mx-auto"
        id="learning-resources"
        aria-labelledby="learning-resources-title"
      >
        <div className="max-w-360 mx-auto pt-10 px-5 md:px-20 pb-50">
          {/* header (know more) */}
          <header className="flex justify-start text-right mb-10">
            <h4
              id="learning-resources-title"
              className="type-h4 text-white text-right"
            >
              بیشتر بدانید
            </h4>
          </header>

          {/* InfoCards Grid */}
          <div
            role="list"
            aria-label="لیست منابع آموزشی و راهنما"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center"
          >
            {[1, 2, 3, 4].map((list) => (
              <InfoCard
                key={list}
                title="آموزشکده آیلیو"
                description="مشاهده ویدیوهای نرم‌افزار و آموزش استفاده از آن"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudiesPage;
