"use client";

import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";

export function StreamFeatureCard({
  image,
  title,
  description,
  className,
  alwaysActive = false,
  showViewLink = false,
  viewLinkText = "مشاهده",
  href,
  onViewClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // If alwaysActive is true, treat as always hovered
  const isActive = alwaysActive || isHovered;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(
    useTransform(y, [-100, 100], [5, -5]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-5, 5]),
    springConfig
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      className={cn(
        "group relative w-67.5 h-86 desktop:w-full desktop:h-auto desktop:max-w-100 rounded-xl desktop:rounded-2xl bg-teritary-2 transition-all duration-300",
        className
      )}
      style={{
        position: "relative",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      aria-label={`Feature: ${title}`}
    >
      <div className="flex flex-col items-start overflow-clip p-4 relative size-full">
        {/* Feature Image */}
        <figure className="aspect-4/3 relative rounded-xl shrink-0 w-full overflow-hidden m-0">
          <motion.div
            className="absolute inset-0 size-full"
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover object-center rounded-xl"
              sizes="(max-width: 768px) 100vw, 400px"
              aria-hidden="true"
            />
          </motion.div>
        </figure>

        {/* Card Content */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-end leading-normal px-3 py-5 desktop:py-6 relative text-right w-full">
            {/* Glow Effect - Decorative */}
            <motion.span
              aria-hidden="true"
              role="presentation"
              className="glow-base glow-md glow-color-blue absolute -bottom-4 -left-4.25"
              initial={{ opacity: alwaysActive ? 0.2 : 0 }}
              animate={{ opacity: isActive ? 0.2 : 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Card Title */}
            <motion.h3
              className={cn(
                "type-subtitle-1 relative shrink-0 w-full transition-colors duration-300",
                isActive
                  ? "text-secondary-2"
                  : "text-white group-hover:text-secondary-2"
              )}
              dir="auto"
              initial={{ y: alwaysActive ? -2 : 0 }}
              animate={{ y: isActive ? -2 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Card Description */}
            <p
              className={cn(
                "type-body-2 relative shrink-0 w-full transition-colors duration-300",
                showViewLink ? "h-auto" : "h-18",
                isActive ? "text-white" : "text-white-1 group-hover:text-white"
              )}
              dir="auto"
            >
              {description}
            </p>

            {/* View Link */}
            {showViewLink && (
              <ViewLink href={href} onClick={onViewClick} text={viewLinkText} />
            )}
          </div>
        </div>
      </div>

      {/* Border - Decorative */}
      <motion.span
        aria-hidden="true"
        role="presentation"
        className="absolute border border-solid inset-0 pointer-events-none rounded-xl desktop:rounded-2xl"
        initial={{
          borderColor: alwaysActive
            ? "var(--color-white-5)"
            : "var(--color-white-7)",
        }}
        animate={{
          borderColor: isActive
            ? "var(--color-white-5)"
            : "var(--color-white-7)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}

StreamFeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  alwaysActive: PropTypes.bool,
  showViewLink: PropTypes.bool,
  viewLinkText: PropTypes.string,
  href: PropTypes.string,
  onViewClick: PropTypes.func,
};

StreamFeatureCard.defaultProps = {
  className: "",
  alwaysActive: false,
  showViewLink: false,
  viewLinkText: "مشاهده",
  href: "#",
  onViewClick: undefined,
};

/**
 * ViewLink - Internal component for the view link
 */
function ViewLink({ href, onClick, text }) {
  const content = (
    <span className="flex gap-1 items-center justify-start w-full">
      <span className="type-subtitle-1 text-primary-1 text-nowrap transition-colors duration-300 group-hover:text-primary-2">
        {text}
      </span>
      <ChevronLeft
        className="size-5 desktop:size-6 text-primary-1 transition-transform duration-300 group-hover:-translate-x-1"
        strokeWidth={2}
        aria-hidden="true"
      />
    </span>
  );

  if (href && href !== "#") {
    return (
      <a href={href} className="mt-2 w-full" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="mt-2 w-full cursor-pointer bg-transparent border-none"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

ViewLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default StreamFeatureCard;
