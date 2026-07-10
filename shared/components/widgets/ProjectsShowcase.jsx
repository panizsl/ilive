"use client";

import { useState, useRef, useCallback, useId } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useInView,
} from "framer-motion";
import { useInterval } from "@mantine/hooks";
import { ChevronLeft, ArrowLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";

// Create motion component for Next.js Image
const MotionImage = motion.create(Image);

/**
 * ProgressIndicators Component
 */
function ProgressIndicators({ total, activeIndex, duration, progressKey }) {
  return (
    <nav
      className="absolute top-4 desktop:top-8 left-4 right-4 desktop:left-5 desktop:right-5 z-10"
      aria-label="Slide progress"
    >
      <ol
        className="flex flex-row-reverse gap-2 desktop:gap-5 items-center desktop:justify-center list-none p-0 m-0"
        role="list"
      >
        {Array.from({ length: total }).map((_, index) => (
          <li
            key={index}
            className="flex-1 h-1 rounded-full bg-white/40 overflow-hidden"
            aria-label={`Slide ${index + 1} of ${total}`}
            aria-current={index === activeIndex ? "step" : undefined}
          >
            {/* اسلایدهای قبلی - پر شده */}
            {index < activeIndex && (
              <div className="h-full w-full bg-white rounded-full" />
            )}
            {/* اسلاید فعلی - انیمیشن پر شدن */}
            {index === activeIndex && (
              <motion.div
                key={`progress-${progressKey}`}
                className="h-full bg-white rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            )}
            {/* اسلایدهای بعدی - خالی (فقط bg-white/40 از parent) */}
          </li>
        ))}
      </ol>
    </nav>
  );
}

ProgressIndicators.propTypes = {
  total: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  progressKey: PropTypes.number.isRequired,
};

/**
 * Custom Cursor Component with useSpring for smooth follow
 */
function CustomCursor({ cursorSide, mouseX, mouseY, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50 hidden desktop:flex items-center justify-center"
          style={{
            left: mouseX,
            top: mouseY,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          aria-hidden="true"
          role="presentation"
        >
          <motion.div
            animate={{ rotate: cursorSide === "left" ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
          >
            <ArrowLeft className="size-12 text-white drop-shadow-lg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

CustomCursor.propTypes = {
  cursorSide: PropTypes.oneOf(["left", "right"]),
  mouseX: PropTypes.object.isRequired,
  mouseY: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

CustomCursor.defaultProps = {
  cursorSide: "right",
};

export default function ProjectsShowcase({
  items,
  sectionTitle = "پروژه‌های موفق",
  viewAllText = "مشاهده همه",
  onViewAll,
  initialSlide = 0,
  autoPlayInterval = 5000,
}) {
  const titleId = useId();
  const sliderId = useId();
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [direction, setDirection] = useState(1);
  const [cursorSide, setCursorSide] = useState("right");
  const [isHovering, setIsHovering] = useState(false);

  const [progressKey, setProgressKey] = useState(0);

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % items.length);
    setProgressKey((prev) => prev + 1);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
    setProgressKey((prev) => prev + 1);
  }, [items.length]);

  const autoPlayTimer = useInterval(nextSlide, autoPlayInterval);

  const startTimer = useCallback(() => {
    if (autoPlayInterval > 0 && isInView) {
      autoPlayTimer.start();
    }
  }, [autoPlayInterval, isInView, autoPlayTimer]);

  const stopTimer = useCallback(() => {
    autoPlayTimer.stop();
  }, [autoPlayTimer]);

  const prevIsInView = useRef(isInView);
  if (prevIsInView.current !== isInView) {
    prevIsInView.current = isInView;
    if (isInView && autoPlayInterval > 0) {
      autoPlayTimer.start();
    } else {
      autoPlayTimer.stop();
    }
  }

  const goToNextSlide = useCallback(() => {
    stopTimer();
    nextSlide();
    startTimer();
  }, [stopTimer, nextSlide, startTimer]);

  const goToPrevSlide = useCallback(() => {
    stopTimer();
    prevSlide();
    startTimer();
  }, [stopTimer, prevSlide, startTimer]);

  // Handle mouse move
  const handleMouseMove = useCallback(
    (e) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const midPoint = rect.left + rect.width / 2;

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCursorSide(e.clientX < midPoint ? "left" : "right");
    },
    [mouseX, mouseY]
  );

  // Handle click
  const handleSliderClick = useCallback(
    (e) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const midPoint = rect.left + rect.width / 2;

      if (e.clientX < midPoint) {
        goToPrevSlide();
      } else {
        goToNextSlide();
      }
    },
    [goToPrevSlide, goToNextSlide]
  );

  // Slide variants with spring physics
  const slideVariants = {
    enter: (dir) => ({
      x: dir * 100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir * -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const slideTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };

  const currentItem = items[currentSlide];

  return (
    <section
      ref={sectionRef}
      aria-labelledby={titleId}
      className="bg-teritary-1 size-full"
    >
      {/* Custom Cursor - Decorative */}
      <CustomCursor
        cursorSide={cursorSide}
        mouseX={mouseX}
        mouseY={mouseY}
        isVisible={isHovering}
      />

      <div className="flex flex-col gap-10 p-4 desktop:p-20">
        {/* Section Header */}
        <header className="flex items-center justify-between w-full">
          <h2 id={titleId} className="type-h4 text-white text-nowrap">
            {sectionTitle}
          </h2>
          <button
            type="button"
            onClick={onViewAll}
            className="flex gap-1 items-center group cursor-pointer hover:gap-2 transition-all duration-200"
            aria-label={viewAllText}
          >
            <span className="type-h6 text-primary-2 text-nowrap transition-colors group-hover:text-primary-3">
              {viewAllText}
            </span>
            <ChevronLeft className="size-6 desktop:size-8 text-primary-2 transition-transform duration-200 group-hover:-translate-x-1" />
          </button>
        </header>

        {/* Desktop Slider */}
        <div
          className="hidden desktop:block w-full relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects carousel"
          id={sliderId}
        >
          <div
            ref={sliderRef}
            className={cn(
              "relative overflow-hidden rounded-3xl h-196.75",
              isHovering && "cursor-none"
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleSliderClick}
            role="button"
            tabIndex={0}
            aria-label="Click left or right to navigate slides"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") goToPrevSlide();
              if (e.key === "ArrowRight") goToNextSlide();
            }}
          >
            {/* Image Container */}
            <figure className="absolute inset-0 m-0">
              <AnimatePresence
                mode="popLayout"
                custom={direction}
                initial={false}
              >
                <MotionImage
                  key={`img-${currentSlide}`}
                  src={currentItem.image}
                  alt={currentItem.imageAlt || currentItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center rounded-3xl"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  draggable={false}
                  priority
                />
              </AnimatePresence>
            </figure>

            {/* Progress Indicators */}
            <ProgressIndicators
              total={items.length}
              activeIndex={currentSlide}
              duration={autoPlayInterval}
              progressKey={progressKey}
            />

            {/* Gradient Overlay - Decorative */}
            <div
              className="overlay-dark-fade"
              aria-hidden="true"
              role="presentation"
            />

            {/* Slide Content */}
            <article
              className="absolute bottom-20 left-20 right-20 text-white text-right overflow-hidden"
              aria-live="polite"
            >
              <AnimatePresence
                mode="popLayout"
                custom={direction}
                initial={false}
              >
                <motion.div
                  key={`text-${currentSlide}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                >
                  <motion.h3
                    className="type-h3"
                    animate={{
                      color: isHovering ? "var(--color-primary-2)" : "#ffffff",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentItem.title}
                  </motion.h3>
                  <p className="type-h5-light mt-2">
                    {currentItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </article>
          </div>
        </div>

        {/* Mobile Slider with Tap Navigation */}
        <article
          className="desktop:hidden w-full relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects carousel"
        >
          {/* Image Container */}
          <figure
            className="h-140 overflow-hidden relative rounded-lg w-full m-0 cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const midPoint = rect.left + rect.width / 2;
              if (e.clientX < midPoint) {
                goToPrevSlide();
              } else {
                goToNextSlide();
              }
            }}
          >
            <AnimatePresence
              mode="popLayout"
              custom={direction}
              initial={false}
            >
              <MotionImage
                key={`mobile-img-${currentSlide}`}
                src={currentItem.image}
                alt={currentItem.imageAlt || currentItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center pointer-events-none"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                draggable={false}
              />
            </AnimatePresence>

            {/* Progress Indicators */}
            <ProgressIndicators
              total={items.length}
              activeIndex={currentSlide}
              duration={autoPlayInterval}
              progressKey={progressKey}
            />
          </figure>

          {/* Slide Content */}
          <div
            className="flex flex-col text-white text-right mt-6 overflow-hidden"
            aria-live="polite"
          >
            <AnimatePresence
              mode="popLayout"
              custom={direction}
              initial={false}
            >
              <motion.div
                key={`mobile-text-${currentSlide}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              >
                <h3 className="type-h5">{currentItem.title}</h3>
                <p className="type-body-2 mt-1">{currentItem.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </article>
      </div>
    </section>
  );
}

ProjectsShowcase.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageAlt: PropTypes.string,
    })
  ).isRequired,
  sectionTitle: PropTypes.string,
  viewAllText: PropTypes.string,
  onViewAll: PropTypes.func,
  initialSlide: PropTypes.number,
  autoPlayInterval: PropTypes.number,
};

ProjectsShowcase.defaultProps = {
  sectionTitle: "پروژه‌های موفق",
  viewAllText: "مشاهده همه",
  onViewAll: () => {},
  initialSlide: 0,
  autoPlayInterval: 5000,
};
