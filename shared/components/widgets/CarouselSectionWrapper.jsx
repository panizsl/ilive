"use client";

import PropTypes from "prop-types";
import React, {
  forwardRef,
  useRef,
  useState,
  useId,
  isValidElement,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const REPEAT_COUNT = 5;

/* CVA Variants */

// 1. Container Section Styles
const containerVariants = cva(
  "w-full max-w-360 mx-auto flex flex-col items-center py-15 transition-colors",
  {
    variants: {
      variant: {
        primary: "",
        testimonial: "",
      },
    },
    defaultVariants: {
      variant: "testimonial",
    },
  },
);

// 2. Header/Title Section Styles
const headerVariants = cva("w-full flex", {
  variants: {
    variant: {
      primary: "justify-between items-center mt-[20px] mb-[40px] px-6 md:px-0",
      testimonial: "flex-col items-center justify-center text-center mb-8",
    },
  },
  defaultVariants: {
    variant: "testimonial",
  },
});

// 3. Navigation Button Styles (Shared between both variants)
const navButtonVariants = cva(
  "p-2.5 cursor-pointer flex justify-center items-center transition-all duration-300 outline-none w-12 h-12 rounded-xl border-2 border-white-4 opacity-100 text-white-4 hover:text-white hover:border-white active:scale-95 focus:ring-white focus:border-white focus:ring-offset-2 focus:ring-offset-transparent",
  {
    variants: {
      variant: {
        primary: "",
        testimonial: "testimonial",
      },
    },
    defaultVariants: {
      variant: "testimonial",
    },
  },
);

/* Navigation Button Component - Defined outside render */
function NavButton({ onClick, label, icon: Icon, variant, carouselId }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-controls={carouselId}
      className={cn(navButtonVariants({ variant }))}
    >
      <Icon size={28} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  variant: PropTypes.oneOf(["primary", "testimonial"]),
  carouselId: PropTypes.string.isRequired,
};

/* Component */

const CarouselSectionWrapper = forwardRef(function CarouselSectionWrapper(
  { variant = "testimonial", title, description, children, className },
  ref,
) {
  const titleId = useId();
  const carouselId = useId();

  const scrollContainerRef = useRef(null);
  const scrollAmount = 400;

  const originalChildren = React.Children.toArray(children);
  const totalCards = originalChildren.length * REPEAT_COUNT;

  const safeVariant = variant === "primary" ? "primary" : "testimonial";

  // Calculate initial index without useEffect
  const initialIndex = useMemo(() => {
    return safeVariant !== "primary" ? Math.floor(totalCards / 2) : 0;
  }, [safeVariant, totalCards]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (safeVariant === "primary") {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
      return;
    }

    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    if (safeVariant === "primary") {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
      return;
    }

    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  /* --- Renders --- */

  const renderPrimaryContent = () => {
    const itemsToRender = React.Children.toArray(children);

    return (
      <div className="w-full h-full min-h-0 relative">
        <div
          id={carouselId}
          ref={scrollContainerRef}
          className="flex md:gap-10 gap-6 overflow-x-auto w-full h-full items-center no-scrollbar scroll-smooth snap-x snap-mandatory px-6 md:px-0 md:pl-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {itemsToRender.map((child, index) => {
            if (!isValidElement(child)) {
              return (
                <div key={`item-raw-${index}`} className="snap-center shrink-0">
                  {child}
                </div>
              );
            }
            const cloned =
              typeof child.type === "function"
                ? React.cloneElement(child, {
                    className: child.props.className || "",
                  })
                : child;

            return (
              <div key={child.key ?? index} className="snap-center shrink-0">
                {cloned}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCarouselContent = () => {
    if (!originalChildren.length) return null;

    const repeated = Array.from(
      { length: REPEAT_COUNT },
      () => originalChildren,
    ).flat();

    const prev3Index = (activeIndex - 3 + totalCards) % totalCards;
    const prev2Index = (activeIndex - 2 + totalCards) % totalCards;
    const prev1Index = (activeIndex - 1 + totalCards) % totalCards;
    const next1Index = (activeIndex + 1) % totalCards;
    const next2Index = (activeIndex + 2) % totalCards;
    const next3Index = (activeIndex + 3) % totalCards;

    const positions = [
      { index: prev3Index, position: -3 },
      { index: prev2Index, position: -2 },
      { index: prev1Index, position: -1 },
      { index: activeIndex, position: 0 },
      { index: next1Index, position: 1 },
      { index: next2Index, position: 2 },
      { index: next3Index, position: 3 },
    ];

    const cardGap = 390;

    const getXPos = (pos) => {
      const absPos = Math.abs(pos);
      if (absPos === 0) return 0;
      const modifiers = [0, 1, 0.9, 0.5];
      let totalX = 0;
      for (let i = 1; i <= absPos; i++) {
        const m = modifiers[i] !== undefined ? modifiers[i] : 0.7;
        totalX += cardGap * m;
      }
      return pos < 0 ? -totalX : totalX;
    };

    return (
      <div
        className="w-full overflow-hidden py-10"
        role="region"
        aria-roledescription="carousel"
        aria-label="Content carousel"
        id={carouselId}
      >
        <div
          className="relative flex items-center justify-center md:h-130 h-100"
          aria-live="polite"
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {positions.map(({ index, position }) => {
              const child = repeated[index];
              if (!isValidElement(child)) return null;

              const absPos = Math.abs(position);
              const isFeatured = position === 0;

              return (
                <motion.article
                  key={`card-${index}`}
                  initial={{
                    x: direction > 0 ? 1000 : -1000,
                    scale: 0.4,
                    opacity: 0,
                  }}
                  animate={{
                    x: getXPos(position),
                    scale: isFeatured
                      ? 1
                      : absPos === 1
                        ? 0.85
                        : absPos === 2
                          ? 0.75
                          : 0.65,
                    opacity: isFeatured
                      ? 1
                      : absPos === 1
                        ? 0.6
                        : absPos === 2
                          ? 0.3
                          : 0.1,
                    zIndex: 30 - absPos * 10,
                  }}
                  exit={{
                    x: direction > 0 ? -1000 : 1000,
                    scale: 0.4,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                  }}
                  style={{
                    filter: isFeatured
                      ? "blur(0px)"
                      : absPos === 1
                        ? "blur(1px)"
                        : absPos === 2
                          ? "blur(2px)"
                          : "blur(4px)",
                  }}
                  className={cn(
                    "absolute shrink-0 group transition-[filter] duration-300",
                    isFeatured ? "is-featured" : "",
                  )}
                  aria-hidden={!isFeatured}
                  role="group"
                  aria-roledescription="slide"
                >
                  {child}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      aria-labelledby={titleId}
      className={cn(containerVariants({ variant: safeVariant }), className)}
    >
      {/* LAYOUT 1: PRIMARY */}
      {safeVariant === "primary" && (
        <>
          <div className={cn(headerVariants({ variant: "primary" }))}>
            <div>
              <h4 className="type-h4 text-white mt-1">{title}</h4>
            </div>

            <div className="hidden md:flex gap-4">
              <NavButton
                onClick={handleNext}
                label="Next slide"
                icon={ChevronRight}
                variant={safeVariant}
                carouselId={carouselId}
              />
              <NavButton
                onClick={handlePrev}
                label="Previous slide"
                icon={ChevronLeft}
                variant={safeVariant}
                carouselId={carouselId}
              />
            </div>
          </div>

          {renderPrimaryContent()}
        </>
      )}

      {/* LAYOUT 2: TESTIMONIAL (Simple) */}
      {safeVariant !== "primary" && (
        <>
          <header className={cn(headerVariants({ variant: "testimonial" }))}>
            <span className="type-body-1 text-secondary-2 mb-2">{title}</span>
            {description && (
              <h4 className="type-h4 text-white w-72.5 md:w-175">
                {description}
              </h4>
            )}
          </header>

          {renderCarouselContent()}

          <nav
            className="flex items-center justify-center gap-4"
            aria-label="Carousel navigation"
          >
            <NavButton
              onClick={handlePrev}
              label="Previous slide"
              icon={ChevronRight}
              variant={safeVariant}
              carouselId={carouselId}
            />
            <NavButton
              onClick={handleNext}
              label="Next slide"
              icon={ChevronLeft}
              variant={safeVariant}
              carouselId={carouselId}
            />
          </nav>
        </>
      )}
    </section>
  );
});

CarouselSectionWrapper.propTypes = {
  variant: PropTypes.oneOf(["primary", "testimonial"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
CarouselSectionWrapper.defaultProps = {
  variant: "testimonial",
};

export default CarouselSectionWrapper;
