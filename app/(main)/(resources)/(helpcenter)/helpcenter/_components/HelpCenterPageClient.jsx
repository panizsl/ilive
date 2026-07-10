"use client";

import React, { useState, useEffect, useRef } from "react";
import TabNavigation from "@/shared/components/ui/TabNavigation";
import useStickyHeader from "@/shared/hooks/useStickyHeader";
import { useWindowScroll } from "@mantine/hooks";

export default function HelpCenterPageClient({ navItems, children }) {
  const contentBoundaryRef = useRef(null);
  const [, scrollTo] = useWindowScroll();

  const [activeSection, setActiveSection] = useState(navItems[0]?.id);
  const isClickedRef = useRef(false);

  const handleScrollToSection = (id) => {
    isClickedRef.current = true;
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      scrollTo({ y: offsetPosition });

      setTimeout(() => {
        isClickedRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickedRef.current) return;

      if (window.scrollY < 200) {
        setActiveSection(navItems[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // ۳. Intersection Observer
  useEffect(() => {
    const handleObserver = (entries) => {
      if (isClickedRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,

      rootMargin: "-150px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    navItems.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const { stickyRef, isSticky, width, height } = useStickyHeader({
    containerRef: contentBoundaryRef,
  });

  return (
    <div className="container mx-auto px-5 mb-15" ref={contentBoundaryRef}>
      <div className="flex flex-col desktop:flex-row items-start justify-center gap-4 desktop:gap-6 relative">
        <aside className="w-full desktop:mt-15 desktop:w-45.25 shrink-0 z-10">
          <div style={{ minHeight: isSticky ? `${height}px` : "auto" }}>
            <div
              ref={stickyRef}
              style={{
                position: isSticky ? "fixed" : "relative",
                top: isSticky ? "120px" : "0px",
                width: width > 0 ? `${width}px` : "auto",
                zIndex: 10,
              }}
            >
              <TabNavigation
                title="فیلتر سوالات بر اساس"
                items={navItems}
                activeId={activeSection}
                onItemClick={handleScrollToSection}
              />
            </div>
          </div>
        </aside>

        <main className="w-full desktop:w-287.5 flex flex-col gap-5">
          {children}
        </main>
      </div>
    </div>
  );
}
