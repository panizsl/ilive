import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import Hero from "@/shared/components/sections/Hero";
import DevSidebar from "@/shared/components/ui/DevSidebar";

import { FlexBox } from "@/shared/components/ui/FlexBox";
import React from "react";

function DeveloperPage() {
  const sidebarData = [
    {
      groupTitle: "داکیومنت ها ",
      items: [{ title: "نگاه کلی" }],
      items: [{ title: "شروع به استفاده" }],
      items: [{ title: "قوانین و مقررات" }],
    },
    {
      groupTitle: "احراز هویت",
      items: [
        { title: "حریم خصوصی" },
        { title: "تبادل کد" },
        { title: "Refreshing tokens" },
        { title: "Revoking tokens" },
        { title: "حریم خصوصی" },
        { title: "حریم خصوصی" },
        { title: "تبادل کد" },
        { title: "Refreshing tokens" },
        { title: "Revoking tokens" },
        { title: "حریم خصوصی" },
      ],
    },
    {
      groupTitle: "API های خصوصی",
      items: [
        { title: "پروفایل و حساب", badgeType: "get", isActive: true },
        { title: "کانال‌ها", badgeType: "get" },
        { title: "آپدیت کانال‌ها", badgeType: "patch" },
        { title: "پروفایل و حساب", badgeType: "get" },
        { title: "کانال‌ها", badgeType: "get" },
        { title: "آپدیت کانال‌ها", badgeType: "patch" },
        { title: "آپدیت کانال‌ها", badgeType: "patch" },
      ],
    },
    {
      groupTitle: "URL CHAT",
      items: [],
    },
    {
      groupTitle: "API های عمومی",
      items: [{ title: "پلتفرم‌ها" }, { title: "سرورها" }],
    },
  ];

  const contentData = [
    {
      type: "main-title",
      title: "مستندات فنی ایلایو",
    },
    {
      type: "section",
      title: "اپدیت کانال ها",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع",
    },
    {
      type: "code",
      showIcons: true,
      code: "// OAuth `bearer` tokenconst accessToken = '[access token]';const url = `wss://streaming.api.restream.io/ws?accessToken=${accessToken}`;const connection = new WebSocket(url);  connection.onmessage = (message) => { // IUpdates interface is provided on the right const update: IUpdates = JSON.parse(message.data); console.log(update);};  connection.onerror = console.error;",
    },
    {
      type: "comparison-row",
      items: [
        {
          status: "success",
          title: "پیام موفق",
          code: `{
  "status": "delivered",
  "JobId": "bf737722-6320-4050-b8d5-3333333333",
  "expires": 1612000000, "requires_at": 1600,
  "refresh_token":
  "bce20e54-55e1-4c23-b459-b1ff4323e637",
  "scope": "profile.default.read channel.details.read
  chat.default.read stream.default.read", "token_type":
  "Bearer", "access_token":
  "bce20e54-55e1-4c23-b459-b1ff4323e637",
  "accessTokenExpiresAt": 1600, "accessTokenExpiresAt":
  "2018-03-05T10:01:07.251Z", "Client": 3
}`,
        },
        {
          status: "error",
          title: "خطا",
          code: `{
  "error": { "statusCode": 401, "status": 401, "code": 401,
  "message": "Invalid token: access token is invalid",
  "name": "Invalid_token" }
}`,
        },
      ],
    },
    {
      type: "section",
      title: "پروفایل و حساب کاربری",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای",
    },
    {
      type: "code",
      showIcons: false,
      code: `// OAuth 'bearer' token
const accessToken = '[access token]';
const url = 'wss://streaming.api.restream.io/ws?accessToken=${"accessToken"}';
const connection = new WebSocket(url);`,
    },
    {
      type: "text-only",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان",
    },
    {
      type: "comparison-row",
      items: [
        {
          status: "success",
          title: "پیام موفق",
          code: `{
  "status": "delivered",
  "JobId": "bf737722-6320-4050-b8d5-3333333333",
  "expires": 1612000000, "requires_at": 1600,
  "refresh_token":
  "bce20e54-55e1-4c23-b459-b1ff4323e637",
  "scope": "profile.default.read channel.details.read
  chat.default.read stream.default.read", "token_type":
  "Bearer", "access_token":
  "bce20e54-55e1-4c23-b459-b1ff4323e637",
}`,
        },
        {
          status: "error",
          title: "خطا",
          code: `{
  "error": { "statusCode": 401, "status": 401, "code": 401,
  "message": "Invalid token: access token is invalid",
  "name": "Invalid_token" }
}`,
        },
      ],
    },
    {
      type: "section",
      title: "لاگ داده",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان",
    },
    {
      type: "section",

      title: "کوکی‌های وبسایت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      type: "section",

      title: "امنیت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      type: "section",

      title: "لینک به نرم‌افزار‌های دیگر",
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
            { label: "مستندات فنی", active: true },
          ]}
          className="px-4 tablet:px-8 desktop:px-15"
        />
      </nav>
      <Hero className="block desktop:hidden" title="قوانین و مقررات استفاده" />
      {/* Main Layout Container */}
      <main className="container mx-auto flex justify-end gap-10 px-4 tablet:px-8 desktop:px-15 py-10 pb-15 desktop:pb-60">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <DevSidebar mainTitle="Dev Mode" sections={sidebarData} />
        </div>
        {/* Content Container - Width: 950px | Gap: 58px as requested */}
        <div className="w-full max-w-237.5 flex flex-col gap-14.5">
          {contentData.map((item, index) => (
            <div key={index} className="w-full">
              {/* Main Title */}
              {item.type === "main-title" && (
                <h1 className="text-white type-h3 text-right">{item.title}</h1>
              )}

              {/* Section: Title + Description */}
              {item.type === "section" && (
                <div className="space-y-4 text-right">
                  <h2 className="text-white-1 type-h6 ">{item.title}</h2>
                  <p className="text-white-2 type-body-2">{item.description}</p>
                </div>
              )}

              {/* Text Only Description */}
              {item.type === "text-only" && (
                <p className="text-white-2 type-body-2 text-right">
                  {item.description}
                </p>
              )}

              {item.type === "code" && (
                <FlexBox
                  showDesktopIcons={item.showIcons}
                  className=" text-left"
                >
                  {item.code}
                </FlexBox>
              )}

              {/* Comparison Row (Success / Error) */}
              {item.type === "comparison-row" && (
                <div className="flex flex-col md:flex-row gap-14.5 w-full">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex-1 flex flex-col gap-3">
                      {/* Status Title Box with Specific Borders */}
                      <div
                        className={`
                          w-full h-9 flex items-center justify-start 
                          px-6 gap-14.5
                          border-r-4 
                          ${
                            subItem.status === "success"
                              ? "border-primary-2 text-primary-2" // Green Border & Text color hint (or white)
                              : "border-[#C50F13] text-[#C50F13]" // Red Border & Text color hint
                          }
                        `}
                      >
                        <span className="text-white type-h6">
                          {subItem.title}
                        </span>
                      </div>

                      {/* Code Content */}
                      <FlexBox className="text-left">{subItem.code}</FlexBox>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default DeveloperPage;
