import ContentCard from "@/shared/components/cards/ContentCard";
import InfoCard from "@/shared/components/cards/IntegrationCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import SupportBanner from "@/shared/components/ui/SupportBanner";
import TabNavigation from "@/shared/components/ui/TabNavigation";
import { BookOpen, Video } from "lucide-react";
import React from "react";

function TutorialsPage() {
  const NAV_ITEMS = [
    { id: "all", name: "همه‌ی ویدیوها" },
    { id: "stream", name: "آموزش استریم" },
    { id: "restream", name: "آموزش ری‌استریم" },
    { id: "webinar", name: "رویداد و وبینار" },
    { id: "player", name: "کار با پلیر آیلایو" },
    { id: "subscription", name: "خرید/تمدید اشتراک" },
  ];

  const CARDS_DATA = [
    {
      id: 1,
      imageSrc: "/assets/images/event1.png",
      type: "video",
      tag: "ویدئو آموزشی",
      title:
        "آموزش از راه دور بدون قطعی؛ تجربه‌ی آکادمی آنلاین پویان‌لرن با آیلایو",
      icon: <Video size={18} />,
    },
    {
      id: 2,
      type: "book",
      tag: "مطلب خواندنی",
      imageSrc: "/assets/images/event3.png",
      title:
        "پشت‌صحنه‌ی پخش زنده‌ی جشنواره موسیقی فجر ۱۴۰۴ با زیرساخت Restream آیلایو",
      icon: <BookOpen size={18} />,
    },
    {
      id: 3,
      type: "video",
      tag: "ویدئو آموزشی",
      imageSrc: "/assets/images/article1.jpg",
      title:
        "آموزش از راه دور بدون قطعی؛ تجربه‌ی آکادمی آنلاین پویان‌لرن با آیلایو",
      icon: <Video size={18} />,
    },
    {
      id: 4,
      type: "book",
      tag: "مطلب خواندنی",
      imageSrc: "/assets/images/article1.jpg",
      title:
        "پشت‌صحنه‌ی پخش زنده‌ی جشنواره موسیقی فجر ۱۴۰۴ با زیرساخت Restream آیلایو",
      icon: <BookOpen size={18} />,
    },
    {
      id: 5,
      type: "video",
      tag: "ویدئو آموزشی",
      imageSrc: "/assets/images/article1.jpg",
      title:
        "آموزش از راه دور بدون قطعی؛ تجربه‌ی آکادمی آنلاین پویان‌لرن با آیلایو",
      icon: <Video size={18} />,
    },
    {
      id: 6,
      type: "book",
      tag: "مطلب خواندنی",
      imageSrc: "/assets/images/article1.jpg",
      title:
        "پشت‌صحنه‌ی پخش زنده‌ی جشنواره موسیقی فجر ۱۴۰۴ با زیرساخت Restream آیلایو",
      icon: <BookOpen size={18} />,
    },
    {
      id: 7,
      type: "video",
      tag: "ویدئو آموزشی",
      imageSrc: "/assets/images/event1.png",
      title:
        "آموزش از راه دور بدون قطعی؛ تجربه‌ی آکادمی آنلاین پویان‌لرن با آیلایو",
      icon: <Video size={18} />,
    },
    {
      id: 8,
      type: "book",
      tag: "مطلب خواندنی",
      imageSrc: "/assets/images/article1.jpg",
      title:
        "پشت‌صحنه‌ی پخش زنده‌ی جشنواره موسیقی فجر ۱۴۰۴ با زیرساخت Restream آیلایو",
      icon: <BookOpen size={18} />,
    },
  ];
  return (
    <>
      {/* Navbar (breadcrumb) */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "منابع", href: "/", active: false },
            { label: "آموزشکده آیلایو", active: false },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      <header
        aria-labelledby="tutorials-page-title"
        className="container mx-auto desktop:pb-30 pb-13 md:pt-35 pt-15 justify-between"
      >
        <h1
          id="tutorials-page-title"
          className="text-white type-h2 text-center"
        >
          آموزشکده آیلایو
        </h1>
      </header>

      {/* Main Section */}
      <main
        id="tutorials-page-content"
        aria-labelledby="tutorials-page-title"
        className="max-w-360 mx-auto flex flex-col desktop:flex-row justify-between items-start px-5 tablet:px-10 desktop:px-47.5 md:pt-10 pb-40"
      >
        {/* Right Side - Tab Navigation */}
        <aside className="w-full desktop:w-47 sticky top-24 desktop:-mt-20">
          <TabNavigation title="فیلتر ویدئوها بر اساس" items={NAV_ITEMS} />
        </aside>

        {/* Left Side - Content Cards */}
        <section
          aria-labelledby="tutorials-list-title"
          className="w-full desktop:w-202 mt-10 desktop:mt-0 "
        >
          <h2 id="tutorials-list-title" className="sr-only">
            لیست ویدیوها و مطالب آموزشی آیلایو
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-13 justify-items-center md:justify-items-start">
            {CARDS_DATA.map((card) => (
              <ContentCard
                key={card.id}
                variant="secondary"
                imageSrc={card.imageSrc}
                imageAlt={card.title}
                tagText={card.tag}
                description={card.title}
                icon={card.icon}
              />
            ))}
          </div>
        </section>
      </main>
      {/* Suport Banner */}
      <aside className="container mx-auto pb-20" aria-label="Support Banner">
        <h3 id="support-banner-title" className="sr-only">
          پشتیبانی
        </h3>

        <SupportBanner
          variant="withImage"
          imageSrc="/assets/images/group1.png"
        />
      </aside>
      {/* Know More Section */}
      <section
        className="w-full mx-auto"
        id="learning-resources"
        aria-labelledby="learning-resources-title"
      >
        <div className="max-w-360 mx-auto pt-10 px-5 md:px-20 md:pb-50 pb-30">
          {/* Header (Know More) */}
          <header className="flex justify-start text-right mb-10">
            <h4
              id="learning-resources-title"
              className="type-h4 text-white text-right"
            >
              بیشتر بدانید
            </h4>
          </header>

          {/* InfoCards Grid */}
          <ul
            aria-label="List of educational resources and guides"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center"
          >
            {[1, 2, 3, 4].map((list) => (
              <li key={list}>
                <InfoCard
                  title="آموزشکده آیلیو"
                  description="مشاهده ویدیوهای نرم‌افزار و آموزش استفاده از آن"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default TutorialsPage;
