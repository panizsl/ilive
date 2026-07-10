"use client";

import { useEffect, useRef, useState, useId } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";

const sectionVariants = cva(
  [
    "relative",
    "w-full",
    "min-h-[720px]",
    "desktop:min-h-[800px]",
    "overflow-hidden",
  ],
  {
    variants: {
      layout: {
        default: "",
      },
    },
    defaultVariants: {
      layout: "default",
    },
  }
);

const iconPositions = [
  { desktop: { top: "35%", left: "6%" }, mobile: { top: "18%", left: "10%" } },
  { desktop: { top: "20%", left: "24%" }, mobile: { top: "12%", left: "32%" } },
  { desktop: { top: "17%", left: "63%" }, mobile: { top: "12%", left: "54%" } },
  { desktop: { top: "22%", left: "82%" }, mobile: { top: "18%", left: "76%" } },
  { desktop: { top: "56%", left: "88%" }, mobile: { top: "82%", left: "10%" } },
  { desktop: { top: "69%", left: "12%" }, mobile: { top: "88%", left: "32%" } },
  { desktop: { top: "74%", left: "33%" }, mobile: { top: "88%", left: "54%" } },
  { desktop: { top: "74%", left: "71%" }, mobile: { top: "82%", left: "76%" } },
];

/**
 * Integration section component showing platform integrations
 * @param {Object} props - Component props
 */
