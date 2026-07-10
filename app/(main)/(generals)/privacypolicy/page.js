import React from "react";
import CallToAction from "@/shared/components/sections/CallToAction";
import PrivacyPolicyPageClient from "./_components/PrivacyPolicyPageClient";
import Hero from "@/shared/components/sections/Hero";

const PRIVACY_DATA = {
  header: {
    title: "قوانین و مقررات استفاده",
  },
  sections: [
    {
      id: "privacy-protection",
      name: "حفظ حریم خصوصی",
      title: "حفظ حریم خصوصی",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.",
    },
    {
      id: "data-collection",
      name: "جمع‌آوری اطلاعات و داده‌ها",
      title: "جمع‌آوری اطلاعات و داده‌ها",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
    },
    {
      id: "data-log",
      name: "لاگ داده",
      title: "لاگ داده",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.",
    },
    {
      id: "cookies",
      name: "کوکی‌های وب‌سایت",
      title: "کوکی‌های وب‌سایت",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.",
    },
    {
      id: "security",
      name: "امنیت",
      title: "امنیت",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.",
    },
    {
      id: "external-links",
      name: "لینک به نرم‌افزارهای دیگر",
      title: "لینک به نرم‌افزارهای دیگر",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع.",
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* header */}
      <main className="container mx-auto flex w-full min-h-screen flex-col items-center pb-20 text-white">
        <header className="md:mt-25 mt-25 mb-16 flex h-18 w-full max-w-120 flex-col items-center justify-center gap-5">
          <Hero title={PRIVACY_DATA.header.title} />
        </header>

        <PrivacyPolicyPageClient
          sections={PRIVACY_DATA.sections}
          ariaLabelledBy="privacy-policy-title"
        />
      </main>

      {/* CallToAction */}
      <aside
        className="hidden lg:block w-full pt-35"
        aria-label="Registration Call to Action"
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
}
