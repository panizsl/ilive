"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import Button from "@/shared/components/elements/Button";
import Image from "next/image";

const REPEAT_COUNT = 5;

// Variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20, height: 0 },
  visible: { opacity: 1, y: 0, height: "auto" },
};

const navButtonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.15 },
  tap: { scale: 0.9 },
};

function HeroSlider({ slides = [], autoPlayInterval = 7000, className = "" }) {
  const hasSlides = slides && slides.length > 0;
  const totalSlides = hasSlides ? slides.length * REPEAT_COUNT : 0;
  const extendedSlides = useMemo(
    () =>
      hasSlides
        ? Array.from({ length: REPEAT_COUNT }, () => slides).flat()
        : [],
    [slides, hasSlides]
  );

  const [currentIndex, setCurrentIndex] = useState(
    hasSlides ? Math.floor(totalSlides / 2) : 0
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for drag
  const dragX = useMotionValue(0);

  // Spring for smooth slider movement
  const slideX = useMotionValue(0);
  const smoothSlideX = useSpring(slideX, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const slideTransformX = useTransform(smoothSlideX, (v) => `${v}%`);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Handle drag end
  const handleDragEnd = useCallback(
    (_, info) => {
      const threshold = 50;
      if (info.offset.x > threshold) {
        handleNext();
      } else if (info.offset.x < -threshold) {
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  const activeSlideIndex = isMobile
    ? currentIndex
    : (currentIndex + 1) % totalSlides;

  const backgroundIndex =
    hoveredIndex !== null
      ? hoveredIndex % slides.length
      : activeSlideIndex % slides.length;

  useEffect(() => {
    if (autoPlayInterval <= 0) return;
    const interval = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, handleNext]);

  // Update slide position
  useEffect(() => {
    const slideWidthPercent = isMobile ? 75 : 25;
    slideX.set(currentIndex * slideWidthPercent);
  }, [currentIndex, isMobile, slideX]);

  // Early return after hooks if no slides
  if (!hasSlides) {
    return null;
  }

  return (
    <section
      className={cn(
        "w-full overflow-hidden cursor-pointer relative",
        className
      )}
      style={{ position: "relative" }}
      onMouseEnter={() => setIsSliderHovered(true)}
      onMouseLeave={() => setIsSliderHovered(false)}
      aria-roledescription="carousel"
      aria-label="Featured content slider"
    >
      <div className="group relative w-full h-160 desktop:h-200">
        {/* Background Image - Decorative */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={backgroundIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slides[backgroundIndex]?.image}
                alt=""
                fill
                loading="lazy"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 mx-auto w-full h-full">
          {/* Navigation Buttons - Desktop Only */}
          <motion.nav
            className="hidden desktop:flex absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 justify-between px-6 pointer-events-none"
            initial={false}
            animate={{ opacity: isSliderHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Slider navigation"
          >
            <motion.button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto"
              aria-label="Previous slide"
              variants={navButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <ArrowRight
                className="text-white cursor-pointer"
                size={40}
                aria-hidden="true"
              />
            </motion.button>
            <motion.button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto"
              aria-label="Next slide"
              variants={navButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <ArrowLeft
                className="text-white cursor-pointer"
                size={40}
                aria-hidden="true"
              />
            </motion.button>
          </motion.nav>

          {/* Slider Container */}
          <motion.div
            className="w-full h-full overflow-hidden touch-pan-y"
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ x: dragX }}
            role="group"
            aria-label="Slides"
          >
            <motion.ul
              className="flex h-full w-full list-none m-0 p-0"
              style={{ x: slideTransformX }}
              role="list"
            >
              {extendedSlides.map((slide, index) => (
                <SlideItem
                  key={`${slide.id}-${index}`}
                  slide={slide}
                  index={index}
                  currentIndex={currentIndex}
                  isMobile={isMobile}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  totalSlides={totalSlides}
                />
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {(currentIndex % slides.length) + 1} of {slides.length}:{" "}
        {slides[currentIndex % slides.length]?.title}
      </div>
    </section>
  );
}

// Memoized SlideItem
const SlideItem = React.memo(function SlideItem({
  slide,
  index,
  currentIndex,
  isMobile,
  hoveredIndex,
  setHoveredIndex,
  totalSlides,
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const isActive = isMobile
    ? index === currentIndex
    : index === currentIndex + 1;
  const isHovered = hoveredIndex === index;
  const showContent = isHovered || (hoveredIndex === null && isActive);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) setHoveredIndex(index);
  }, [isMobile, index, setHoveredIndex]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setHoveredIndex(null);
  }, [isMobile, setHoveredIndex]);

  return (
    <motion.li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative h-full shrink-0",
        "w-[75vw] desktop:w-1/4",
        index !== 0 && "border-r border-white-6"
      )}
      style={{ position: "relative" }}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${totalSlides}: ${slide.title}`}
      aria-current={isActive ? "true" : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute inset-0 bg-teritary-1/90"
        aria-hidden="true"
      />

      <article className="absolute bottom-20 right-0 p-6 desktop:p-10 z-10 text-right w-full">
        <header>
          <motion.h3
            className="text-white mb-4 type-h4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {slide.title}
          </motion.h3>
        </header>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.5,
          }}
        >
          <p className="text-white-1 mb-8 type-body-2">{slide.description}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              color="green"
              className="rounded-xl! w-10! h-10! flex items-center justify-center"
              aria-label={`Learn more about ${slide.title}`}
            >
              <ChevronLeft aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>
      </article>
    </motion.li>
  );
});

SlideItem.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  hoveredIndex: PropTypes.number,
  setHoveredIndex: PropTypes.func.isRequired,
  totalSlides: PropTypes.number.isRequired,
};

HeroSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  autoPlayInterval: PropTypes.number,
  className: PropTypes.string,
};

export default HeroSlider;
