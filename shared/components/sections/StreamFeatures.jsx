"use client";

import { useRef, useState, useEffect, useId } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import { cn } from "@/shared/utils/cn";
import StreamFeatureCard from "@/shared/components/cards/StreamFeatureCard";

function StreamFeatures({ title, features, className }) {
  const titleId = useId();
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 400 + 38;
    const totalWidth = features.length * cardWidth;
    const containerWidth = container.offsetWidth;
    const maxDrag = totalWidth - containerWidth + 80;

    setDragConstraints({ left: 0, right: maxDrag });

    const autoScroll = setInterval(() => {
      const currentX = x.get();
      if (currentX >= maxDrag - 50) {
        controls.start({
          x: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
      } else {
        controls.start({
          x: currentX + cardWidth,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
      }
    }, 10000);

    return () => clearInterval(autoScroll);
  }, [features.length, controls, x]);

  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "relative w-full max-w-360 mx-auto py-20 desktop:py-20 overflow-hidden",
        className
      )}
      style={{ position: "relative" }}
    >
      <div className="flex flex-col gap-15 desktop:gap-15 px-5 desktop:px-20">
        {/* Section Header */}
        <header>
          <h2 id={titleId} className="type-h5-light text-white text-center">
            {title}
          </h2>
        </header>

        {/* Features Carousel */}
        <div
          ref={containerRef}
          className="relative overflow-visible"
          style={{ position: "relative" }}
          role="region"
          aria-label="Features carousel"
        >
          <motion.ul
            className="flex gap-9.5 cursor-grab active:cursor-grabbing list-none p-0 m-0 relative"
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            style={{ x, position: "relative" }}
            animate={controls}
            role="list"
            aria-label="Stream features list"
          >
            {features.map((feature, index) => (
              <li
                key={index}
                className="shrink-0 relative"
                style={{ position: "relative" }}
              >
                <StreamFeatureCard
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Shadow Overlay - Decorative */}
      <div
        className="absolute inset-y-0 left-0 w-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to right, #041A20 0%, #041A2000 100%)",
        }}
        aria-hidden="true"
        role="presentation"
      />
    </section>
  );
}

StreamFeatures.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

StreamFeatures.defaultProps = {
  className: "",
};

export default StreamFeatures;
