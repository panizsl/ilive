import ContentCard from "@/shared/components/cards/ContentCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import SupportBanner from "@/shared/components/ui/SupportBanner";
import CarouselSectionWrapper from "@/shared/components/widgets/CarouselSectionWrapper";
import { BookOpen, Heart, Share2, Video } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const CallToAction = dynamic(
  () => import("@/shared/components/sections/CallToAction"),
);
function DefaultSinglePage() {
  const headerData = {
    title: "آموزش اتصال پلفترم ilive به سرویس توییچ به زبان ساده + تصویر",
    tags: ["عنوان دسته‌بندی", "عنوان زیردسته", "برچسب خاص"],
    readingTime: "زمان مطالعه: ۵ دقیقه",
    publishDate: "نگارش: ۱۳ اردیبهشت ۱۴۰۵",
    bannerSrc: "/assets/images/article3.jpg",
  };
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
  ];

  const loremText =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.";

  return (
    <>
      {/* Navbar (breadcrumb) */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "منابع", href: "/", active: false },
            { label: "نام زیردسته", active: false },
            { label: "عنوان", active: false },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>

      {/* --- Start: Main Page Header Section --- */}
      <header
        className="w-full container mx-auto flex flex-col items-center pt-8.75 pb-10 lg:px-75 gap-9.25"
        id="article-header"
      >
        {/* 1. Main Banner Image */}
        <figure className="relative w-full max-w-210 h-47 lg:h-[439.6px]">
          <Image
            src={headerData.bannerSrc}
            alt={headerData.title}
            fill
            priority
            className="lg:rounded-xl object-cover"
            id="main-banner"
          />
        </figure>

        {/* 2. Content Container (Tags + Title + Meta) */}
        <div
          className="w-82 lg:w-full lg:max-w-210 mx-auto flex flex-col gap-10 pt-6 pb-6 border-b border-[#1F4751]"
          id="content-container"
        >
          {/* Tags / Labels */}
          <nav
            className="flex gap-1.75 flex-wrap justify-start"
            aria-label="دسته بندی موضوعی"
          >
            {headerData.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center justify-center w-25 h-8.5 lg:w-37.5 lg:h-9.25 px-3 py-2 lg:px-5 bg-teritary-3 text-white-1 hover:text-primary-2 rounded-lg type-captions text-center cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </nav>

          {/* Main Title (H1 for SEO) */}
          <h1
            className="text-white text-right type-h3 w-full lg:max-w-210"
            id="article-main-title"
          >
            {headerData.title}
          </h1>

          {/* Bottom Meta Info (Text + Icons) */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-6 lg:gap-4">
            {/* Meta Data (Reading Time & Date) */}
            <div
              className="flex items-center gap-3 lg:gap-4 w-full lg:w-auto"
              style={{ maxWidth: "318px" }}
            >
              <div className="flex items-center gap-2">
                <time
                  className="text-white-1 type-subtitle-1 text-right whitespace-nowrap"
                  dateTime="2026-05-03"
                >
                  {headerData.readingTime}
                </time>
              </div>

              {/* Vertical Divider Line */}
              <div className="w-px h-5 bg-white-6" />

              <time className="text-white-1 type-subtitle-1 text-right whitespace-nowrap">
                {headerData.publishDate}
              </time>
            </div>

            {/* Interaction Icons */}
            <div className="flex items-center justify-start lg:justify-start gap-4 w-full lg:w-auto">
              <button
                aria-label="اشتراک گذاری"
                className="text-primary-1 hover:text-white transition-colors cursor-pointer"
              >
                <Heart size={32} />
              </button>
              <button
                aria-label="افزودن به علاقه‌مندی‌ها"
                className="text-primary-1 hover:text-white transition-colors cursor-pointer"
              >
                <Share2 size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* --- Main Blog Content Section --- */}

      <article className="container mx-auto w-full flex justify-center mt-10 px-5">
        <div className="w-full lg:w-210 flex flex-col gap-10 text-justify">
          {/* 1. Intro Paragraph */}
          <p className="type-body-3 text-white-1">{loremText}</p>

          {/* 2. First Section (Title + 2 Subtitles) */}
          <section>
            <h4 className="type-h4 text-white mb-6">سرتیتر</h4>

            <div className="mb-6">
              <h6 className="type-h6 text-white mb-3">تیتر اول</h6>
              <p className="type-body-3 text-white-1">
                {loremText} تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
                کرد.
              </p>
            </div>

            <div>
              <h6 className="type-h6 text-white mb-3">تیتر دوم</h6>
              <p className="type-body-3 text-white-1">
                {loremText} در این صورت می توان امید داشت که تمام و دشواری موجود
                در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.
              </p>
            </div>
          </section>

          {/* 3. Image 1 */}
          <figure className="w-full flex flex-col items-center justify-center">
            <Image
              src="/assets/images/article2.jpg"
              alt="توضیح عکس اول"
              width={840}
              height={440}
              className="rounded-xl object-cover"
            />
            <figcaption className="type-body-3 text-white-1 mt-10 w-full">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع
            </figcaption>
          </figure>

          {/* 4. Second Section (Title + 2 Subtitles) */}
          <section>
            <h4 className="type-h4 text-white mb-6">سرتیتر</h4>

            <div className="mb-6">
              <h6 className="type-h6 text-white mb-3">تیتر اول</h6>
              <p className="type-body-3 text-white-1">{loremText}</p>
            </div>

            <div>
              <h6 className="type-h6 text-white mb-3">تیتر دوم</h6>
              <p className="type-body-3 text-white-1">{loremText}</p>
            </div>
          </section>

          {/* Suport Banner */}
          <aside className="container mx-auto" aria-label="Support Banner">
            <SupportBanner layout="simpleWide" />
          </aside>

          {/* 6. Third Section (Title + Subtitle 1 + Image + Subtitle 2) */}
          <section>
            <h4 className="type-h4 text-white mb-6">سرتیتر</h4>

            {/* Subtitle 1 */}
            <div className="mb-8">
              <h6 className="type-h6 text-white mb-3">تیتر اول</h6>
              <p className="type-body-3 text-white-1">{loremText}</p>
            </div>

            {/* Image 2 */}
            <figure className="w-full mb-8 flex flex-col items-center justify-center">
              <Image
                src="/assets/images/article1.jpg"
                alt="توضیح عکس دوم"
                width={840}
                height={440}
                className="rounded-xl object-cover"
              />
            </figure>

            {/* Subtitle 2 (Below Image) */}
            <div>
              <h6 className="type-h6 text-white mb-3">تیتر دوم</h6>
              <p className="type-body-3 text-white-1">
                {loremText} تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
                کرد.
              </p>
            </div>
          </section>
        </div>
      </article>
      {/* 3. Author / Footer Section */}
      <div className="hidden w-full px-5 mt-10 lg:flex justify-center">
        <div
          className="
          w-210 mx-auto flex flex-col items-center justify-center
          border-t border-[#A7A9B7] lg:border-[#A7A9B7]
          pt-5 pb-5 gap-6
          lg:flex-row lg:justify-between lg:h-35 lg:pt-10 lg:pb-10 lg:gap-10
        "
        >
          {/* Left Side: Logo + Divider + Text */}
          <div
            className="
            flex flex-row items-center gap-5 w-full justify-center
            lg:justify-start lg:w-auto lg:gap-5
          "
          >
            {/* Intelio Logo */}
            <div className="relative w-26.25 h-8 lg:w-39.75 lg:h-12">
              <Image
                src="/assets/images/logo/iLiveLogo.svg"
                alt="Intelio Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Vertical Divider */}
            <div
              className="
              w-px h-8 bg-[#D8D8D8]
              lg:w-0.5 lg:h-15 lg:bg-[#D3D4DB]
            "
            />

            {/* Author Text */}
            <div className="flex flex-col justify-center text-right gap-2">
              <span className="text-white type-body-1">
                نگارش توسط تیم اینتلیو
              </span>
              <span className="text-[#7B7F93] type-body-2">
                ۱۲ اردیبهشت ۱۴۰۳
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col">
        {/* Target Audience Carousel Section */}
        <section
          aria-labelledby="carousel-title"
          className="order-2 md:order-1"
        >
          <h2 id="carousel-title" className="sr-only">
            فراتر از موضوع
          </h2>
          <CarouselSectionWrapper
            variant="primary"
            className="py-20"
            title="فراتر از موضوع"
          >
            {CARDS_DATA.map((card) => (
              <div key={card.id}>
                <ContentCard
                  variant="secondary"
                  imageSrc={card.imageSrc}
                  imageAlt={card.title}
                  tagText={card.tag}
                  description={card.title}
                  icon={card.icon}
                />
              </div>
            ))}
          </CarouselSectionWrapper>
        </section>

        {/* CallToAction */}
        <aside
          className="w-full pt-20 md:pt-0 order-1 md:order-2"
          aria-label="Registration Call to Action"
        >
          <CallToAction
            tagline="با آیلایو؛"
            title="پخش کنید و به گوش دنیا برسانید"
            buttonText="ساخت اکانت رایگان"
            backgroundImage="/assets/images/frame5.png"
          />
        </aside>
      </section>
    </>
  );
}

export default DefaultSinglePage;
