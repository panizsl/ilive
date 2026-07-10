import BenefitCard from "@/shared/components/cards/BenefitCard";
import JobCard from "@/shared/components/cards/JobCard";
import ProcessStepCard from "@/shared/components/cards/ProcessStepCard";
import Button from "@/shared/components/elements/Button";
import EmptyJobsState from "@/shared/components/ui/EmptyJobsState";
import TabNavigation from "@/shared/components/ui/TabNavigation";

import {
  ArrowRightLeft,
  BookmarkCheck,
  CalendarCheck2,
  FileUser,
  LaptopMinimalCheckIcon,
  LucideBadgeCheck,
  MessagesSquare,
  PhoneCall,
  UserCheck2,
} from "lucide-react";
import dynamic from "next/dynamic";

const ProjectsShowcase = dynamic(
  () => import("@/shared/components/widgets/ProjectsShowcase"),
);
import Image from "next/image";
function JobapportunitiesPage() {
  const jobs = [
    {
      id: 1,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
    {
      id: 2,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
    {
      id: 3,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
    {
      id: 4,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
    {
      id: 5,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
    {
      id: 6,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
    {
      id: 7,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
    {
      id: 8,
      title: "برنامه‌نویس فرانت‌اند - Junior",
      department: "تیم نرم‌افزار",
      location: "کرج",
      jobType: "تمام وقت",
    },
  ];
  const missionTitleText =
    "در آیلایو، ما به سمت پیشرفت حرکت می‌کنیم، و روز به روز به کمک همدیگر چالش‌ها و مسائل روز را کنار می‌زنیم.";
  const jobCategories = [
    { id: "all", name: "همه موقعیت‌ها", isActive: true },
    { id: "software", name: "تیم نرم‌افزار", isActive: false },
    { id: "hardware", name: "تیم سخت‌افزار", isActive: false },
    { id: "design", name: "تیم طراحی", isActive: false },
    { id: "marketing", name: "تیم مارکتینگ", isActive: false },
  ];
  return (
    <>
      {/* Mission Section*/}
      <section
        className="container mx-auto w-full min-[1301px]:py-24"
        aria-labelledby="mission-title"
      >
        <div className="container mx-auto px-5 min-[1301px]:px-20">
          <div className="flex flex-col min-[1301px]:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24">
            {/* text and button*/}

            <div className="flex flex-col items-center md:items-start text-center pt-10 md:text-right max-w-82 md:max-w-150 order-1">
              <header className="text-white-1 type-h5-light min-[1301px]:text-right min-[1301px]:gap-2 p-4">
                فرصت های شغلی
              </header>
              {/* Title */}

              <h3
                id="mission-title"
                className="md:w-full type-h3 text-white-4 mb-20 h-42 w-82"
              >
                {missionTitleText
                  .split(
                    /(آیلایو|کمک همدیگر چالش‌ها و مسائل روز را کنار می‌زنیم\.)/g,
                  )
                  .map((segment, index) => {
                    if (
                      segment === "آیلایو" ||
                      segment ===
                        "کمک همدیگر چالش‌ها و مسائل روز را کنار می‌زنیم."
                    ) {
                      return (
                        <span key={index} className="text-white inline-block">
                          {segment}
                        </span>
                      );
                    }
                    return segment;
                  })}
              </h3>
              {/* Button */}

              <div className="w-full lg:w-auto lg:pt-10 flex justify-center lg:justify-start">
                <Button variant="outlined-filled" color="green" size="large">
                  مشاهده فرصت‌ها
                </Button>
              </div>
            </div>
            {/* image*/}
            <figure className="relative shrink-0 overflow-hidden rounded-xl w-82 h-82 lg:w-127.5 lg:h-127.5 order-1 lg:order-2">
              <Image
                alt="تیم اینتلیو در حال کار بر روی سیستم‌های کنترل صنعتی"
                className="object-cover"
                src="/assets/images/event5.png"
                fill
                sizes="(max-width: 768px) 328px, 510px"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section
        aria-labelledby="projects-title"
        className="container mx-auto hidden desktop:block"
      >
        <h2 id="projects-title" className="sr-only">
          Projects Showcase
        </h2>
        <div className="flex flex-col text-center pb-10 pt-10 gap-4">
          <span className="type-body-1 text-secondary-2 ">
            بیشتر از تیم آیلایو
          </span>
          <h4 className="type-h4 text-white">متخصص‌تر و هدف‌مند تر از دیروز</h4>
        </div>
        <ProjectsShowcase
          sectionTitle={null}
          viewAllText={null}
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
      {/* Benefit cards  */}
      <div className="flex flex-col">
        <section
          aria-labelledby="team-values-title"
          className="container mx-auto w-full order-2 desktop:order-1 pt-5"
        >
          {/*title - just in mobile*/}
          <div className="md:w-full pb-5 pt-5 w-82 h-35 gap-3 mx-auto">
            <h4
              id="team-values-title"
              className="type-h4 text-white mb-5 text-center"
            >
              ارزش‌های همکاران در اینتلیو
            </h4>
            {/* Description - just in mobile*/}
            <p className="type-body-1 text-white-1 mb-2 block desktop:hidden text-center">
              داستان شما در آیلایو در هفت مرحله شروع خواهد شد.
            </p>
          </div>
          <div className="flex flex-col gap-10 desktop:flex-row desktop:justify-center justify-center items-center pb-20">
            {/* First card - image only */}
            <BenefitCard type="image">
              <Image
                src="/assets/images/event5.png"
                alt="card visual"
                className="w-full h-full object-cover"
                width={298}
                height={372}
              />
            </BenefitCard>

            <BenefitCard
              color="default"
              logo={<ArrowRightLeft color="#2ed1ff" size={"80px"} />}
              title="مسیر ما از اعتماد‌سازی مشتریانمان آغاز می‌شود..."
              description="ما باور داریم که با این کار می‌توانیم بهترین خدمات را به مردم ارائه داده و مسیر را برای پیشرفت خدمات خود و هم‌تیمی‌های خود بیشتر فراهم کنیم."
            />

            <BenefitCard
              color="lightblue"
              logo={<CalendarCheck2 color="#2ed1ff" size={"80px"} />}
              title="مسیر ما از اعتماد‌سازی مشتریانمان آغاز می‌شود..."
              description="ما باور داریم که با این کار می‌توانیم بهترین خدمات را به مردم ارائه داده و مسیر را برای پیشرفت خدمات خود و هم‌تیمی‌های خود بیشتر فراهم کنیم."
            />

            <BenefitCard
              color="blue"
              logo={<BookmarkCheck color="#2ed1ff" size={"80px"} />}
              title="مسیر ما از اعتماد‌سازی مشتریانمان آغاز می‌شود..."
              description="ما باور داریم که با این کار می‌توانیم بهترین خدمات را به مردم ارائه داده و مسیر را برای پیشرفت خدمات خود و هم‌تیمی‌های خود بیشتر فراهم کنیم."
            />
          </div>
        </section>
        {/* Job Listings */}
        <section className="container mx-auto order-1 desktop:order-2 md:pt-5">
          <main
            id="jobs-section"
            className="w-full max-w-265 min-h-150 mx-auto py-20 lg:py-20"
          >
            {/* HEADER */}
            <header className="md:w-full mx-auto text-center mb-10 lg:mb-16 gap-3 pt-5 pb-5 h-35 w-82">
              <h4 className="type-h4 text-white mb-4">فرصت‌های شغلی موجود</h4>
              <p className="type-body-1 text-white-1">
                در صورتی که استعداد شما در بین موقعیت‌های زیر نیست{" "}
                <a
                  href="#contact"
                  className="text-primary-2 underline decoration-primary-2 hover:opacity-80 transition-opacity"
                >
                  از این قسمت
                </a>{" "}
                اقدام کنید
              </p>
            </header>
            {/* Tab Navigation*/}
            <div className="mb-8">
              <TabNavigation
                items={jobCategories}
                title="دسته‌بندی مشاغل"
                variant="mobile-style"
              />
            </div>
            {/* GRID */}
            {jobs.length === 0 ? (
              /* ---------- EMPTY STATE WRAPPER ---------- */
              <div className="w-full flex items-center justify-center py-20">
                <EmptyJobsState />
              </div>
            ) : (
              /* ---------- JOBS GRID ---------- */
              <div
                className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center"
                role="list"
              >
                {jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    department={job.department}
                    location={job.location}
                    jobType={job.jobType}
                    href={`/jobopportunities/${job.id}`}
                  />
                ))}
              </div>
            )}
          </main>
        </section>
      </div>
      {/* Recruitment Process */}
      <section className="w-full desktop:bg-teritary-2 ">
        <section
          className="container mx-auto max-full w-full px-5 py-20 lg:px-20 lg:py-32"
          aria-labelledby="recruitment-process-title"
        >
          <header className="text-center mb-10 lg:mb-16">
            <h4
              id="recruitment-process-title"
              className="type-h4 text-white mb-4"
            >
              فرآیند جذب در آیلایو
            </h4>
            <p className="type-body-1 text-white-1">
              داستان شما در آیلایو در هفت مرحله شروع خواهد شد
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
      </section>
    </>
  );
}

export default JobapportunitiesPage;
