"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";
import { useScrollIntoView } from "@mantine/hooks";
import { cn } from "@/shared/utils/cn";

export function TabNavigation({
  title = "خدمات",
  items = [],
  activeId,
  onItemClick,
  className,
  variant = "default", // مقدار پیش‌فرض "default" است تا بقیه جاها خراب نشود
}) {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    axis: "x",
    duration: 300,
    offset: 16,
  });

  useEffect(() => {
    if (activeId && targetRef.current) {
      scrollIntoView({ alignment: "center" });
    }
  }, [activeId, scrollIntoView, targetRef]);

  const handleClick = (id) => {
    onItemClick?.(id);
  };

  // آیا باید در دسکتاپ هم ظاهر موبایل داشته باشیم؟
  const isMobileStyle = variant === "mobile-style";

  return (
    <nav className={cn("relative w-full", className)} aria-label={title}>
      {/* بخش موبایل: حالا اگر variant برابر mobile-style باشد، در دسکتاپ هم نمایش داده می‌شود */}
      <div className={cn("size-full", !isMobileStyle && "desktop:hidden")}>
        <div className="flex flex-col items-start px-4 py-6 relative size-full">
          <ul
            ref={scrollableRef}
            className="flex gap-2 items-start justify-start relative shrink-0 w-full overflow-x-auto scrollbar-hidden list-none m-0 p-0 touch-pan-x"
          >
            {items.map((item) => {
              const isActive = activeId ? item.id === activeId : item.isActive;
              return (
                <li key={item.id} ref={isActive ? targetRef : null}>
                  <button
                    onClick={() => handleClick(item.id)}
                    data-active={isActive}
                    className={cn(
                      "flex items-center justify-center px-3 py-2 relative rounded-lg shrink-0 transition-all duration-200 hover:opacity-80",
                      isActive ? "bg-teritary-3" : "bg-transparent",
                    )}
                  >
                    <span
                      className={cn(
                        "type-body-2 text-nowrap text-right",
                        isActive ? "text-white" : "text-white-1",
                      )}
                      dir="auto"
                    >
                      {item.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* بخش دسکتاپ قدیمی: فقط اگر variant پیش‌فرض باشد نمایش داده می‌شود */}
      {!isMobileStyle && (
        <div className="hidden desktop:block size-full">
          <div className="flex flex-col gap-5 items-start py-20 relative size-full">
            {title && (
              <header className="flex items-center justify-start relative shrink-0">
                <h2
                  className="type-captions text-white-4 text-nowrap text-right"
                  dir="auto"
                >
                  {title}
                </h2>
              </header>
            )}
            <ul className="flex flex-col gap-4 items-start relative shrink-0 list-none m-0 p-0">
              {items.map((item) => {
                const isActive = activeId
                  ? item.id === activeId
                  : item.isActive;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id)}
                      className="flex items-center justify-end relative shrink-0 w-full transition-all duration-200 hover:opacity-80"
                    >
                      <span
                        className={cn(
                          "type-subtitle-1 text-nowrap text-right",
                          isActive ? "text-primary-2" : "text-white-3",
                        )}
                        dir="auto"
                      >
                        {item.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
TabNavigation.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    }),
  ).isRequired,
  activeId: PropTypes.string,
  onItemClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "mobile-style"]),
};

export default TabNavigation;
