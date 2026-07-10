"use client";
import RequestForm from "@/shared/components/sections/RequestForm";
import ServiceChecklist from "@/shared/components/sections/ServiceChecklist";
import TabNavigation from "@/shared/components/ui/TabNavigation";
import useStickyHeader from "@/shared/hooks/useStickyHeader";
import React, { useRef, useState } from "react";

function ServicesPage() {
  const [activeTab, setActiveTab] = useState("expert");

  const containerRef = useRef(null);

  const { stickyRef, isSticky, width } = useStickyHeader({
    containerRef: containerRef,
  });

  {
    /* tab navigation items */
  }
  const NAV_ITEMS = [
    { id: "team", name: "تیم اجرای رویداد" },
    { id: "expert", name: "اعزام کارشناسی فنی" },
    { id: "equipment", name: "تجهیزات سیار" },
    { id: "studio", name: "استدیو اختصاصی" },
  ];

  const handleItemClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <header className="flex justify-center items-center py-15 desktop:hidden">
        <h1 className="sr-only">خدمات پخش زنده و برگزاری رویداد آیلایو</h1>
        <h2 className="type-h2 text-white text-center">خدمات آیلایو</h2>
      </header>

      {/* Main Container */}
      <main
        ref={containerRef}
        className=" min-h-screen w-full flex justify-center"
      >
        <div className="w-full max-w-360 flex flex-col desktop:flex-row">
          {/* Right Side: TabNavigation Sidebar */}

          <aside className="hidden desktop:flex flex-col flex-1 border-l border-l-[#1F4751] desktop:shrink-0 sticky bg-teritary-2 top-0 min-h-full">
            <div
              ref={stickyRef}
              className="pr-20 pb-20"
              style={
                isSticky
                  ? {
                      position: "fixed",
                      top: "20px",
                      width: width,
                      zIndex: 10,
                    }
                  : { position: "relative" }
              }
            >
              <TabNavigation
                items={NAV_ITEMS}
                activeId={activeTab}
                onItemClick={handleItemClick}
              />
            </div>
          </aside>
          {/* Left Side: Cards Content */}

          <section
            className="flex w-full flex-col desktop:w-[1103px] desktop:shrink-0"
            aria-label="Service list"
          >
            <div id="team">
              <ServiceChecklist
                backgroundImage="/assets/images/event3.png"
                imageAlt="تیم اجرا"
              />
            </div>
            <div id="expert">
              <ServiceChecklist
                backgroundImage="/assets/images/event4.png"
                imageAlt="اعزام کارشناس"
              />
            </div>
            <div id="equipment">
              <ServiceChecklist
                backgroundImage="/assets/images/event4.png"
                imageAlt="تجهیزات"
              />
            </div>
            <div id="studio">
              <ServiceChecklist
                backgroundImage="/assets/images/event2.png"
                imageAlt="استدیو"
              />
            </div>
          </section>
        </div>
      </main>

      <section className="w-full flex justify-center mt-10 desktop:mt-0">
        <form
          className="w-full max-w-[1440px] desktop:h-[736px] flex flex-col"
          aria-label="Contact Request Form"
        >
          <RequestForm />
        </form>
      </section>
    </>
  );
}

export default ServicesPage;
