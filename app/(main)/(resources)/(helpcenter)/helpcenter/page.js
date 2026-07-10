import React from "react";
import InfoCard from "@/shared/components/cards/IntegrationCard";
import FAQ from "@/shared/components/sections/FAQ";
import TabNavigation from "@/shared/components/ui/TabNavigation";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import dynamic from "next/dynamic";
import Hero from "@/shared/components/sections/Hero";
import HelpCenterPageClient from "./_components/HelpCenterPageClient";

const CallToAction = dynamic(
  () => import("@/shared/components/sections/CallToAction"),
);

function HelpCenterPage() {
  // Navigation items configuration
  const navItems = [
    { id: "general-section", name: "عمومی" },
    { id: "platform-start-section1", name: "شروع به کار پلتفرم" },
    { id: "platform-start-section2", name: "نحوه خرید اشتراک" },
    { id: "platform-start-section3", name: "سرویس استریم" },
    { id: "platform-start-section4", name: "سرویس ری‌استریم" },
  ];

  return (
    <>
      {/* Navbar (breadcrumb) */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "منابع", href: "/", active: false },
            { label: "سؤالات متداول", active: false },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      <Hero title="سؤالات متداول آیلایو" />

      {/* Main Content Area - Wrapped in Client Component */}
      <HelpCenterPageClient navItems={navItems}>
        {/* Section 1: FAQ - عمومی */}
        <div id="general-section" className="flex flex-col gap-6 scroll-mt-32">
          <div id="general-section" className="flex flex-col gap-6">
            <FAQ
              categoryTitle="عمومی"
              items={[
                {
                  id: 1,
                  question: "آیلایو چیست و چه خدماتی ارائه می‌دهد؟",
                  answer:
                    "آیلایو یک پلتفرم جامع پخش زنده است که امکان استریم با کیفیت بالا، مدیریت چند پلتفرم همزمان، تحلیل و گزارش‌گیری و بسیاری امکانات دیگر را در اختیار شما قرار می‌دهد.",
                },
                {
                  id: 2,
                  question: "چگونه می‌توانم اکانت رایگان بسازم؟",
                  answer:
                    "برای ساخت اکانت رایگان کافیست روی دکمه 'شروع رایگان' کلیک کنید و فرم ثبت‌نام را تکمیل کنید. در عرض چند دقیقه می‌توانید از امکانات آیلایو استفاده کنید.",
                },
                {
                  id: 3,
                  question: "آیا آیلایو با OBS و سایر نرم‌افزارها سازگار است؟",
                  answer:
                    "بله، آیلایو به راحتی با نرم‌افزارهای محبوب مانند OBS، vMix، Zoom و بسیاری دیگر یکپارچه می‌شود و می‌توانید بدون نیاز به تنظیمات پیچیده از آن‌ها استفاده کنید.",
                },
                {
                  id: 4,
                  question: "هزینه استفاده از آیلایو چقدر است؟",
                  answer:
                    "آیلایو پلن‌های مختلفی دارد که از پلن رایگان شروع می‌شود. برای اطلاعات بیشتر درباره قیمت‌گذاری می‌توانید به صفحه تعرفه‌ها مراجعه کنید.",
                },
                {
                  id: 5,
                  question: "آیا پشتیبانی فنی ارائه می‌دهید؟",
                  answer:
                    "بله، تیم پشتیبانی ما ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی به سوالات و رفع مشکلات شما است. می‌توانید از طریق چت، ایمیل یا تلفن با ما در ارتباط باشید.",
                },
              ]}
              defaultOpenId={1}
            />
          </div>

          {/* Section 2: FAQ */}
          <div id="platform-start-section1" className="flex flex-col">
            <FAQ
              categoryTitle="شروع به کار پلتفرم"
              items={[
                {
                  id: 1,
                  question: "آیلایو چیست و چه خدماتی ارائه می‌دهد؟",
                  answer:
                    "آیلایو یک پلتفرم جامع پخش زنده است که امکان استریم با کیفیت بالا، مدیریت چند پلتفرم همزمان، تحلیل و گزارش‌گیری و بسیاری امکانات دیگر را در اختیار شما قرار می‌دهد.",
                },
                {
                  id: 2,
                  question: "چگونه می‌توانم اکانت رایگان بسازم؟",
                  answer:
                    "برای ساخت اکانت رایگان کافیست روی دکمه 'شروع رایگان' کلیک کنید و فرم ثبت‌نام را تکمیل کنید. در عرض چند دقیقه می‌توانید از امکانات آیلایو استفاده کنید.",
                },
                {
                  id: 3,
                  question: "آیا آیلایو با OBS و سایر نرم‌افزارها سازگار است؟",
                  answer:
                    "بله، آیلایو به راحتی با نرم‌افزارهای محبوب مانند OBS، vMix، Zoom و بسیاری دیگر یکپارچه می‌شود و می‌توانید بدون نیاز به تنظیمات پیچیده از آن‌ها استفاده کنید.",
                },
                {
                  id: 4,
                  question: "هزینه استفاده از آیلایو چقدر است؟",
                  answer:
                    "آیلایو پلن‌های مختلفی دارد که از پلن رایگان شروع می‌شود. برای اطلاعات بیشتر درباره قیمت‌گذاری می‌توانید به صفحه تعرفه‌ها مراجعه کنید.",
                },
                {
                  id: 5,
                  question: "آیا پشتیبانی فنی ارائه می‌دهید؟",
                  answer:
                    "بله، تیم پشتیبانی ما ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی به سوالات و رفع مشکلات شما است. می‌توانید از طریق چت، ایمیل یا تلفن با ما در ارتباط باشید.",
                },
              ]}
              defaultOpenId={1}
            />
          </div>
        </div>
      </HelpCenterPageClient>

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
          <div
            role="list"
            aria-label="لیست منابع آموزشی و راهنما"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center"
          >
            {[1, 2, 3, 4].map((item) => (
              <InfoCard
                key={item}
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

export default HelpCenterPage;
