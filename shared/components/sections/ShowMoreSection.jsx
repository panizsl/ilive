"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { useMediaQuery } from "@mantine/hooks";
import { cn } from "@/shared/utils/cn";
import Button from "@/shared/components/elements/Button";

const sectionVariants = cva("", {
  variants: {
    layout: {
      grid: "app-grid",
      flex: "flex flex-wrap justify-center",
    },
    gap: {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    },
  },
  defaultVariants: {
    layout: "flex",
    gap: "md",
  },
});

const itemVariants = cva("", {
  variants: {
    cols: {
      2: "w-full desktop:w-[calc(50%-12px)]",
      3: "w-full desktop:w-[calc(33.333%-16px)]",
      4: "w-full desktop:w-[calc(25%-18px)]",
      6: "col-span-6 desktop:col-span-6",
    },
  },
  defaultVariants: {
    cols: 4,
  },
});

export default function ShowMoreSection({
  children,
  visibleCount = 6,
  buttonText = "نمایش بیشتر",
  buttonTextLess = "نمایش کمتر",
  className,
  itemClassName,
  listClassName,
  ariaLabel = "Items list",
  hideOnBreakpoint = "desktop",
  layout = "flex",
  gap = "md",
  cols = 4,
}) {
  const [showAll, setShowAll] = useState(false);

  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const shouldHideButton = hideOnBreakpoint === "tablet" ? isTablet : isDesktop;

  const items = Array.isArray(children) ? children : [children];
  const visibleItems = items.slice(0, visibleCount);
  const hiddenItems = items.slice(visibleCount);

  const hiddenClass =
    hideOnBreakpoint === "tablet"
      ? showAll
        ? "flex"
        : "hidden tablet:flex"
      : showAll
      ? "block"
      : "hidden desktop:block";

  return (
    <div className={className}>
      <ul
        className={cn(
          sectionVariants({ layout, gap }),
          "list-none p-0",
          listClassName
        )}
        role="list"
        aria-label={ariaLabel}
      >
        {visibleItems.map((child, index) => (
          <li
            key={`visible-${index}`}
            className={cn(itemVariants({ cols }), itemClassName)}
          >
            {child}
          </li>
        ))}
        {hiddenItems.map((child, index) => (
          <li
            key={`hidden-${index}`}
            className={cn(itemVariants({ cols }), itemClassName, hiddenClass)}
          >
            {child}
          </li>
        ))}
      </ul>

      {hiddenItems.length > 0 && !shouldHideButton && (
        <div className="flex items-center justify-center w-full gap-6 py-8 mt-17 mx-auto">
          <div className="w-[71.5px] h-0 border-t-2 border-white-6" />
          <Button
            variant="initial"
            color="white"
            size="medium"
            icon={showAll ? "minus" : "plus"}
            iconPosition="end"
            onClick={() => setShowAll(!showAll)}
          >
            <span className="type-subtitle-1">
              {showAll ? buttonTextLess : buttonText}
            </span>
          </Button>
          <div className="w-[71.5px] border-t-2 border-white-6" />
        </div>
      )}
    </div>
  );
}

ShowMoreSection.propTypes = {
  children: PropTypes.node.isRequired,
  visibleCount: PropTypes.number,
  buttonText: PropTypes.string,
  buttonTextLess: PropTypes.string,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  listClassName: PropTypes.string,
  ariaLabel: PropTypes.string,
  hideOnBreakpoint: PropTypes.oneOf(["tablet", "desktop"]),
  layout: PropTypes.oneOf(["grid", "flex"]),
  gap: PropTypes.oneOf(["sm", "md", "lg"]),
  cols: PropTypes.oneOf([2, 3, 4, 6]),
};
