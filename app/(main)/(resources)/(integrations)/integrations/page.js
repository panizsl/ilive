import ContentCard from "@/shared/components/cards/ContentCard";
import IntegrationCard from "@/shared/components/cards/IntegrationCard";
import InfoCard from "@/shared/components/cards/IntegrationCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import ContactCTA from "@/shared/components/sections/ContactCTA";
import TabNavigation from "@/shared/components/ui/TabNavigation";
import Video from "@/shared/components/ui/video";
import { Search, Book, ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const CallToAction = dynamic(
  () => import("@/shared/components/sections/CallToAction"),
);

function IntegrationsPage() {
  const jobCategories = [
    { id: "all", name: " همه نرم‌افزار‌ها", isActive: true },
    { id: "software", name: "جدید‌ترین‌ها", isActive: false },
    { id: "hardware", name: "بازی‌ و سرگرمی", isActive: false },
    { id: "design", name: "شبکه‌های اجتماعی", isActive: false },
    { id: "marketing", name: "کانال‌های آموزشی", isActive: false },
  ];

  return (
    <>
      {/* Navbar (breadcrumb) */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "منابع", href: "/", active: false },
            { label: "نرم افزار های یکپارچه", active: false },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      {/* Header Section */}
      <header
        className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:p-20"
        aria-labelledby="header-title"
      >
        {/* Text Content Container */}
        <div
          className="flex flex-col order-first md:order-0
      /* Mobile Styles */
      w-90 pt-10 pb-10 px-4 gap-5
      /* Desktop Styles */
      lg:w-150.25 lg:h-61.5 lg:p-0 lg:gap-6"
        >
          {/* Title Section */}
          <h1 id="header-title" className="type-h2 text-white text-right">
            نرم‌افزارهای یکپارچه
          </h1>

          {/* Description Section */}
          <p id="header-desc" className="type-body-1 text-white-1 text-right">
            آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف
            شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش
            مانند YouTube، Twitch، LinkedIn و Aparat — همه تنها با چند کلیک به
            آیلایو متصل می‌شوند. این یکپارچگی، فرآیند استریم را ساده، سریع و
            بدون نیاز به تنظیمات پیچیده می‌کند.
          </p>
        </div>

        {/* Video Container */}
        <div className="flex flex-col items-center justify-center order-2 lg:order-1 w-90 h-81.5 px-4 gap-20 lg:w-auto lg:h-auto lg:p-0 lg:gap-0">
          <Video
            poster="/assets/images/article3.jpg"
            size="medium"
            src=""
            caption="درباره یکپارچکی نرم‌افزاری بیشتر بدانید..."
          />
        </div>
      </header>
      {/* --- Main Navigation Bar (Tabs + Search + InfoCard) --- */}
      <section
        className="container mx-auto px-4 lg:px-0 mb-8 max-w-7xl"
        aria-label="Secondary navigation"
      >
        <nav className="w-full h-auto lg:h-25 py-6 flex flex-col lg:flex-row items-center justify-between lg:gap-10 mx-auto">
          {/* Tab navigation */}
          <div className="w-full lg:w-auto flex-1 flex justify-center lg:justify-start">
            <TabNavigation
              items={jobCategories}
              title="دسته‌بندی مشاغل"
              variant="mobile-style"
            />
          </div>

          {/* search */}
          <form
            role="search"
            className="w-full lg:w-84 flex justify-center items-center min-h-13"
          >
            <div className="relative w-full max-w-82 pr-5 flex items-center justify-center h-full gap-3 py-2.25 bg-teritary-2 rounded-xl transition-opacity hover:opacity-90">
              <Search size={24} color="white" />

              {/* search input */}
              <input
                type="search"
                placeholder="جستجو"
                className="w-full h-full bg-transparent border-none outline-none type-body-1-5 text-white-2 text-sm placeholder:white-2"
              />
            </div>
          </form>
        </nav>

        {/* Grid Layout InfoCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-5 lg:py-15 w-full justify-items-center">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full flex justify-center lg:h-84">
              <IntegrationCard
                variant="secondary"
                title="یوتوب (Youtube)"
                description="معروف‌ترین و بزرگ‌ترین پلتفرم اشتراک ویدئو در اینترنت با بیش از دو میلیارد یوزر فعال"
                icon="youtube.svg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ContactCTA section */}
      <section
        aria-labelledby="contact-heading"
        className="container mx-auto items-cente text-center"
      >
        <h2 id="contact-heading" className="sr-only">
          تماس با ما
        </h2>

        <div className="w-full items-center justify-center p-10">
          <ContactCTA
            title="نرم‌افزار مورد نیاز خود را پیدا نکردید؟ "
            description="شما ‌می‌توانید درخواست خود را ثبت کنید و تیم ‌آیلایو در سریع‌ترین زمان ممکن اون رو به لیست اضافه کنند."
            buttonText="ارتباط با آیلایو"
          />
        </div>
      </section>

      {/* Target Audience Carousel Section */}
      <section
        aria-labelledby="connect-section-title"
        className="w-full py-10 "
      >
        <h2 id="carousel-title" className="sr-only">
          آموزش‌های اتصال به پلتفرم‌های استریم
        </h2>

        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center mb-10 w-full h-12">
            <h2
              id="connect-section-title"
              className="text-white text-right type-h4"
            >
              چگونه متصل شویم؟
            </h2>

            <button className="group hidden desktop:flex cursor-pointer ml-5 items-center gap-2 text-secondary-2 transition-opacity type-subtitle-1">
              <span>مشاهده همه</span>
              <ChevronLeft
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5"
                strokeWidth={2.5}
              />
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
            <div className="min-w-[85%] sm:min-w-[45%] lg:min-w-full snap-start transition-all">
              <ContentCard
                variant="secondary"
                imageSrc="/assets/images/event1.png"
                imageAlt=""
                description="آموزش اتصال نرم‌افزارهای live stream به پلتفرم توییچ (Twitch) به صورت خودکار"
                tagText="مطلب خواندنی"
                icon={<Book size={18} />}
              />
            </div>

            <div className="min-w-[85%] sm:min-w-[45%] lg:min-w-full snap-start transition-all">
              <ContentCard
                variant="secondary"
                imageSrc="/assets/images/event1.png"
                imageAlt=""
                description="آموزش اتصال نرم‌افزارهای live stream به پلتفرم یوتیوب به صورت خودکار"
                tagText="ویدیو آموزشی"
                icon={<Video size={18} />}
              />
            </div>

            <div className="min-w-[85%] sm:min-w-[45%] lg:min-w-full snap-start transition-all">
              <ContentCard
                variant="secondary"
                imageSrc="/assets/images/event1.png"
                imageAlt=""
                description="آموزش اتصال نرم‌افزارهای live stream به پلتفرم کیک (KICK) به صورت خودکار"
                tagText="مطلب خواندنی"
                icon={<Book size={18} />}
              />
            </div>
          </div>
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

      {/* CallToAction */}
      <aside className="w-full" aria-label="Registration Call to Action">
        <CallToAction
          tagline="با آیلایو؛"
          title="پخش کنید و به گوش دنیا برسانید"
          buttonText="ساخت اکانت رایگان"
          backgroundImage="/assets/images/frame5.png"
        />
      </aside>
    </>
  );
}

export default IntegrationsPage;
