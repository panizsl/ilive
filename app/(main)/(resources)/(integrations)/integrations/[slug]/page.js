import IntegrationCard from "@/shared/components/cards/IntegrationCard";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import Button from "@/shared/components/elements/Button";
import { FlexBox } from "@/shared/components/ui/FlexBox";
import CarouselSectionWrapper from "@/shared/components/widgets/CarouselSectionWrapper";
import Image from "next/image";
import React from "react";

function IntegrationSinglePage() {
  const contentData = [
    {
      type: "text",
      title: "درباره پلتفرم توییچ",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع",
    },
    {
      type: "text",
      title: "نحوه اتصال",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع",
    },
    {
      type: "code",
      code: "// OAuth `bearer` tokenconst accessToken = '[access token]';const url = `wss://streaming.api.restream.io/ws?accessToken=${accessToken}`;const connection = new WebSocket(url); ",
    },
    {
      type: "text",
      title: "سرتیتر شماره یک",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای ",
    },
    {
      type: "image",
      src: "/assets/images/article1.jpg",
    },
    {
      type: "text",
      title: "سرتیتر شماره دو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای ",
    },
    {
      type: "code",
      code: "// OAuth `bearer` tokenconst accessToken = '[access token]';const url = `wss://streaming.api.restream.io/ws?accessToken=${accessToken}`;const connection = new WebSocket(url);  connection.onmessage = (message) => { // IUpdates interface is provided on the right const update: IUpdates = JSON.parse(message.data); console.log(update);};  connection.onerror = console.error;",
    },
    {
      type: "image",
      src: "/assets/images/article2.jpg",
    },
    {
      type: "text",
      title: "سرتیتر شما سه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان",
    },
    {
      type: "text",
      title: "سرتیتر شما چهار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
  ];
  return (
    <div>
      {/* Navbar (breadcrumb) */}
      <nav aria-label="Breadcrumb navigation">
        <Breadcrumb
          items={[
            { label: "منابع", href: "/", active: false },
            { label: "نرم افزار های یکپارچه", active: false },
            { label: "پلتفرم توییچ (twitch)", active: false },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      {/* Main Layout Container */}
      <main className="container mx-auto flex flex-col md:flex-row justify-center items-start px-4 tablet:px-8 desktop:px-15 gap-6">
        {/* platform section */}
        <section className="flex flex-col items-center w-full md:w-100 pt-20 pb-6 gap-10 top-0">
          <div className="relative w-30 h-30 md:w-50 md:h-50 flex justify-center md:self-start items-center overflow-hidden">
            <Image
              src="/youtube.svg"
              alt="Twitch Platform"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col gap-3 w-full max-w-102">
            <h1 className="type-h3 text-white md:text-right text-center">
              پلتفرم توییچ (Twitch)
            </h1>
            <p className="type-subtitle-1 md:text-right text-center text-white-1">
              آموزش اتصال نرم‌افزار‌های Ilive stream به پلتفرم توییچ (Twitch) به
              صورت خودکار
            </p>
          </div>

          <Button
            variant="outlined-filled"
            color="green"
            className="type-subtitle-1 md:self-start self-center"
          >
            اتصال به توییچ
          </Button>
        </section>

        {/* contentData */}
        <div className="w-full md:w-200 flex flex-col gap-14.5 pt-22.5 pb-10">
          {contentData.map((item, index) => (
            <div key={index} className="w-full">
              {item.type === "text" && (
                <div className="space-y-4">
                  <h2 className="text-white-1 type-h5 md:text-right">
                    {item.title}
                  </h2>
                  <p className="text-white-2 type-body-2 md:text-right">
                    {item.description}
                  </p>
                </div>
              )}
              {item.type === "code" && (
                <FlexBox className="w-fit max-w-full text-left ">
                  {item.code}
                </FlexBox>
              )}
              {item.type === "image" && (
                <div className="relative mx-auto w-full overflow-hidden rounded-xl aspect-[328/171.65] md:aspect-[800/419] max-w-82 md:max-w-200">
                  <Image
                    src={item.src || "/placeholder.png"}
                    alt="platform"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      {/* Target Audience Carousel Section */}
      <section
        aria-labelledby="carousel-title"
        className="hidden md:block container mx-auto w-full py-16"
      >
        <h2 id="carousel-title" className="sr-only">
          دیگر نرم‌افزار‌های یکپارچه
        </h2>

        <CarouselSectionWrapper
          variant="primary"
          className="py-10"
          title="دیگر نرم‌افزار‌های یکپارچه"
        >
          {/* Horizontal Cards Container */}
          <div className="flex gap-10 overflow-x-auto scrollbar-hide px-4 lg:px-0">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="min-w-70 lg:min-w-[320px] shrink-0">
                <IntegrationCard
                  variant="secondary"
                  title="یوتوب (Youtube)"
                  description="معروف‌ترین و بزرگ‌ترین پلتفرم اشتراک ویدئو در اینترنت با بیش از دو میلیارد یوزر فعال"
                  icon="youtube.svg"
                />
              </div>
            ))}
          </div>
        </CarouselSectionWrapper>
      </section>
    </div>
  );
}

export default IntegrationSinglePage;
