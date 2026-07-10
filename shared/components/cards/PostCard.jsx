"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

/* Post Card Variants*/
const cardVariants = cva(
  "relative flex transition-all duration-300 overflow-hidden rounded-none desktop:rounded-[16px]",
  {
    variants: {
      variant: {
        primary:
          "flex-col desktop:flex-row items-stretch justify-between w-full h-auto desktop:w-full desktop:h-105",
        secondary:
          "flex-col items-center w-full h-auto desktop:w-[608.5px] desktop:h-[755px]",
      },
      theme: {
        dark: "bg-teritary-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      theme: "dark",
    },
  },
);

function PostCard({
  variant = "primary",
  imageSrc,
  categories = [],
  title,
  description,
  publishDate,
  readTime,
  buttonText,
  className,
  activeIndex = 0,
  totalSlides = 3,
  ...rest
}) {
  const isPrimary = variant === "primary";

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <article
      {...rest}
      className={cn(
        cardVariants({ variant, theme: "dark" }),
        "shrink-0 snap-center",
        className,
      )}
    >
      {/* Image Section (Desktop Only) */}
      {!isPrimary && (
        <div className="relative hidden desktop:block shrink-0 w-[561px] h-[320px] mx-auto mt-6 pr-2 pl-2 elf-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      )}

      {/* Content Section */}
      <div
        className={cn(
          "relative flex flex-col justify-between z-20 w-full h-full",
          isPrimary
            ? "desktop:max-w-[638.5px] desktop:h-105 desktop:p-10 desktop:gap-15"
            : "desktop:max-w-[608.5px] desktop:flex-1 desktop:p-10 desktop:gap-10",
          "pt-6 pr-4 pb-6 pl-4 desktop:pt-10 desktop:pr-10 desktop:pb-10 desktop:pl-10",
        )}
      >
        {/* Glow Effect - Hidden on Mobile */}
        {isPrimary && (
          <div
            className="hidden desktop:block absolute top-0 right-0 w-32.25 h-32.25 pointer-events-none z-0"
            style={{
              background: "var(--primary-2, #9AED66)",
              filter: "blur(90px)",
              opacity: 0.4,
            }}
            aria-hidden="true"
          />
        )}

        <div className="relative z-10 flex flex-col w-full h-full desktop:justify-between gap-7 desktop:gap-0">
          {isMounted && (
            <div className="flex desktop:hidden items-center gap-2 mt-6 w-[88px] h-[4px]">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-[4px] w-[24px] rounded-[20px] transition-all duration-300",
                    i === activeIndex ? "bg-white" : "bg-[#FFFFFF99]",
                  )}
                />
              ))}
            </div>
          )}
          <div className="flex flex-row gap-1 desktop:gap-2 justify-start">
            {categories.map((cat, index) => (
              <span
                key={index}
                className={cn(
                  "flex items-center justify-center rounded-lg bg-teritary-3",
                  "desktop:max-w-[138px] desktop:h-[37px] desktop:px-5 desktop:py-2",
                  "max-w-[108px] h-[34px] px-3 py-2",
                )}
              >
                <span className="text-white-1 type-captions whitespace-nowrap">
                  {cat}
                </span>
              </span>
            ))}
          </div>

          {/* 2. Title & Description  */}
          <div className="flex flex-col gap-2 my-auto">
            <h2 className="type-h5 text-white w-full text-right">{title}</h2>
            <p className="type-body-2 text-white-1 w-full text-right line-clamp-4 desktop:line-clamp-4">
              {description}
            </p>
          </div>

          {/* 3. Footer Section*/}
          <div className="flex pb-5 flex-col items-start gap-3 desktop:flex-row desktop:items-end desktop:justify-between desktop:h-7.5 desktop:mt-auto w-full">
            {/* Date / Time */}
            <div className="flex flex-row items-center gap-3 h-5.25">
              <span className="type-captions text-white-3">{readTime}</span>
              <div className="w-px h-4 bg-white-6"></div>
              <span className="type-captions text-white-3">{publishDate}</span>
            </div>

            {/* CTA - Icon  */}
            <a className="group flex mt-3 flex-row items-center gap-1 cursor-pointer desktop:mt-0">
              <span className="type-subtitle-1 text-primary-2">
                {buttonText}
              </span>
              <div className="transition-transform duration-300 group-hover:-translate-x-2 flex items-center justify-center">
                <ChevronLeft
                  className="w-5 h-5 desktop:w-7 desktop:h-7 text-primary-2"
                  strokeWidth={2}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      {isPrimary && (
        <div className="relative hidden desktop:block shrink-0 w-147.75 h-93 mr-auto ml-6 self-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      )}
    </article>
  );
}

PostCard.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  imageSrc: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  activeIndex: PropTypes.number,
  totalSlides: PropTypes.number,
};

export default PostCard;
