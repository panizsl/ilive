import JobDetailCard from "@/shared/components/cards/JobDetailCard";
import Button from "@/shared/components/elements/Button";
import JobDescription from "@/shared/components/sections/JobDescription";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function JobSinglePage() {
  return (
    <>
      <section
        className="
    container
    mx-auto
    w-full
    py-10
    desktop:px-47.5
    px-5
    bg-transparent
  "
        aria-labelledby="job-detail-heading"
      >
        <main className="max-w-360 mx-auto flex flex-col gap-10">
          {/* NAV + JOB DETAIL WRAPPER */}
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="w-full max-w-max flex flex-col items-start gap-4">
              {/* ===== BACK NAVIGATION ===== */}
              <nav aria-label="بازگشت به لیست فرصت‌های شغلی">
                <Link
                  href="/jobopportunities"
                  className="flex items-center gap-2 cursor-pointer text-primary-3 transition-colors"
                >
                  <ArrowUpRight size={20} />
                  <span className="text-[16px] text-primary-2">
                    بازگشت به لیست فرصت‌ها
                  </span>
                </Link>
              </nav>

              {/* ===== JOB DETAIL CONTENT ===== */}
              <article aria-labelledby="job-detail-heading">
                <h2 id="job-detail-heading" className="sr-only">
                  جزئیات فرصت شغلی
                </h2>

                <JobDetailCard
                  title="برنامه‌نویس فرانت‌اند (Mid-Level)"
                  department="تیم نرم‌افزار"
                  location="البرز، کرج"
                  jobType="تمام وقت"
                />

                <JobDescription
                  description={{
                    title: "شرح موقعیت",
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای ",
                  }}
                  responsibilities={{
                    title: "تجربیات مورد نیاز",
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان",
                    items: [
                      "۳+ سال تجربه در حوزه درخواستی",
                      "مسلط به HTML / CSS / JavaScript / TypeScript",
                      "ابزارهای Visual Studio Code، Figma و Postman",
                      "تجربه کار با متدهای Scrum و نرم‌افزار JIRA",
                      "قابلیت حل مسئله بالا و تعامل با استک‌های دیگر سازمان",
                    ],
                  }}
                  requirements={{
                    title: "داشتن چه توانایی‌هایی مزیت محسوب می‌شود؟",
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
                  }}
                  advantages={{
                    title: "مزایای کار در آیلایو",
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                    items: [
                      "بسته‌های سازمانی رویدادی و تقویمی",
                      "بیمه تأمین اجتماعی و بیمه تکمیلی",
                      "پاداش‌های سالیانه بر اساس عملکرد",
                      "مرخصی‌های استحقاقی",
                    ],
                  }}
                  additionalInfo={{
                    title: "دیگر توضیحات",
                    content:
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
                  }}
                />
              </article>

              {/* final section */}
              <div
                className="
    w-full 
    max-w-265
    mx-auto 
    flex 
    flex-col 
    md:flex-row 
    items-center 
    justify-between 
    gap-5
    md:gap-20
    py-10
    md:py-15
    border-t 
    border-[#1F4751]
    opacity-100
  "
              >
                {/* text content */}
                <div
                  aria-labelledby="cta-job-title"
                  className="
      w-82
      h-21
      md:w-3xl
      md:h-15
      flex 
      items-center 
      justify-center 
      md:justify-start 
      gap-5
    "
                >
                  <h3
                    id="cta-job-title"
                    className="text-white type-h3 text-center md:text-right"
                  >
                    این موقعیت ایده‌آل شماست؟
                  </h3>
                </div>

                {/* button */}
                <div className="w-full md:w-auto flex justify-center">
                  <Button
                    variant="outlined-filled"
                    color="blue"
                    size="medium"
                    icon="chevron-left"
                    iconPosition="end"
                  >
                    ارسال درخواست
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default JobSinglePage;
