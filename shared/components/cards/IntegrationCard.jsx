import React from "react";
import PropTypes from "prop-types";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  "relative cursor-pointer overflow-hidden flex flex-col transition-all duration-500 group rounded-[12px]",
  {
    variants: {
      variant: {
        default:
          "w-[328px] h-[170px] p-[20px] md:w-[302px] md:h-[194px] md:p-[24px] border-white-6 bg-teritary-2 justify-between border",
        secondary:
          "w-[328px] h-[206px] p-[20px] md:w-[400px] md:h-[336px] md:p-[24px] border-white-6 bg-teritary-2 border justify-between",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const IntegrationCard = ({ title, description, icon, variant, className }) => {
  const isSecondary = variant === "secondary";

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return (
        <img
          src={icon}
          alt={title}
          className={cn(
            "object-contain",
            isSecondary ? "w-13.75 h-12 md:w-20 md:h-20" : "w-20 h-20",
          )}
        />
      );
    }
    return icon;
  };

  return (
    <div className={cn(cardVariants({ variant }), className)}>
      {/* Glow Effects - Desktop Hover (Bottom Right) */}
      <div
        className={cn(
          "glow-base glow-color-blue glow-md absolute z-0",
          "-bottom-24 -right-24",
          "hidden md:block",
          "opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-60",
        )}
      />

      {isSecondary && (
        <div className="absolute -bottom-10 -right-10 w-56.25 h-56.25  pointer-events-none" />
      )}

      {/* Glow Effects - Secondary Variant (Mobile Only) */}
      {isSecondary && (
        <div
          className={cn(
            "glow-base glow-color-blue",
            "block md:hidden",
            "absolute -bottom-25 -right-40",
            "w-56 h-56",
            "blur-[130px]",
            "opacity-100",
          )}
        />
      )}

      {/* Header Section: Icon & Mobile View Button */}
      <div
        className={cn(
          "relative z-10 flex w-full",
          isSecondary
            ? "justify-between items-start md:flex-col md:justify-start"
            : "flex-col",
        )}
      >
        {/* Icon */}
        {icon && (
          <div
            className={cn(
              "flex items-center justify-center",
              isSecondary ? "w-13.75 h-12 md:w-20 md:h-28" : "h-20",
            )}
          >
            {renderIcon()}
          </div>
        )}

        {/* Mobile View Button (Only visible on mobile for secondary) */}
        {isSecondary && (
          <div className="flex md:hidden items-center justify-start gap-1 w-21.5 h-6">
            <span
              className={cn(
                "text-primary-2 text-right",
                isSecondary ? "type-h6 md:type-subtitle-1" : "type-subtitle-1",
              )}
            >
              مشاهده
            </span>
            <ChevronLeft size={15} strokeWidth={3} className="text-primary-2" />
          </div>
        )}
      </div>

      {/* Text Content */}
      <div
        className={cn(
          "relative z-10 flex flex-col w-full text-right",
          isSecondary
            ? "gap-4 w-[288px] md:w-full md:h-auto"
            : "gap-2 md:w-63.5",
        )}
      >
        <h3 className={cn("text-white-1", isSecondary ? "type-h5" : "type-h6")}>
          {title}
        </h3>
        <p
          className={cn(
            "text-white-2 line-clamp-2",
            isSecondary ? "type-body-2 text-white-1" : "type-body-2",
          )}
        >
          {description}
        </p>
      </div>

      {/* Desktop View Button (Hidden on mobile for secondary) */}
      <div
        className={cn(
          "relative z-10 items-center justify-start mt-5 gap-1 cursor-pointer w-full",
          isSecondary ? "hidden md:flex" : "flex",
        )}
      >
        <div
          className={cn("flex items-center", isSecondary ? "gap-1" : "gap-1")}
        >
          <span className="text-primary-2 text-right type-subtitle-1">
            مشاهده
          </span>
          <ChevronLeft
            size={isSecondary ? 24 : 20}
            strokeWidth={isSecondary ? 3 : 2}
            className="text-primary-2 transform transition-transform duration-300 group-hover:-translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

IntegrationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(["default", "secondary"]),
  className: PropTypes.string,
};

export default IntegrationCard;
