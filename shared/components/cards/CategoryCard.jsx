import PropTypes from "prop-types";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/shared/utils/cn";

function CategoryCard({
  icon,
  title,
  description,
  onViewClick,
  viewText = "مشاهده",
  href,
  className,
}) {
  const CardWrapper = href ? Link : "div";
  const cardProps = href ? { href } : {};
  const IconComponent = typeof icon === "string" ? LucideIcons[icon] : null;
  return (
    <>
      {/* Desktop Card */}
      <CardWrapper
        {...cardProps}
        className={cn(
          "hidden desktop:block bg-teritary-2 relative rounded-xl w-full h-full min-h-75 cursor-pointer group",
          className
        )}
        onClick={!href ? onViewClick : undefined}
        role="article"
      >
        <div className="size-full">
          <div className="flex flex-col items-start overflow-clip px-5 py-8 relative size-full">
            {/* Content */}
            <div className="flex flex-col gap-8 items-start w-full">
              {/* Icon and Title */}
              <header className="flex flex-col gap-6 items-start justify-center w-full">
                {/* Icon */}
                <span
                  className="transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {IconComponent ? (
                    <IconComponent className="size-12 text-primary-2 transition-colors" />
                  ) : (
                    icon
                  )}
                </span>
                {/* Title */}
                <h3
                  className="type-h6 text-right text-nowrap text-white-1 transition-colors duration-300 group-hover:text-primary-2"
                  dir="auto"
                >
                  {title}
                </h3>
              </header>

              {/* Description */}
              <p
                className="type-body-2 text-white-2 text-right w-full"
                dir="auto"
              >
                {description}
              </p>
            </div>

            {/* Glow Effect on Hover */}
            <div
              className="glow-base glow-lg glow-color-blue absolute -left-40 top-16 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Border */}
        <span
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none rounded-xl border-white-7 transition-colors duration-300 group-hover:border-secondary-2/30"
        />
      </CardWrapper>

      {/* Mobile Card */}
      <CardWrapper
        {...cardProps}
        className={cn(
          "desktop:hidden bg-teritary-2 relative rounded-xl w-full group",
          className
        )}
        role="article"
      >
        <div className="flex flex-col items-center size-full">
          <div className="flex flex-col gap-3 items-start overflow-clip px-5 py-6 size-full">
            {/* Content */}
            <div className="flex flex-col gap-5 items-start w-full">
              {/* Icon and Title - Horizontal */}
              <header className="flex gap-4 items-center justify-start w-full">
                <span className="scale-[0.833] shrink-0" aria-hidden="true">
                  {IconComponent ? (
                    <IconComponent className="size-8 text-primary-2" />
                  ) : (
                    icon
                  )}
                </span>
                <h3
                  className="type-subtitle-1 text-white-1 text-nowrap text-right"
                  dir="auto"
                >
                  {title}
                </h3>
              </header>

              {/* Description */}
              <p
                className="type-body-2 text-white-2 text-right w-full"
                dir="auto"
              >
                {description}
              </p>
            </div>

            {/* View Button */}
            <button
              type="button"
              onClick={onViewClick}
              className="flex gap-1 items-center justify-start group/btn hover:gap-2 transition-all cursor-pointer bg-transparent border-none"
            >
              <span
                className="type-body-2 text-primary-2 text-nowrap text-right group-hover/btn:text-primary-3 transition-colors"
                dir="auto"
              >
                {viewText}
              </span>
              <ChevronLeft
                className="size-6 text-primary-2 rotate-0 group-hover/btn:-translate-x-1 transition-transform duration-300"
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Border */}
        <span
          aria-hidden="true"
          className="absolute border border-white-7 border-solid inset-0 pointer-events-none rounded-xl"
        />
      </CardWrapper>
    </>
  );
}

CategoryCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onViewClick: PropTypes.func,
  viewText: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default CategoryCard;
