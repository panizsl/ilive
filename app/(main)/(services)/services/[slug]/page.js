import ProcessStepCard from "@/shared/components/cards/ProcessStepCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import Button from "@/shared/components/elements/Button";
import FAQ from "@/shared/components/sections/FAQ";
import RequestForm from "@/shared/components/sections/RequestForm";
import IntroBanner from "@/shared/components/ui/IntroBanner";
import SupportBanner from "@/shared/components/ui/SupportBanner";
import CarouselSectionWrapper from "@/shared/components/widgets/CarouselSectionWrapper";
import {
  Check,
  FileUser,
  LaptopMinimalCheckIcon,
  LucideBadgeCheck,
  MessagesSquare,
  PhoneCall,
  UserCheck2,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const TrustedBy = dynamic(
  () => import("@/shared/components/sections/TrustedBy"),
);
const StreamFeatures = dynamic(
  () => import("@/shared/components/sections/StreamFeatures"),
);
const StreamFeatureCard = dynamic(
  () => import("@/shared/components/cards/StreamFeatureCard"),
);
const ProjectsShowcase = dynamic(
  () => import("@/shared/components/widgets/ProjectsShowcase"),
);

function ChecklistItem({ text }) {
  return (
    <li className="flex gap-4 items-center justify-start">
      <Check className="size-6 desktop:size-7 text-primary-1 shrink-0" />
      <span className="type-subtitle-2 desktop:type-subtitle-1 text-white text-right">
        {text}
      </span>
    </li>
  );
}

function ServicesDetailPage() {
  const features = [
    {
      image: "/assets/images/event3.png",
      title: "اعزام کارشناس فنی",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود.",
    },
    {
      image: "/assets/images/article3.jpg",
      title: "مانیتورینگ حرفه‌ای",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود.",
    },
    {
      image: "/assets/images/event5.png",
      title: "تجهیزات پیشرفته پخش",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود.",
    },
    {
      image: "/assets/images/article3.jpg",
      title: "تولید محتوا زنده",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود.",
    },
  ];

  const checklistItems = [
    "کارگردان پخش",
    "مدیر پروژه (account manager)",
    "اپراتور صدا و تصویر",
    "نور پرداز",
    "ناظران فنی",
  ];

  return (
    <>
      <div aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "خدمات", href: "/", active: false },
            { label: "تیم اجرایی رویداد", active: false },
          ]}
          className="block px-4 tablet:px-8 desktop:px-15"
        />
      </div>

      <section className="container mx-auto w-full max-w-360 pt-33.5 pb-15 px-5 desktop:px-20">
        <IntroBanner
          variant="secondary"
          backgroundImage="/assets/images/banner.png"
        />
      </section>

      <section
        className="container mx-auto relative w-full bg-teritary-1 flex justify-center items-center py-10 px-4 desktop:px-20 min-h-152"
        aria-labelledby="executive-team-title"
      >
        <div className="max-w-359.75 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-15">
          {/* image */}
          <figure className="relative w-full max-w-138 aspect-[552/447] rounded-xl overflow-hidden border border-white-6/20 shadow-2xl shrink-0">
            <Image
              src="/assets/images/article1.jpg"
              alt="تیم اجرایی آیلایو"
              fill
              sizes="(max-width: 768px) 100vw, 552px"
              className="object-cover"
              priority
            />
          </figure>

          {/* Text content */}
          <article className="container mx-auto w-full lg:max-w-[639.5px] flex flex-col gap-8 lg:p-10">
            <div className="flex flex-col gap-6">
              <h3 id="executive-team-title" className="type-h3 text-white">
                چرا تیم اجرایی آیلايو؟
              </h3>
              <p className="type-body-2 text-white-1 text-justify">
                آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های
                مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش
                مانند YouTube، Twitch، LinkedIn و Aparat — همه تنها با چند کلیک
                به آیلایو متصل می‌شوند.
              </p>
            </div>

            <ul className="flex flex-col gap-3 desktop:gap-4 items-start">
              {checklistItems.map((item, index) => (
                <ChecklistItem key={index} text={item} />
              ))}
            </ul>
          </article>
        </div>
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
            titlePart1="آیلایو، "
            titlePart2="مورد اعتماد حرفه ای ها"
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

      {/* Carousel Section */}
      <section className="w-full" aria-labelledby="stream-features-title">
        <StreamFeatures
          title="آن‌چه آیلایو انجام خواهد داد..."
          features={features}
          className="py-20 max-w-none"
        />
      </section>

      {/* Platform Integration Section */}
      <section
        className="container mx-auto relative w-full bg-teritary-1 flex justify-center items-center py-10 px-4 desktop:px-20 min-h-152"
        aria-labelledby="platform-integration-title"
      >
        <div className="max-w-359.75 w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-15">
          <figure className="relative w-full max-w-138 aspect-[552/447] rounded-xl overflow-hidden border border-white-6/20 shrink-0">
            <Image
              src="/assets/images/article2.jpg"
              alt="یکپارچگی سرویس‌های آیلایو"
              fill
              sizes="(max-width: 768px) 100vw, 552px"
              className="object-cover"
            />
          </figure>

          <article className="w-full lg:max-w-[639.5px] flex flex-col gap-8 lg:p-10">
            <div className="flex flex-col gap-6 text-right">
              <h3
                id="platform-integration-title"
                className="type-h3 text-white"
              >
                هرگز نگران اجرای حرفه‌ای رویداد‌‌های خود نباشید
              </h3>
              <p className="type-body-2 desktop:type-body-1 text-white-1 text-justify">
                آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های
                مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش
                مانند YouTube، Twitch، LinkedIn و Aparat — همه تنها با چند کلیک
                به آیلایو متصل می‌شوند. این یکپارچگی، فرآیند استریم را ساده،
                سریع و بدون نیاز به تنظیمات پیچیده می‌کند.
              </p>
            </div>
            {/* button */}
            <div className="flex justify-start">
              <Button
                variant="outlined-filled"
                color="green"
                size="medium"
                className="w-full desktop:w-60 desktop:max-w-60 h-13 border-none type-subtitle-2"
              >
                درخواست این خدمت
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Recruitment Process */}
      <section
        className="container mx-auto max-w-360 w-full px-5 py-20 lg:px-20 lg:py-32"
        aria-labelledby="process-title"
      >
        <header className="text-center mb-10 lg:mb-16">
          <h4 id="process-title" className="type-h4 text-white mb-4">
            مراحل انجام پروژه شما
          </h4>
          <p className="type-body-1 text-white-1">
            مراحل پیش رو از لحظه درخواست تا برگزاری رویداد شما
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-13 md:gap-10 lg:gap-16 justify-items-center md:justify-items-start"
          role="list"
        >
          <ProcessStepCard
            stepNumber={1}
            title="دریافت و بررسی رزومه‌ها"
            description="در این مرحله رزومه‌ها به صورت کامل بررسی شده و از بین درخواست دهنده‌ها گزینش صورت میگیرد."
            icon={<FileUser size={60} />}
          />
          <ProcessStepCard
            stepNumber={2}
            title="مصاحبه تلفنی"
            description="پس‌ از تأیید اولیه و نتیجه‌گیری از طرف اینتلیو با شما برای فراخوان به جلسه مصاحبه تماس گرفته خواهد شد."
            icon={<PhoneCall size={60} />}
          />
          <ProcessStepCard
            stepNumber={3}
            title="مصاحبه فنی (عموماً انلاین)"
            description="یک مصاحبه به صورت حضوری در صورت وجود امکان و یا انلاین برای بررسی فنی کارجو انجام خواهد شده که مستقیما توسط مسئول فنی‌تیم برگزار میشود."
            icon={<MessagesSquare size={60} />}
          />
          <ProcessStepCard
            stepNumber={4}
            title=" تسک تستی / پروپوزال"
            description="پس از تایید مسئول فنی در صورت صلاحدید برای ارزیابی بیشتر کارجو، یک تسک تستی در نظر گرفته شده و ارسال خواهد شد."
            icon={<LaptopMinimalCheckIcon size={60} />}
          />
          <ProcessStepCard
            stepNumber={5}
            title="مصاحبه نهایی با مدیر تیم و منابع انسانی"
            description="پس از تحویل تسک توسط کارجو، در صورت تأیید صلاحیت فنی، جلسه بعدی با مدیر‌تیم و منابع انسانی برای بررسی تطبیق  کارجو با فرهنگ سازمانی و فرآیند‌های درون‌تیمی برگزار میشود."
            icon={<UserCheck2 size={60} />}
          />
          <ProcessStepCard
            stepNumber={6}
            title=" ارسال پیشنهاد همکاری نهایی "
            description="در صورت تایید مدیر تیم و منابع انسانی از طرف اینتلیو پیشنهاد همکاری و قرارداد برای شما ارسال خواهد شد."
            icon={<LucideBadgeCheck size={60} />}
          />
          <ProcessStepCard
            stepNumber={7}
            title=" شروع همکاری با ما"
            description="در نهایت پس‌از تایید بند‌های همکاری می‌تونیم بگیم که کار تمومه و فقط منتظر شما توی اینتلیو هستیم..."
            icon={<UserCheck2 size={60} />}
          />
        </div>
      </section>

      {/* Banner */}
      <aside className="container mx-auto pb-20" aria-label="Support Banner">
        <SupportBanner />
      </aside>

      {/* Projects Showcase Section */}
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

      {/* RequestForm Section */}
      <section
        className="w-full container mx-auto max-w-360 desktop:h-184 flex flex-col"
        aria-label="Contact Request Form"
      >
        <RequestForm />
      </section>

      {/* Other Services Carousel */}
      <section
        className="w-full container mx-auto"
        aria-labelledby="other-services-title"
      >
        <CarouselSectionWrapper
          variant="primary"
          title="دیگر خدمات آیلایو"
          className="py-20"
        >
          <StreamFeatureCard
            image="/assets/images/event3.png"
            title="اعزام کارشناس فنی"
            description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود."
            showViewLink={true}
            viewLinkText="مشاهده"
            href="/services/technical-expert"
          />

          <StreamFeatureCard
            image="/assets/images/article3.jpg"
            title="مانیتورینگ حرفه‌ای"
            description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود."
            showViewLink={true}
            viewLinkText="مشاهده"
            href="/services/monitoring"
          />

          <StreamFeatureCard
            image="/assets/images/event5.png"
            title="تجهیزات پیشرفته پخش"
            description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود."
            showViewLink={true}
            viewLinkText="مشاهده"
            href="/services/equipment"
          />

          <StreamFeatureCard
            image="/assets/images/article3.jpg"
            title="تولید محتوا زنده"
            description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود."
            showViewLink={true}
            viewLinkText="مشاهده"
            href="/services/content"
          />
        </CarouselSectionWrapper>
      </section>
    </>
  );
}

export default ServicesDetailPage;
