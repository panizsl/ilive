"use client";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/shared/utils/cn";
import { memo } from "react";

const sectionVariants = cva(["relative", "w-full", "min-h-[280px]"]);

// Simplified animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Memoized Logo component
const LogoItem = memo(function LogoItem({ logo, index, size = "desktop" }) {
  const sizeClass = size === "desktop" ? "size-[100px]" : "size-[80px]";
  const sizePx = size === "desktop" ? "100px" : "80px";
  return (
    <motion.li variants={logoVariants} role="listitem">
      <figure className={cn("relative shrink-0", sizeClass)}>
        <Image
          src={logo.icon}
          alt={logo.alt}
          fill
          sizes={sizePx}
          className="object-contain"
          loading="lazy"
        />
      </figure>
    </motion.li>
  );
});

function TrustedBy({
  titlePart1,
  titlePart2,
  logos = [],
  backgroundColor = "bg-transparent",
  className,
}) {
  return (
    <section
      className={cn(sectionVariants(), backgroundColor, className)}
      aria-labelledby="trusted-by-title"
    >
      <div className="flex flex-col items-start size-full max-w-360 mx-auto">
        <div className="flex flex-col gap-6 items-start px-4 desktop:px-47.5 py-15 desktop:py-20 relative size-full z-10">
          {/* Desktop Layout */}
          <header className="hidden desktop:flex gap-20 items-center justify-start w-full">
            <hgroup>
              <p className="type-h4 text-white-1 text-center desktop:text-right">
                <span className="text-primary-2">{titlePart1}</span>
                <span>{titlePart2}</span>
              </p>
            </hgroup>
            <motion.ul
              className="flex gap-10 h-30 items-center justify-center list-none"
              role="list"
              aria-label="Partner companies logos"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {logos.map((logo, index) => (
                <LogoItem
                  key={logo.id || index}
                  logo={logo}
                  index={index}
                  size="desktop"
                />
              ))}
            </motion.ul>
          </header>

          {/* Mobile Layout */}
          <header className="flex desktop:hidden flex-col gap-10 items-center justify-center w-full">
            <hgroup>
              <p className="type-h5 text-white-1 text-center desktop:text-right">
                <span className="text-primary-2">{titlePart1}</span>
                <span>{titlePart2}</span>
              </p>
            </hgroup>
            <motion.ul
              className="flex flex-wrap gap-3 items-center justify-center w-full list-none"
              role="list"
              aria-label="Partner companies logos"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {logos.map((logo, index) => (
                <LogoItem
                  key={logo.id || index}
                  logo={logo}
                  index={index}
                  size="mobile"
                />
              ))}
            </motion.ul>
          </header>
        </div>
      </div>

      {/* Glow Effects */}
      <div
        className="desktop:hidden glow-base glow-sm glow-color-blue -left-10 top-1/2 -translate-y-1/2 opacity-40"
        aria-hidden="true"
      />
      <div
        className="desktop:hidden glow-base glow-sm glow-color-blue -right-10 top-1/2 -translate-y-1/2 opacity-40"
        aria-hidden="true"
      />
      <div
        className="hidden desktop:block glow-base glow-lg glow-color-blue -left-32 top-1/2 -translate-y-1/2 opacity-40"
        aria-hidden="true"
      />
      <div
        className="hidden desktop:block glow-base glow-lg glow-color-blue -right-32 top-1/2 -translate-y-1/2 opacity-40"
        aria-hidden="true"
      />
    </section>
  );
}

LogoItem.propTypes = {
  logo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["desktop", "mobile"]),
};

TrustedBy.propTypes = {
  titlePart1: PropTypes.string.isRequired,
  titlePart2: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

export default TrustedBy;
