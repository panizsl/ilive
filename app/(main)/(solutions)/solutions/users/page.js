import ServiceCard from "@/shared/components/cards/ServiceCard";
import TargetAudienceCard from "@/shared/components/cards/TargetAudienceCard";
import CallToAction from "@/shared/components/sections/CallToAction";
import FAQ from "@/shared/components/sections/FAQ";
import Hero from "@/shared/components/sections/Hero";
import dynamic from "next/dynamic";
import React from "react";

const Testimonials = dynamic(() =>
  import("@/shared/components/sections/Testimonials")
);
const ProjectsShowcase = dynamic(() =>
  import("@/shared/components/widgets/ProjectsShowcase")
);

export default (function UsersPage() {
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
      {/* Hero Section */}
      <section
        className="container mx-auto desktop:px-20 desktop:py-10"
        aria-label="Hero section"
      >
        <Hero
          tagline="کاربران آیلایو"
          title="هر کسی به آیلایو نیاز خواهد داشت"
          description="در پلتفرم آیلایو توانستیم با تکیه بر تخصص تیم خود نیاز تمامی افراد متفاوت را برطرف کنیم تا هر شخصی با توجه به نیاز خود توانایی استفاده از آن را داشته باشد."
          primaryButton={{ text: "ساختن اکانت رایگان" }}
          secondaryButton={{ text: "مشاهده پلان‌ها" }}
        />
      </section>

      <ul className="app-grid justify-items-center desktop:justify-items-stretch grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 desktop:gap-10 py-6 desktop:py-10 desktop:px-20">
        <li className="w-full flex justify-center desktop:block mx-auto">
          <TargetAudienceCard
            type="withIcon"
            showContent={true}
            imageSrc="/assets/images/frame1.png"
            title="گیمرها و فعالان سرگرمی"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
        </li>
        <li className="w-full flex justify-center desktop:block mx-auto">
          <TargetAudienceCard
            type="withIcon"
            showContent={true}
            imageSrc="/assets/images/frame2.png"
            title="پلاگین‌های حرفه‌ای دنیای گیم"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
        </li>
        <li className="w-full flex justify-center desktop:block mx-auto">
          <TargetAudienceCard
            type="withIcon"
            showContent={true}
            imageSrc="/assets/images/frame3.png"
            title="استریمرهای حرفه‌ای"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
        </li>
        <li className="w-full flex justify-center desktop:block mx-auto">
          <TargetAudienceCard
            type="withIcon"
            showContent={true}
            imageSrc="/assets/images/frame2.png"
            title="مدرسین و اساتید آنلاین"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
        </li>

        <li className="w-full flex justify-center desktop:block mx-auto">
          <TargetAudienceCard
            type="withIcon"
            showContent={true}
            imageSrc="/assets/images/frame3.png"
            title="مدرسین و اساتید آنلاین"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
        </li>
        <li className="w-full flex justify-center desktop:block mx-auto">
          <TargetAudienceCard
            type="withIcon"
            showContent={true}
            imageSrc="/assets/images/frame1.png"
            title="مدرسین و اساتید آنلاین"
            description="آیلایو طوری طراحی شده که به راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از vMix ،OBS و Zoom گرفته"
          />
        </li>
      </ul>

      <section aria-labelledby="projects-title" className="container mx-auto">
        <h2 id="projects-title" className="sr-only">
          Projects Showcase
        </h2>
        <ProjectsShowcase
          sectionTitle="پروژه‌های موفق"
          viewAllText="مشاهده همه"
          items={[
            {
              image: "/assets/gif/Twitch Pro Playlist_Final.gif",
              title: "استریم زنده مسابقات ورزشی",
              description:
                "پخش زنده مسابقات ورزشی با کیفیت بالا برای هزاران بیننده همزمان",
            },
            {
              image: "/assets/gif/Twitch Pro Playlist_Final.gif",
              title: "وبینار آموزشی دانشگاه",
              description:
                "برگزاری کلاس‌های آنلاین و وبینارهای آموزشی برای دانشجویان سراسر کشور",
            },
            {
              image: "/assets/gif/Twitch Pro Playlist_Final.gif",
              title: "کنسرت آنلاین موسیقی",
              description:
                "پخش زنده کنسرت‌های موسیقی با کیفیت صدا و تصویر حرفه‌ای",
            },
            {
              image: "/assets/gif/Twitch Pro Playlist_Final.gif",
              title: "رویداد گیمینگ",
              description:
                "استریم مسابقات بازی‌های ویدیویی با تعامل بالا و چت زنده",
            },
          ]}
        />
      </section>

      {/* Products Section */}
      <section
        className="w-full py-10 desktop:py-20 desktop:bg-teritary-2"
        aria-labelledby="products-title"
      >
        <div className="app-grid">
          <header className="col-span-6 desktop:col-span-12 py-10 gap-3 flex flex-col text-center">
            <p className="type-body-1 text-white-2">
              محصولاتی که به کاربران خود ارائه می‌دهیم
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
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section
        aria-labelledby="testimonials-title"
        className="container mx-auto"
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
      <aside
        className="desktop:hidden"
        aria-label="Call to action"
        role="complementary"
      >
        <CallToAction
          tagline="با آیلایو؛"
          title="پخش کنید و به گوش دنیا برسانید"
          buttonText="ساخت اکانت رایگان"
          backgroundImage="/assets/images/frame5.png"
        />
      </aside>
    </>
  );
});
