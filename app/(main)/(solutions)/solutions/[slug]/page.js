import ServiceCard from "@/shared/components/cards/ServiceCard";
import TargetAudienceCard from "@/shared/components/cards/TargetAudienceCard";
import FAQ from "@/shared/components/sections/FAQ";
import IntroBanner from "@/shared/components/ui/IntroBanner";
import CarouselSectionWrapper from "@/shared/components/widgets/CarouselSectionWrapper";
import React from "react";
import SupportBanner from "@/shared/components/ui/SupportBanner";
import dynamic from "next/dynamic";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";

const Integration = dynamic(() =>
  import("@/shared/components/sections/Integration")
);
const Testimonials = dynamic(() =>
  import("@/shared/components/sections/Testimonials")
);
const TrustedBy = dynamic(() =>
  import("@/shared/components/sections/TrustedBy")
);
const Feature = dynamic(() => import("@/shared/components/sections/Feature"));

export default function SolutionsDetailPage() {
  // Static data
  const productsData = [
    {
      id: "stream",
      title: "پلتفرم استریم",
      description:
        "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود که فعالان گیم میتوانند به خوبی محتوای خود را به اشتراک بذارند",
      icon: "Play",
      iconColor: "text-yellow-1",
      buttonText: "مشاهده",
      href: "/products/stream",
    },
    {
      id: "restream",
      title: "سرویس ری‌استریم",
      description:
        "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود که فعالان گیم میتوانند به خوبی محتوای خود را به اشتراک بذارند",
      icon: "Camera",
      iconColor: "text-yellow-1",
      buttonText: "مشاهده",
      href: "/products/restream",
    },
    {
      id: "vod",
      title: "سرویس VOD",
      description:
        "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود که فعالان گیم میتوانند به خوبی محتوای خود را به اشتراک بذارند",
      icon: "Mic",
      iconColor: "text-yellow-1",
      buttonText: "مشاهده",
      href: "/products/vod",
    },
  ];

  const secondaryProductsData = [
    {
      id: "event-room",
      title: "اتاق رویداد",
      description:
        "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود که فعالان گیم میتوانند به خوبی محتوای خود را به اشتراک بذارند",
      icon: "Monitor",
      iconColor: "text-yellow-1",
      buttonText: "مشاهده",
      href: "/products/event-room",
    },
    {
      id: "player",
      title: "پخش‌کننده (Player)",
      description:
        "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود که فعالان گیم میتوانند به خوبی محتوای خود را به اشتراک بذارند",
      icon: "Settings",
      iconColor: "text-yellow-1",
      buttonText: "مشاهده",
      href: "/products/player",
    },
  ];
  return (
    <>
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "راهکار ها", href: "/", active: false },
            { label: "صنعت بازی و گیمینگ", active: false },
          ]}
          className="block px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      <section className="w-full max-w-360 mx-auto pt-33.5 pb-15 px-5 desktop:px-20">
        <IntroBanner
          variant="primary"
          backgroundImage="/assets/images/banner.png"
        />
      </section>
      {/* Trusted Companies Section */}
      <section
        aria-labelledby="trusted-title"
        className="border-y border-white-6 my-10 desktop:my-20"
      >
        <h2 id="trusted-title" className="sr-only">
          Trusted Companies
        </h2>
        <div className="container mx-auto">
          <TrustedBy
            titlePart1="به ما اعتماد کرده‌اند"
            titlePart2=" بیش از ۱۰۰۰ شرکت"
            logos={[
              { icon: "/assets/logo/iLiveLogo.svg", alt: "Logo 1" },
              { icon: "/assets/logo/iLiveLogo.svg", alt: "Logo 2" },
              { icon: "/assets/logo/iLiveLogo.svg", alt: "Logo 3" },
              { icon: "/assets/logo/iLiveLogo.svg", alt: "Logo 4" },
              { icon: "/assets/logo/iLiveLogo.svg", alt: "Logo 5" },
            ]}
          />
        </div>
      </section>

      {/* Target Audience Carousel Section */}
      <section aria-labelledby="carousel-title">
        <h2 id="carousel-title" className="sr-only">
          Target Audience
        </h2>
        <CarouselSectionWrapper
          title="فقط در پلتفرم آیلایو"
          description="آن‌چه برای شما به ارمغان آورده‌ایم..."
        >
          <TargetAudienceCard
            type="simple"
            imageSrc="/assets/images/frame7.png"
            title="گیمرها و فعالان سرگرمی"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
          <TargetAudienceCard
            type="simple"
            imageSrc="/assets/images/frame7.png"
            title="پلاگین‌های حرفه‌ای دنیای گیم"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
          <TargetAudienceCard
            type="simple"
            imageSrc="/assets/images/frame7.png"
            title="استریمرهای حرفه‌ای"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
          <TargetAudienceCard
            type="simple"
            imageSrc="/assets/images/frame7.png"
            title="مدرسین و اساتید آنلاین"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
        </CarouselSectionWrapper>
      </section>

      {/* Features Section */}
      <section
        className="container mx-auto px-4 py-20 flex flex-col gap-6 desktop:px-0 desktop:py-0 desktop:pb-32 desktop:gap-0"
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading" className="sr-only">
          Platform features and capabilities
        </h2>
        <Feature
          tagline="آن‌چه آیلایو ارائه میدهد"
          title="یک پلتفرم با کلی از قابلیت‌های مورد نیاز شما"
          description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، LinkedIn و Aparat — همه تنها با چند کلیک به آیلایو متصل می‌شوند. این یکپارچگی، فرآیند استریم را ساده، سریع و بدون نیاز به تنظیمات پیچیده می‌کند."
          button={{ text: "ساخت اکانت رایگان" }}
          media={{
            type: "image",
            src: "/assets/images/frame8.png",
            alt: "Animated demonstration of iLive platform features and integrations",
            position: "right",
          }}
        />
      </section>
      {/* Products Section */}
      <section
        className="app-grid py-10 desktop:py-20"
        aria-labelledby="products-title"
      >
        <header className="col-span-6 desktop:col-span-12 py-10 gap-3 flex flex-col text-center">
          <p className="type-body-1 text-white-2">
            محصولات مخصوص فعالان صنعت بازی و سرگرمی
          </p>
        </header>
        <ServiceCard
          cards={productsData}
          className="col-span-6 desktop:col-span-12 grid grid-cols-1 desktop:grid-cols-3 gap-4 desktop:gap-10"
        />
        <ServiceCard
          cards={secondaryProductsData}
          className="col-span-6 desktop:col-span-12 grid grid-cols-1 desktop:grid-cols-2 gap-4 desktop:gap-10 desktop:px-[calc(100%/6)]"
        />
      </section>

      {/* Platform Integration Section */}
      <section aria-labelledby="integration-title">
        <h2 id="integration-title" className="sr-only">
          Platform Integration
        </h2>
        <Integration
          subtitle="یکپارچگی با پلتفرم‌های محبوب"
          titleLine1={{
            before: "با ",
            highlight: "ابزارهای مورد علاقه",
            after: " شما",
          }}
          titleLine2={{ before: "", highlight: "یکپارچه", after: " می‌شود" }}
          linkText="مشاهده همه پلتفرم‌ها"
          platforms={[
            { icon: "/assets/platform/1369264.svg", alt: "YouTube" },
            { icon: "/assets/platform/Aparat_Icon 1.svg", alt: "Aparat" },
            { icon: "/assets/platform/Instagram_icon.svg", alt: "Instagram" },
            { icon: "/assets/platform/kick-app-icon-hd.svg", alt: "Kick" },
            { icon: "/assets/platform/OBS_Studio_logo.svg", alt: "OBS" },
            { icon: "/assets/platform/streamlabs.svg", alt: "Streamlabs" },
            {
              icon: "/assets/platform/Telegram_logo.svg.svg",
              alt: "Telegram",
            },
            {
              icon: "/assets/platform/YouTube_full-color_icon_(2017).svg 1.svg",
              alt: "YouTube",
            },
          ]}
        />
      </section>
      {/* Customer Testimonials Section */}
      <section
        aria-labelledby="testimonials-title"
        className="container mx-auto mt-20"
      >
        <h2 id="testimonials-title" className="sr-only">
          Customer Testimonials
        </h2>
        <Testimonials
          title="آنچه کاربران از تجربه خود گفتند"
          subtitle="خدمات ما به روایت کاربران"
          number={5}
          reviews={[
            {
              id: 1,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
            {
              id: 2,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
            {
              id: 3,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
            {
              id: 4,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
            {
              id: 5,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
            {
              id: 6,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
            {
              id: 7,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
            {
              id: 8,
              name: "علیرضا کوشکی",
              role: "مدیر عامل نوین‌هاب",
              avatarSrc: "/assets/images/profile.png",
              comment:
                "به نظر من شرکت آیلایو تونسته که کار بزرگی رو در صنعت استریم ایران به انجام بده و همینطور تمامی ابزار‌های مورد نیاز مارو در اختیارمون قرار بده که به راحتی میتونیم به مشتریان زیادی در سرتاسر ایران دسترسی داشته باشیم.",
            },
          ]}
        />
      </section>

      {/* FAQ Section */}
      <section aria-labelledby="faq-title" className="container mx-auto">
        <h2 id="faq-title" className="sr-only">
          Frequently Asked Questions
        </h2>
        <FAQ
          subtitle="سوالات متداول"
          title="پاسخ به سوالات شما"
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
      </section>
      <aside className="container mx-auto pb-20" aria-label="Support Banner">
        <SupportBanner />
      </aside>
    </>
  );
}
