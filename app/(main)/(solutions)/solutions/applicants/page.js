import EventCard from "@/shared/components/cards/EventCard";
import Hero from "@/shared/components/sections/Hero";

import dynamic from "next/dynamic";

const ShowMoreSection = dynamic(() =>
  import("@/shared/components/sections/ShowMoreSection")
);
const TrustedBy = dynamic(() =>
  import("@/shared/components/sections/TrustedBy")
);
const Testimonials = dynamic(() =>
  import("@/shared/components/sections/Testimonials")
);
const ProjectsShowcase = dynamic(() =>
  import("@/shared/components/widgets/ProjectsShowcase")
);
const Feature = dynamic(() => import("@/shared/components/sections/Feature"));
const FAQ = dynamic(() => import("@/shared/components/sections/FAQ"));

export default function ApplicantsPage() {
  const events = [
    {
      title: "برگزاری رویداد/کنفرانس",
      viewText: "مشاهده",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، ، LinkedIn ",
      imageSrc: "/assets/images/event2.png",
    },
    {
      title: "آموزش و یادگیری",
      viewText: "مشاهده",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، ، LinkedIn ",
      imageSrc: "/assets/images/event5.png",
    },
    {
      title: "رویداد‌های ورزشی",
      viewText: "مشاهده",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، ، LinkedIn ",
      imageSrc: "/assets/images/event1.png",
    },
    {
      title: "مراسم‌های مذهبی",
      viewText: "مشاهده",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، ، LinkedIn ",
      imageSrc: "/assets/images/event2.png",
    },
    {
      title: "رویداد‌های هنری",
      viewText: "مشاهده",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، ، LinkedIn ",
      imageSrc: "/assets/images/event3.png",
    },
    {
      title: "پخش‌زنده سازمانی",
      viewText: "مشاهده",
      description:
        "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، ، LinkedIn ",
      imageSrc: "/assets/images/event4.png",
    },
  ];
  return (
    <>
      <section
        className="container mx-auto desktop:px-20 desktop:py-10"
        aria-label="Hero section"
      >
        <Hero
          tagline="کاربرد‌های آیلایو"
          title="برای هر نیازی آیلایو راهکاری دارد "
          description="در پلتفرم آیلایو توانستیم با تکیه بر تخصص تیم خود نیاز تمامی افراد متفاوت را برطرف کنیم تا هر شخصی با توجه به نیاز خود توانایی استفاده از آن را داشته باشد."
          primaryButton={{ text: "ساختن اکانت رایگان" }}
          secondaryButton={{ text: "مشاهده پلان‌ها" }}
        />
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-360 p-4 desktop:p-20">
          <ShowMoreSection
            visibleCount={5}
            hideOnBreakpoint="tablet"
            ariaLabel="Events list"
            layout="grid"
            cols={6}
            itemClassName="flex justify-center desktop:justify-start"
          >
            {events.map((item, index) => (
              <EventCard key={`event-${index}`} {...item} />
            ))}
          </ShowMoreSection>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section
        aria-labelledby="trusted-title"
        className="border-y border-white-6 my-10 desktop:my-20"
        style={{ clipPath: "inset(-100% -100% 0 -100%)" }}
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
      {/* Product Features Section */}
      <section
        aria-labelledby="feature-title"
        className="container mx-auto px-4 py-20 flex flex-col gap-6 desktop:px-0 desktop:py-0 desktop:pb-32 desktop:gap-0"
      >
        <h2 id="feature-title" className="sr-only">
          Product Features
        </h2>
        <Feature
          tagline="آن‌چه آیلایو ارائه میدهد"
          title="یک پلتفرم با کلی از قابلیت‌های مورد نیاز شما"
          description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، ، LinkedIn و Aparat — همه تنها با چند کلیک به آیلایو متصل می‌شوند. این یکپارچگی، فرآیند استریم را ساده، سریع و بدون نیاز به تنظیمات پیچیده می‌کند."
          button={{ text: "ساخت اکانت رایگان" }}
          media={{
            type: "image",
            src: "/assets/images/frame5.png",
            alt: "Feature Image",
            position: "left",
          }}
        />
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
    </>
  );
}
