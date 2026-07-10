import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

// card style
const cardVariants = cva(
  "w-full flex flex-col overflow-hidden rounded-[12px] bg-teritary-1 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "max-w-[328px] md:max-w-[400px]", // Case Study
        secondary: "max-w-[328px] md:max-w-[384px]", // Video/Secondary
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

//image style
const imageVariants = cva("relative w-full shrink-0", {
  variants: {
    variant: {
      default: "h-[184px] md:h-[224px]",
      secondary: "h-[184px] md:h-[215px]",
    },
  },
});

// tagText
const tagTextVariants = cva("text-right text-primary-1", {
  variants: {
    variant: {
      default: "type-captions-2",
      secondary: "type-captions flex items-center gap-2",
    },
  },
});

// (Description)
const descriptionVariants = cva(
  "type-subtitle-1 text-right text-white-1 line-clamp-2",
);

const ContentCard = ({
  variant = "default",
  imageSrc,
  imageAlt,
  tagText,
  description,
  date,
  icon,
  className,
}) => {
  return (
    <div className={cn(cardVariants({ variant }), className)}>
      {/* Image */}
      <div className={imageVariants({ variant })}>
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      {/* Text content*/}
      <div className="flex flex-col gap-4 px-0 py-6 md:h-49 h-auto w-full">
        <div className="flex flex-col h-full px-6 justify-between">
          <div className="flex flex-col gap-4">
            <div
              className={cn(
                "flex w-full items-center",
                variant === "default" ? "justify-between" : "justify-start",
              )}
            >
              {/* Tagtext*/}
              <span className={tagTextVariants({ variant })}>
                {variant === "secondary" && icon && <span>{icon}</span>}
                {tagText}
              </span>

              {/* date*/}
              {variant === "default" && date && (
                <span className="block md:hidden type-subtitle-2 text-white-3">
                  {date}
                </span>
              )}
            </div>

            {/* (Description) */}
            <h3 className={descriptionVariants({ variant })}>{description}</h3>
          </div>

          {/* date*/}
          {variant === "default" && date && (
            <div className="hidden md:block mt-auto pt-4">
              <span className="type-subtitle-2 text-white-3">{date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- PropTypes ---
ContentCard.propTypes = {
  variant: PropTypes.oneOf(["default", "secondary"]),
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  tagText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.string,
};

export default ContentCard;
