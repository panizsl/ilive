"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

// --- Utility for Tailwind ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Types & Props Definition ---
const timelineItemPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

// --- Desktop Curve Component (RTL Version - Fixed Alignment) ---
const DesktopCurve = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Timer for animating the active circles along the line

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [items.length]);

  /* Circle coordinates & Positions
     ترتیب متن‌ها: 
     1. Top
     2. Bottom
     3. Bottom
     4. Top
     5. Bottom
     6. Top
  */
  const points = [
    { x: 34, y: 285, position: "top" },
    { x: 204, y: 205, position: "bottom" },
    { x: 377, y: 153, position: "bottom" },
    { x: 469, y: 85, position: "top" },
    { x: 627, y: 100, position: "bottom" },
    { x: 786, y: 97, position: "top" },
    { x: 950, y: 23, position: "top", isEnding: true },
  ];

  /* Circle Line Path String */
  const curvePath = `
    M 942 280             
    C 880 220, 840 209, 786 205  
    S 750 270, 637 180         
    S 530 80, 469 80             
    S 330 109, 300 110           
    S 250 109, 204 100         
    Q 75 80, 34 30               
  `;

  return (
    <div className="relative w-275 h-112.5 mx-auto hidden lg:block overflow-visible mt-20">
      {/* End-of-path text */}
      <div
        className="absolute type-subtitle-1 text-white-1 text-right"
        style={{
          right: "1000px",
          top: "-20px",
          width: "160px",
        }}
      >
        و این داستان ادامه دارد...
      </div>

      <svg
        width="1000"
        height="350"
        viewBox="0 0 1000 350"
        fill="none"
        className="absolute top-10 right-0 pointer-events-none z-0"
      >
        <defs>
          {/* Gradient for the line path with updated transparent green color */}
          <linearGradient id="line-gradient" x1="1" y1="0" x2="0" y2="0">
            {/* Start: transparent green */}
            <stop offset="0%" stopColor="#467F4F" />

            {/* Continues near the left end (transparent green) */}
            <stop offset="82%" stopColor="#467F4F" />

            {/* Color for the end-of-path text */}
            <stop offset="82%" stopColor="var(--color-white-4)" />
            <stop offset="100%" stopColor="var(--color-white-4)" />
          </linearGradient>
        </defs>

        <path
          d={curvePath}
          stroke="url(#line-gradient)"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Render points and content */}
      {points.map((point, index) => {
        const item = items[index];
        const isActive = index === activeIndex;
        const isTop = point.position === "top";

        return (
          <div
            key={index}
            className="absolute z-10"
            style={{ right: point.x, top: point.y + 40 }}
          >
            {/* circles*/}
            <motion.div
              className={cn(
                "rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-colors duration-500 cursor-pointer",
                point.isEnding
                  ? "w-5 h-5 bg-white-4"
                  : isActive
                    ? "w-5 h-5 border-[3px] border-primary-2 bg-teritary-1"
                    : "w-5 h-5 bg-primary-2",
              )}
              initial={false}
              animate={{ scale: isActive ? 1.2 : 1 }}
              onClick={() => !point.isEnding && setActiveIndex(index)}
            />

            <div className="absolute left-0 right-5 top-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex items-center justify-center w-0 h-0">
                {/* Vertical line connected to the text */}
                <AnimatePresence>
                  {isActive && item && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 45, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className={cn(
                        "absolute w-0.75 bg-primary-2 left-0 -translate-x-1/2",
                        isTop ? "bottom-3" : "top-3",
                      )}
                    />
                  )}
                </AnimatePresence>

                {/* text content*/}
                <AnimatePresence mode="wait">
                  {isActive && item && (
                    <motion.div
                      initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className={cn(
                        "absolute flex flex-col items-center text-center w-87.5 left-1/2 -translate-x-1/2 p-3",
                        isTop ? "bottom-16.25" : "top-16.25",
                      )}
                    >
                      <div className="px-4 py-1">
                        <span className="type-h5 text-primary-2">
                          {item.year}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 items-center w-full px-4">
                        <h4 className="type-subtitle-1 text-white">
                          {item.title}
                        </h4>
                        <p className="type-body-2 text-white-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- Mobile Scroll Item (UNCHANGED) ---
const MobileItem = ({ item, index, activeIndex, onVisible }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "2500px 0px -50% 0px",
    amount: 0,
  });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  const isActive = index === activeIndex;
  const isPast = index < activeIndex;

  return (
    <div ref={ref} className="relative min-h-45 flex gap-4">
      <div className="relative flex flex-col items-center min-w-10">
        <div className="absolute top-0 bottom-0 w-1 bg-white-6 z-0" />
        <motion.div
          className="absolute top-0 w-1 bg-primary-2 z-10 origin-top"
          initial={{ height: "0%" }}
          animate={{ height: isInView ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
        <motion.div
          className={cn(
            "relative z-20 mt-6 rounded-full transition-all duration-500",
            isActive
              ? "w-6 h-6 border-[3px] border-primary-2 bg-teritary-1"
              : isPast && isInView
                ? "w-6 h-6 bg-primary-2 border-none"
                : "w-5 h-5 bg-white-4 border-none",
          )}
        />
      </div>

      <div className="flex-1 pt-5 text-right">
        {isInView ? (
          <motion.div
            initial={{ opacity: 0, x: -40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-3 items-start"
          >
            <span className="inline-block px-3 py-1 text-primary-2 type-h5 rounded-sm w-full text-right">
              {item.year}
            </span>
            <h3 className="type-h6 text-white w-full text-right">
              {item.title}
            </h3>
            <p className="type-body-2 text-white-2 w-full text-right">
              {item.description}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <span className="inline-block px-3 py-1 text-white-3 type-h5 rounded-sm w-full text-right">
              {item.year}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// --- Mobile Wrapper Component (UNCHANGED) ---
const MobileTimeline = ({ items }) => {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef);

  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  return (
    <div className="relative w-full max-w-93.75 mx-auto block lg:hidden">
      <div className="flex flex-col">
        {items.map((item, i) => (
          <MobileItem
            key={item.id}
            item={item}
            index={i}
            activeIndex={activeMobileIndex}
            onVisible={(idx) => setActiveMobileIndex(idx)}
          />
        ))}
      </div>
      <div ref={footerRef} className="relative pl-4 flex gap-4">
        <div className="relative flex flex-col items-center min-w-10">
          <div className="w-1 bg-white-6 h-30" />
          <div className="absolute top-30 -translate-y-1/2 w-5 h-5 bg-white-6 rounded-full" />
        </div>
        <div className="flex-1 flex items-end h-30 text-right">
          <div className="w-full transform translate-y-[30%]">
            <span className="text-white-1 type-h6 px-2 py-2 rounded-md">
              و این داستان ادامه دارد...
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed left-0 right-0 bottom-0 h-85 pointer-events-none",
          "z-50 lg:hidden bg-linear-to-t from-(--color-teritary-1) to-transparent",
        )}
      />
    </div>
  );
};

const StoryTimeline = ({ items = defaultItems, className }) => {
  return (
    <section
      className={cn(
        "w-full py-10 lg:py-40 bg-teritary-1 overflow-hidden",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <DesktopCurve items={items} />
        <MobileTimeline items={items} />
      </div>
    </section>
  );
};

StoryTimeline.propTypes = {
  items: PropTypes.arrayOf(timelineItemPropType),
  className: PropTypes.string,
};

export default StoryTimeline;
