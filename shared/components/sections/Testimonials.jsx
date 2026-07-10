"use client";
import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TestimonialsCard from "../cards/TestimonialsCard";
import { Star } from "lucide-react";
import PropTypes from "prop-types";

const Testimonials = ({ number, reviews = [], title, subtitle }) => {
  const sectionRef = useRef(null);
  const shouldShowRegistration = useMemo(
    () => reviews.length > number && number % 2 !== 0,
    [reviews.length, number]
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Spring config for smooth animations
  const springConfig = { stiffness: 200, damping: 20, restDelta: 0.001 };

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Title & Star animations
  const titleOpacity = useTransform(smoothProgress, [0.3, 0.6], [1, 0]);
  const titleY = useTransform(smoothProgress, [0.1, 0.3], [0, -50]);
  const starY = useTransform(smoothProgress, [0.1, 0.3], [0, -50]);

  // Cards animation
  const cardsY = useTransform(smoothProgress, [0.2, 0.8], [0, -100]);

  // Section entry animation
  const sectionOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const sectionY = useTransform(smoothProgress, [0, 0.15], [80, 0]);

  // Step 1: Limit total reviews based on the 'number' prop before splitting into columns
  const limitedReviews = reviews.slice(0, number);

  // Step 2: Split limited reviews into columns
  const leftColumnReviews = limitedReviews.filter((_, i) => i % 2 === 0);
  const rightColumnReviews = limitedReviews.filter((_, i) => i % 2 !== 0);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        position: "relative",
        opacity: sectionOpacity,
        y: sectionY,
      }}
      className="w-full bg-teritary-1 min-h-[120vh] py-20 overflow-hidden relative"
      aria-labelledby="testimonials-title"
    >
      <div className="w-full mx-auto flex flex-col items-center">
        <header className="flex flex-col items-center text-center mb-10 z-20 relative px-4">
          {/* Title Section */}
          <motion.hgroup
            style={{ opacity: titleOpacity, y: titleY }}
            className="flex flex-col items-center"
          >
            <p className="text-white-2 type-h5-light" role="doc-subtitle">
              {subtitle}
            </p>
            <h2 id="testimonials-title" className="text-white-1 type-h2 mt-4">
              {title}
            </h2>
          </motion.hgroup>

          {/* Stars - Rating indicator */}
          <motion.div
            style={{ y: starY }}
            className="flex gap-2 mt-6"
            role="img"
            aria-label="5 out of 5 stars rating"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-12 h-12 text-primary-1 fill-primary-1"
                aria-hidden="true"
              />
            ))}
          </motion.div>
        </header>

        {/* Mobile Content */}
        <div
          className="flex desktop:hidden flex-col items-center w-full gap-8 px-4"
          role="region"
          aria-label="Customer reviews carousel"
        >
          <ul
            className="flex w-full overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hidden list-none"
            role="list"
          >
            {limitedReviews.map((review) => (
              <li
                key={review.id}
                className="min-w-75 snap-center"
                role="listitem"
              >
                <TestimonialsCard {...review} />
              </li>
            ))}
          </ul>

          {/* Registration Card - Placed below the scroll, centered */}
          {shouldShowRegistration && (
            <div className="w-full flex justify-center">
              <TestimonialsCard
                isRegistration={true}
                title="به جمع ما بپیوندید"
                buttonText="ساخت حساب رایگان"
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Desktop Cards - Scroll Animation */}
        <motion.div
          style={{ y: cardsY }}
          className="hidden desktop:flex flex-row justify-center gap-8 w-full px-10"
          role="region"
          aria-label="Customer reviews"
        >
          {/* Left Column */}
          <ul className="flex flex-col gap-8 w-155 list-none" role="list">
            {leftColumnReviews.map((review) => (
              <li key={review.id} role="listitem">
                <TestimonialsCard {...review} />
              </li>
            ))}
          </ul>

          {/* Right Column */}
          <ul className="flex flex-col gap-8 w-155 pt-20 list-none" role="list">
            {rightColumnReviews.map((review) => (
              <li key={review.id} role="listitem">
                <TestimonialsCard {...review} />
              </li>
            ))}

            {/* Registration Card */}
            {shouldShowRegistration && (
              <li role="listitem">
                <TestimonialsCard
                  isRegistration={true}
                  title="به جمع ما بپیوندید"
                  buttonText="ساخت حساب رایگان"
                />
              </li>
            )}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

Testimonials.propTypes = {
  number: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatarSrc: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Testimonials;
