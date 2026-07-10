import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

/* CVA - Card Container */
const cardVariants = cva(
  "flex flex-col items-center relative overflow-hidden transition-all duration-300 rounded-[12px]",
  {
    variants: {
      theme: {
        dark: "bg-teritary-2",
      },
      size: {
        default: "w-full max-w-[270px] h-[381px] md:max-w-[400px] md:h-[463px]",
      },
    },
    defaultVariants: {
      theme: "dark",
      size: "default",
    },
  },
);

/* CVA - Tag/Button Styles */

const tagVariants = cva(
  "flex items-center justify-center rounded-[8px] text-white transition-colors group",
  {
    variants: {
      intent: {
        primary: "bg-teritary-3 hover:bg-opacity-80",
      },
      size: {
        default: "h-[34px] px-[12px] py-[8px] min-w-[108px]",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
    },
  },
);

function ArticleCard({ imageSrc, title, date, readTime, tags, className }) {
  return (
    <article className={cn(cardVariants(), className)}>
      {/* Image Section */}
      <div className="pt-6 px-4 md:px-6 w-full">
        <figure className="relative w-full h-47.25 md:h-60 rounded-xl overflow-hidden m-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
          />
        </figure>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 w-full px-4 md:px-6 mt-5">
        {/* Tags Row */}
        {tags && tags.length > 0 && (
          <div className="flex flex-row gap-1 w-full mb-3">
            {tags.slice(0, 2).map((tag, index) => (
              <span key={index} className={tagVariants()}>
                <span className="type-captions text-white-1">{tag}</span>
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="w-full text-right type-subtitle-1 text-white-1 line-clamp-2 md:h-15 mt-3 hover:text-primary-1 cursor-pointer">
          {title}
        </h3>

        {/* Footer Meta Data (Date & Time) */}
        <div className="mt-auto mb-6 flex items-center gap-3 w-full text-white-3">
          {/* Read Time */}
          <div className="flex items-center gap-2">
            <span className="type-captions text-white-3">{readTime}</span>
          </div>

          {/* Separator Line */}
          <div className="w-px h-4 bg-[#1F4751]" />

          {/* Date */}
          <div className="flex items-center gap-2">
            <span className="type-captions text-white-3">{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

ArticleCard.defaultProps = {
  tags: [],
};

export default ArticleCard;