function Integration({
  subtitle,
  titleLine1,
  titleLine2,
  linkText,
  onLinkClick,
  platforms = [],
  backgroundColor = "bg-teritary-2",
  className,
}) {
  const titleId = useId();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const mergedPlatforms = platforms.slice(0, 8).map((platform, index) => ({
    ...platform,
    position: iconPositions[index],
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentRef = sectionRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const renderGlowEffects = () => (
    <>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 w-125 h-125 opacity-10 desktop:opacity-20 bg-secondary-2 rounded-full blur-[300px]"
        aria-hidden="true"
        role="presentation"
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-0 w-125 h-125 opacity-10 desktop:opacity-20 bg-primary-2 rounded-full blur-[300px]"
        aria-hidden="true"
        role="presentation"
      />
    </>
  );

  const renderCenterGradient = () => (
    <>
      <div
        className="absolute inset-0 hidden desktop:flex items-center justify-center z-10 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <svg
          className="w-full max-w-272.75 h-180"
          viewBox="0 0 1091 720"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <ellipse
            cx="545.5"
            cy="360"
            rx="545.5"
            ry="360"
            fill="url(#ellipse_gradient_desktop)"
          />
          <defs>
            <radialGradient
              id="ellipse_gradient_desktop"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(545.5 360) rotate(90) scale(360 545.5)"
            >
              <stop offset="0.1" stopColor="#041A20" />
              <stop offset="1" stopColor="#041A20" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div
        className="absolute inset-0 desktop:hidden flex items-center justify-center z-10 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <svg
          className="w-90 h-180.25"
          viewBox="0 0 360 721"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <ellipse
            cx="180"
            cy="360.5"
            rx="180"
            ry="360.5"
            fill="url(#ellipse_gradient_mobile)"
          />
          <defs>
            <radialGradient
              id="ellipse_gradient_mobile"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(180 360.5) rotate(90) scale(360.5 180)"
            >
              <stop offset="0.1" stopColor="#041A20" />
              <stop offset="1" stopColor="#041A20" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );

  const renderPlatformIcons = () => {
    if (mergedPlatforms.length === 0) return null;

    return (
      <ul
        className="absolute inset-0 max-w-360 mx-auto z-5 list-none p-0 m-0"
        role="list"
        aria-label="Integrated platforms"
      >
        {mergedPlatforms.map((platform, index) => (
          <motion.li
            key={`desktop-${index}`}
            className="absolute hidden desktop:block size-20"
            style={{
              top: platform.position.desktop.top,
              left: platform.position.desktop.left,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: isHovered ? 1 : 0.8,
              delay: index * 0.08,
              ease: "easeInOut",
            }}
          >
            <figure className="relative size-full m-0">
              <Image
                src={platform.icon}
                alt={platform.alt}
                fill
                sizes="80px"
                className="object-contain"
              />
            </figure>
          </motion.li>
        ))}

        {mergedPlatforms.map((platform, index) => (
          <motion.li
            key={`mobile-${index}`}
            className="absolute desktop:hidden size-12"
            style={{
              top: platform.position.mobile.top,
              left: platform.position.mobile.left,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 1,
              delay: index * 0.08,
              ease: "easeInOut",
            }}
          >
            <figure className="relative size-full m-0">
              <Image
                src={platform.icon}
                alt={platform.alt}
                fill
                sizes="48px"
                className="object-contain"
              />
            </figure>
          </motion.li>
        ))}
      </ul>
    );
  };

  const renderContent = () => (
    <>
      {/* Desktop Content */}
      <motion.header
        className="absolute inset-0 hidden desktop:flex items-center justify-center z-20"
        initial={{ y: 80 }}
        animate={isHovered ? { y: 0 } : { y: 80 }}
        transition={{
          duration: isHovered ? 1 : 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col gap-6 items-center px-4">
          <p className="type-body-1 text-white-2 text-center">{subtitle}</p>

          <hgroup className="flex flex-col items-center text-center text-white-4">
            <h2 id={titleId} className="type-h1">
              <span>{titleLine1.before}</span>{" "}
              <span className="text-white">{titleLine1.highlight}</span>{" "}
              <span>{titleLine1.after}</span>
            </h2>
            <p className="type-h1">
              <span>{titleLine2.before}</span>{" "}
              <span className="text-white">{titleLine2.highlight}</span>{" "}
              <span>{titleLine2.after}</span>
            </p>
          </hgroup>

          {linkText && (
            <nav aria-label="Platform navigation">
              <button
                type="button"
                onClick={onLinkClick}
                className="flex gap-1 items-center justify-center group cursor-pointer hover:gap-2 transition-all"
                aria-label={linkText}
              >
                <span className="type-body-1 text-primary-2 group-hover:text-primary-3 transition-colors">
                  {linkText}
                </span>
                <span
                  className="size-7 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <ChevronLeft className="size-full text-primary-2" />
                </span>
              </button>
            </nav>
          )}
        </div>
      </motion.header>

      {/* Mobile Content */}
      <header className="absolute inset-0 desktop:hidden flex items-center justify-center z-20">
        <div className="flex flex-col gap-6 items-center px-4">
          <p className="type-body-1 text-white-2 text-center">{subtitle}</p>

          <hgroup className="flex flex-col items-center text-center text-white-4">
            <h2 className="type-h1">
              <span>{titleLine1.before}</span>{" "}
              <span className="text-white">{titleLine1.highlight}</span>{" "}
              <span>{titleLine1.after}</span>
            </h2>
            <p className="type-h1">
              <span>{titleLine2.before}</span>{" "}
              <span className="text-white">{titleLine2.highlight}</span>{" "}
              <span>{titleLine2.after}</span>
            </p>
          </hgroup>

          {linkText && (
            <nav aria-label="Platform navigation">
              <button
                type="button"
                onClick={onLinkClick}
                className="flex gap-1 items-center justify-center group cursor-pointer hover:gap-2 transition-all"
                aria-label={linkText}
              >
                <span className="type-body-1 text-primary-2 group-hover:text-primary-3 transition-colors">
                  {linkText}
                </span>
                <span
                  className="size-6 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <ChevronLeft className="size-full text-primary-2" />
                </span>
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby={titleId}
      className={cn(sectionVariants(), backgroundColor, className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderGlowEffects()}
      {renderPlatformIcons()}
      {renderCenterGradient()}
      {renderContent()}
    </section>
  );
}

Integration.propTypes = {
  subtitle: PropTypes.string.isRequired,
  titleLine1: PropTypes.shape({
    before: PropTypes.string,
    highlight: PropTypes.string.isRequired,
    after: PropTypes.string,
  }).isRequired,
  titleLine2: PropTypes.shape({
    before: PropTypes.string,
    highlight: PropTypes.string.isRequired,
    after: PropTypes.string,
  }).isRequired,
  linkText: PropTypes.string,
  onLinkClick: PropTypes.func,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

Integration.defaultProps = {
  linkText: "",
  onLinkClick: () => {},
  platforms: [],
  backgroundColor: "bg-teritary-2",
  className: "",
};

export default Integration;
