import FeatureCard from "@/shared/components/cards/FeatureCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import Video from "@/shared/components/ui/video";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const StoryTimeLine = dynamic(
  () => import("@/shared/components/ui/StoryTimeLine"),
);

function AboutusPage() {
  // --- Default Data for storytimeline components ---
  const timelineItems = [
    {
      id: 1,
      year: "۱۴۰۳",
      title: "ساخت اولین نسخه نرم‌افزار",
      description:
        "پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم، محتوای خود را به‌صورت هم‌زمان در چند ",
    },
    {
      id: 2,
      year: "۱۴۰۴",
      title: "ساخت اولین نسخه نرم‌افزار",
      description:
        "پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم، محتوای خود را به‌صورت هم‌زمان در چند شبکه‌ی",
    },
    {
      id: 3,
      year: "۱۴۰۵",
      title: "ساخت اولین نسخه نرم‌افزار",
      description:
        "پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم، محتوای خود را به‌صورت هم‌زمان در چند شبکه‌ی اجتماعی و بستر مختلف منتشر کنید.",
    },
    {
      id: 4,
      year: "۱۴۰۶",
      title: "ساخت اولین نسخه نرم‌افزار",
      description:
        "پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم، محتوای خود را به‌صورت هم‌زمان در چند شبکه‌ی اجتماعی و بستر مختلف منتشر کنید. این سرویس با زیرساخت ابری ",
    },
    {
      id: 5,
      year: "۱۴۰۶",
      title: "ساخت اولین نسخه نرم‌افزار",
      description:
        "پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم، محتوای خود را به‌صورت هم‌زمان در چند ",
    },
    {
      id: 6,
      year: "۱۴۰۶",
      title: "ساخت اولین نسخه نرم‌افزار",
      description:
        "پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم، محتوای خود را به‌صورت هم‌زمان در",
    },
  ];
  const mainText =
    "تکنولوژی در آیلایو، فراتر از تصور است ما در آیلایو باور داریم که ثانیه‌ها مهم‌اند. پس هرکدام را با کیفیت برای دنیا نشر میدهیم...";

  const parts = mainText.split(/(آیلایو|با کیفیت برای دنیا نشر میدهیم\.\.\.)/g);
  let ayLiveSeen = false;
  return (
    <>
      {/* Breadcrumb navigation (visible on mobile/tablet) to show page hierarchy */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "در کنار اینتلیو", href: "/", active: false },
            { label: "درباره ما", active: false },
          ]}
          className="desktop:hidden px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      {/* About iLive - Hero Header Section */}
      <header
        aria-labelledby="about-subtitle"
        className="w-full bot container max-w-360 h-auto md:h-141 md:pt-30 pt-20 px-5 md:px-20 md:pb-0 pb-20 flex flex-col items-center gap-6 mx-auto overflow-hidden"
      >
        {/* small text */}
        <h5
          id="about-subtitle"
          className="w-full type-h5-light text-white-1 text-center"
        >
          درباره آیلایو
        </h5>

        {/* main title */}
        <div className="w-full max-w-112.5 md:max-w-280.25 md:h-67.5 text-center">
          <h1 className="type-h1 text-white-4 leading-relaxed">
            {parts.map((part, i) => {
              if (part === "آیلایو") {
                if (!ayLiveSeen) {
                  ayLiveSeen = true;
                  return (
                    <span key={i} className="text-white">
                      {part}
                    </span>
                  );
                }
                return <span key={i}>{part}</span>;
              }

              if (part === "با کیفیت برای دنیا نشر میدهیم...") {
                return (
                  <span key={i} className="text-white">
                    {part}
                  </span>
                );
              }

              return <span key={i}>{part}</span>;
            })}
          </h1>
        </div>
      </header>

      {/* video */}
      <section
        id="video-showcase"
        aria-labelledby="video-title"
        className="w-full flex justify-center items-center container mx-auto pt-20 pb-20 gap-6"
      >
        <h2 id="video-title" className="sr-only">
          بخش پیش‌نمایش ویدیو
        </h2>

        <Video poster="/assets/images/videoposter.png" src="" />
      </section>

      {/* iLive Growth CTA Section — Company Vision & Value Proposition */}
      <section
        aria-labelledby="ilive-growth-title"
        className=" relative w-full container mx-auto max-w-359.75 px-4 py-20 desktop:px-47.5 desktop:py-35"
      >
        {/* Background Glow Effect */}
        <div
          aria-hidden="true"
          className="absolute rounded-full bg-primary-2 opacity-90 pointer-events-none w-22.25 h-22.25 left-1/2 -translate-x-1/2 top-22.5 blur-[60px] desktop:left-auto desktop:translate-x-0 desktop:w-32.25 desktop:h-32.25 desktop:right-65 desktop:top-1/2 desktop:-translate-y-1/2 desktop:blur-[95px]"
        />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full mx-auto text-right max-w-82 flex flex-col gap-6 desktop:max-w-264.75 desktop:flex desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-20">
          {/* Title */}
          <div className="w-full desktop:w-94.5">
            <h2 id="ilive-growth-title" className="text-white-1 type-h2">
              رشد و پیشرفت، مسیر اصلی ما در آیلایو بوده
            </h2>
          </div>

          <div className="w-full desktop:w-150.25">
            <p className="text-white-1 type-body-1 leading-[200%] tracking-[0%] text-right max-w-180 mx-auto desktop:mx-0 space-y-4">
              <span className="block">
                پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم،
                محتوای خود را به‌صورت هم‌زمان در چند شبکه‌ی اجتماعی و بستر مختلف
                منتشر کنید. این سرویس با زیرساخت ابری قدرتمند، کیفیت پایدار و
                تاخیر پایین، تجربه‌ای حرفه‌ای برای سازمان‌ها می‌آورد.
              </span>

              <span className="block">
                آیلایو به سادگی فرآیند استریم را هوشمند، منعطف و در دسترس کرده
                است تا تمرکز شما فقط روی محتوا باشد، نه روی تنظیمات فنی.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* iLive Strategic Values & Features Section */}
      <section
        aria-labelledby="heading-ilive-mission"
        className="w-full max-w-360 mx-auto flex flex-col items-center pt-10 desktop:pt-19.25 desktop:pb-25 gap-10 desktop:gap-18 px-4"
      >
        {/* title */}
        <p
          id="heading-ilive-mission"
          className="text-white-1 text-center type-h5-light pb-8"
        >
          در ایلایو تلاش ما بر این است...
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-6 w-full max-w-82 desktop:max-w-265 items-center">
          <FeatureCard
            isHoverable
            icon="Lightbulb"
            title="توجه به ایده‌های جدید"
            description="این مشخصه به این دلیل مهم است که باعث بازدهی بالاتر می‌شود."
            viewText="جزئیات بیشتر"
          />
          <FeatureCard
            isHoverable
            icon="Brain"
            title="هم‌فکری، مهم است"
            description="این مشخصه به این دلیل مهم است که باعث بازدهی بالاتر می‌شود."
            viewText="جزئیات بیشتر"
          />
          <FeatureCard
            isHoverable
            icon="Eye"
            title="بینش فرامرزی"
            description="این مشخصه به این دلیل مهم است که باعث بازدهی بالاتر می‌شود."
            viewText="جزئیات بیشتر"
          />
          <FeatureCard
            isHoverable
            icon="Puzzle"
            title="کامل‌کننده بودن"
            description="این مشخصه به این دلیل مهم است که باعث بازدهی بالاتر می‌شود."
            viewText="جزئیات بیشتر"
          />
          <FeatureCard
            isHoverable
            icon="Target"
            title="تمرکز روی اهداف"
            description="این مشخصه به این دلیل مهم است که باعث بازدهی بالاتر می‌شود."
            viewText="جزئیات بیشتر"
          />
          <FeatureCard
            isHoverable
            icon="WandSparkles"
            title="خروجی شگفت‌انگیز"
            description="این مشخصه به این دلیل مهم است که باعث بازدهی بالاتر می‌شود."
            viewText="جزئیات بیشتر"
          />
        </div>
      </section>
      <section
        id="innovative-story-section"
        aria-labelledby="innovative-story-heading"
        className="w-full flex flex-col items-center justify-center container mx-auto"
      >
        {/* Heading */}
        <span
          id="innovative-story-heading"
          className="text-white-4 desktop:font-black desktop:text-[120px] desktop:leading-[150%] desktop:tracking-normal desktop:text-center text-center type-h1 pt-10"
        >
          داستانی نوآورانه...
        </span>

        {/* Timeline */}
        <StoryTimeLine items={timelineItems} />
      </section>

      <section
        className="w-full mx-auto max-w-360 py-20 px-5 desktop:px-47.5 flex flex-col items-center gap-12 desktop:gap-18.5"
        aria-labelledby="ilive-platform-heading"
      >
        {/* LOGO + TEXT */}
        <div className="w-full desktop:w-194.25 flex flex-col items-center gap-10 text-center">
          {/* Logo */}
          <Image
            src="/assets/logo/logo.svg"
            alt="iLive Logo"
            width={251}
            height={82}
            className="object-contain w-38.5 h-12.5 desktop:w-62.75 desktop:h-20.5"
          />

          {/* Description */}
          <p
            id="ilive-platform-heading"
            className="w-full max-w-82 desktop:max-w-194.25 type-body-1 text-white-1"
          >
            پلتفرم آیلایو به شما این امکان را می‌دهد که تنها با یک استریم،
            محتوای خود را به‌صورت هم‌زمان در چند شبکه‌ی اجتماعی و بستر مختلف
            منتشر کنید. این سرویس با زیرساخت ابری قدرتمند، کیفیت پایدار و تاخیر
            پایین، تجربه‌ای حرفه‌ای برای سازمان‌ها می‌آورد.
          </p>
        </div>

        {/* IMAGES CONTAINER */}
        <div className="w-full desktop:w-264.75 flex flex-col desktop:flex-row gap-2 desktop:gap-6">
          <Image
            src="/assets/images/event1.png"
            alt="Streaming setup"
            width={337}
            height={488}
            className="w-full max-w-82 h-57.75 desktop:max-w-none desktop:w-84.25 desktop:h-122 rounded-lg desktop:rounded-xl object-cover mx-auto"
          />
          <div className="flex flex-row desktop:contents gap-2 justify-center">
            <Image
              src="/assets/images/event3.png"
              alt="Content creator"
              width={337}
              height={488}
              className="w-1/2 max-w-40 h-57.75 desktop:max-w-none desktop:w-84.25 desktop:h-122 rounded-lg desktop:rounded-xl object-cover"
            />
            <Image
              src="/assets/images/event2.png"
              alt="Live broadcast"
              width={337}
              height={488}
              className="w-1/2 max-w-40 h-57.75 desktop:max-w-none desktop:w-84.25 desktop:h-122 rounded-lg desktop:rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutusPage;
