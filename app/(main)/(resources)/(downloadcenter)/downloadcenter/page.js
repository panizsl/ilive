import DownloadCard from "@/shared/components/cards/DownloadCard";
import InfoCard from "@/shared/components/cards/IntegrationCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import ContactCTA from "@/shared/components/sections/ContactCTA";
import Hero from "@/shared/components/sections/Hero";
import TabNavigation from "@/shared/components/ui/TabNavigation";
import { Search } from "lucide-react";
import React from "react";

function DownloadCenterPage() {
  const jobCategories = [
    { id: "all", name: " همه دانلود ها", isActive: true },
    { id: "software", name: "درایور ها", isActive: false },
    { id: "hardware", name: "نرم‌افزار‌های ‌کمکی", isActive: false },
    { id: "design", name: "پلاگین‌ها", isActive: false },
  ];
  return (
    <>
      {/* Navbar (breadcrumb) */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "منابع", href: "/", active: false },
            { label: "مرکز دانلود", active: false },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      <Hero
        className="container mx-auto type-h2 text-center text-white "
        title="مرکز دانلود"
      />

      {/* --- Main Navigation Bar (Tabs + Search + InfoCard) --- */}
      <section
        className="container mx-auto lg:w-265 px-4 lg:px-0 mb-8 max-w-7xl"
        aria-label="Secondary navigation"
      >
        <nav className="w-full h-auto lg:h-25 py-6 flex flex-col lg:flex-row items-center justify-between lg:gap-10 mx-auto">
          {/* Tab navigation */}

          <div className="flex w-full max-w-82 items-center justify-center lg:w-auto lg:max-w-none lg:flex-1 lg:justify-start">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-9 gap-5 lg:py-10 w-full justify-items-center">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="w-full flex justify-center gap-4">
              <DownloadCard
                title="دانلود نرم‌افزار OBS "
                format="pdf"
                size="۶.۱۲ مگابایت"
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
      {/* know more section */}
      <section
        className="container w-full mx-auto"
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
    </>
  );
}

export default DownloadCenterPage;
