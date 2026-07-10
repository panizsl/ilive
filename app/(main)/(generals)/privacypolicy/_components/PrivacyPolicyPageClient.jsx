"use client";

import React, { useState, useEffect, useRef } from "react";
import TabNavigation from "@/shared/components/ui/TabNavigation";
import useStickyHeader from "@/shared/hooks/useStickyHeader";
import { useWindowScroll, useDocumentTitle } from "@mantine/hooks";

export default function PrivacyPolicyPageClient({ sections }) {
  const contentBoundaryRef = useRef(null);

  const [, scrollTo] = useWindowScroll();

  // Integrated logic from usePrivacyPolicy
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const isClickedRef = useRef(false);

  const activeSectionData = sections.find((s) => s.id === activeSection);

  useDocumentTitle(
    activeSectionData
      ? `${activeSectionData.title} | قوانین`
      : "قوانین و مقررات",
  );

  // Handle tab clicks and smooth scrolling
  const handleScrollToSection = (id) => {
    isClickedRef.current = true;
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 250;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      scrollTo({ y: offsetPosition });

      setTimeout(() => {
        isClickedRef.current = false;
      }, 1000);
    }
  };

  // Intersection Observer
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
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // (Sticky Header)
  const { stickyRef, isSticky, width, height } = useStickyHeader({
    containerRef: contentBoundaryRef,
  });

  return (
    <div
      ref={contentBoundaryRef}
      className="flex w-full max-w-300 flex-col justify-center gap-20 px-6 lg:flex-row relative"
    >
      {/* --- SIDEBAR --- */}
      <aside className="hidden xl:block w-57.5 shrink-0 order-1">
        <div style={{ minHeight: isSticky ? `${height}px` : "auto" }}>
          <nav
            ref={stickyRef}
            aria-label="فهرست محتوای قوانین"
            style={{
              position: isSticky ? "fixed" : "relative",
              top: isSticky ? "100px" : "0px",
              width: width > 0 ? `${width}px` : "230px",
              zIndex: 10,
            }}
          >
            <TabNavigation
              variant="minimal"
              title=""
              items={sections}
              activeId={activeSection}
              onItemClick={handleScrollToSection}
              className="w-full"
            />
          </nav>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <article className="order-2 flex w-full max-w-187.5 shrink-0 flex-col gap-14.5 md:pt-19 pt-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="flex flex-col gap-4 scroll-mt-28"
            aria-labelledby={`label-${section.id}`}
          >
            <h2 id={`label-${section.id}`} className="type-h5 text-white-1">
              {section.title}
            </h2>
            <p className="text-body-2 text-justify text-white-2">
              {section.content}
            </p>
          </section>
        ))}
      </article>
    </div>
  );
}
