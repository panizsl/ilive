import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { Download } from "lucide-react";
import { cn } from "@/shared/utils/cn";

//base style
const cardVariants = cva(
  "group relative overflow-hidden flex flex-col justify-between border border-solid rounded-[12px] transition-all duration-200 cursor-pointer",
  {
    variants: {
      intent: {
        default: "bg-teritary-2 border-white-6",
      },
      size: {
        default: [
          "w-[328px] h-[160px] px-[20px] py-[24px] gap-[24px]",

          "md:w-[337.33px] md:h-[238px] md:p-[24px] md:gap-[24px]",
        ],
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
    },
  },
);

const DownloadCard = ({ title, format, size, className, ...props }) => {
  return (
    <div className={cn(cardVariants(), className)} {...props}>
      {/* Glow Effect */}

      <div
        className={cn(
          "glow-base glow-color-blue block",
          "w-50 h-50",
          "rounded-full",
          "absolute -bottom-10 -right-10",
          "blur-[80px]",
          "opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-in-out",
          "z-0",
        )}
      />

      {/* text content */}
      <div className="flex flex-col gap-2 md:w-[289.33px] md:h-35">
        {/* Title: Mobile type-h5, Desktop type-h6 */}
        <h3 className="type-h5 md:type-h6 text-right text-white-1 line-clamp-2 overflow-hidden">
          {title}
        </h3>

        {/* format and size container */}
        <div className="flex flex-row-reverse justify-between items-center md:flex-col md:p-3 md:gap-2 h-auto md:h-14 w-full">
          {/* format */}
          <div className="flex items-center justify-between md:justify-between h-6 w-27.5 md:w-full text-white-2">
            <span className="type-body-2">فرمت:</span>
            <span className="type-body-2 dir-ltr">{format}</span>
          </div>
          {/* size */}
          <div className="flex items-center gap-2 md:justify-between h-6 w-auto md:w-full text-white-2">
            <span className="type-body-2 text-nowrap">حجم:</span>
            <span className="type-body-2">{size}</span>
          </div>
        </div>
      </div>

      {/* icon + download button*/}
      <div className="flex items-center justify-start w-full">
        <button
          className="flex items-center gap-1 w-20.5 h-7.5 group cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Download File"
        >
          <span className="desktop:type-subtitle-1 type-h6 text-secondary-2 text-right">
            دانلود
          </span>
          <Download
            className="text-secondary-2 shrink-0"
            size={24}
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
};

DownloadCard.propTypes = {
  title: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
};

DownloadCard.defaultProps = {
  format: ".pdf",
  size: "0 MB",
};

export default DownloadCard;
