import ArticleCard from "@/shared/components/cards/ArticleCard";
import PostCard from "@/shared/components/cards/PostCard";
import CallToAction from "@/shared/components/sections/CallToAction";
import Hero from "@/shared/components/sections/Hero";
import CarouselSectionWrapper from "@/shared/components/widgets/CarouselSectionWrapper";
import MobileSliderLogic from "@/shared/components/widgets/MobileSliderLogic";
import React from "react";
import BlogLandingPageClient from "../bloglanding/_components/BlogLandingPageClient";

function BlogLandingPage() {
  return (
    <>
      <header className="container mx-auto desktop:px-20 desktop:py-10">
        <Hero
          tagline="آیلایو بلاگ"
          title="از آخرین مطالب باخبر شوید"
          aria-label="Blog Landing introduction"
        />
      </header>

      {/* articles */}
      <main
        className="container mx-auto desktop:px-20 flex justify-center"
        aria-label="Latest blog posts"
      >
        <div className="w-full max-w-fit mx-auto">
          <MobileSliderLogic className="flex desktop:grid desktop:grid-cols-2 overflow-x-auto desktop:overflow-visible snap-x snap-mandatory no-scrollbar w-full">
            <PostCard
              variant="primary"
              imageSrc="/assets/images/article1.jpg"
              categories={["عنوان دسته‌بندی", "عنوان دسته‌بندی"]}
              title="آموزش اتصال نزم‌افزار‌ها Ilive stream به پلتفرم کیک (KICK) به صورت خودکار"
              description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند "
              publishDate="۱۴ اردیبهشت ۱۴۰۵"
              readTime="۵ دقیقه مطالعه"
              className="desktop:col-span-2 w-full shrink-0 snap-center"
              buttonText="مشاهده مطلب"
            />

            <PostCard
              variant="secondary"
              imageSrc="/assets/images/article1.jpg"
              categories={["عنوان دسته‌بندی", "عنوان دسته‌بندی"]}
              title="آخرین ترندهای برندهایی که از پلتفرم‌های استریم استفاده می‌کنند"
              description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از YouTube و Aparat با چند کلیک."
              publishDate="۱۴ اردیبهشت ۱۴۰۵"
              readTime="۵ دقیقه مطالعه"
              className="w-full shrink-0 snap-center desktop:mt-10 desktop:justify-self-start"
              buttonText="مشاهده مطلب"
            />

            <PostCard
              variant="secondary"
              imageSrc="/assets/images/article1.jpg"
              categories={["عنوان دسته‌بندی", "عنوان دسته‌بندی"]}
              title="آخرین ترندهای برندهایی که از پلتفرم‌های استریم استفاده می‌کنند"
              description="آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از YouTube و Aparat با چند کلیک."
              publishDate="۱۴ اردیبهشت ۱۴۰۵"
              readTime="۵ دقیقه مطالعه"
              className="w-full shrink-0 snap-center desktop:mt-10 desktop:justify-self-end"
              buttonText="مشاهده مطلب"
            />
          </MobileSliderLogic>
        </div>
      </main>

      {/* Most Visited Carousel Section */}
      <section
        aria-labelledby="carousel-title"
        className="w-full flex justify-center mb-20"
      >
        <div className="w-full max-w-360 mx-auto px-4 md:px-20">
          <CarouselSectionWrapper
            variant="primary"
            title="پر‌بازدید‌ترین مقالات"
          >
            {[1, 2, 3, 4].map((i) => (
              <ArticleCard
                key={i}
                imageSrc={`/assets/images/article${i > 3 ? 1 : i}.jpg`}
                title="آموزش اتصال نرم‌افزار‌ها Ilive stream به پلتفرم کیک (KICK)"
                tags={["دسته‌بندی", "تکنولوژی"]}
                date="۱۴ اردیبهشت ۱۴۰۵"
                readTime="۵ دقیقه مطالعه"
              />
            ))}
          </CarouselSectionWrapper>
        </div>
      </section>

      {/* Main Filterable Content (Client Component) */}
      <BlogLandingPageClient />

      {/* Call To Action */}
      <aside className="w-full" aria-label="Call to action">
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

export default BlogLandingPage;
