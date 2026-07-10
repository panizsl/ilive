"use client";

import { useId } from "react";
import PropTypes from "prop-types";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";

export default function ContactCTA({
  title = "پلان مورد نیاز خود را پیدا نکردید ؟",
  description = "در صورت نیاز به راهنمایی بیشتر یا حتی درخواست فیچر‌های اختصاصی می‌توانید با کارشناسان آیلایو ارتباط برقرار کنید.",
  buttonText = "ارتباط با آیلایو",
  onButtonClick,
  className,
}) {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className={cn("relative w-full bg-transparent", className)}
      dir="rtl"
    >
      {/* Desktop Layout */}
      <div className="hidden desktop:flex relative px-20 xl:px-47.5 py-20">
        {/* Glow Effect - Decorative */}
        <div
          className="glow-base glow-sm glow-color-blue absolute left-[calc(100%-319px)] top-20"
          aria-hidden="true"
          role="presentation"
        />

        {/* Content */}
        <div className="flex items-center gap-15 xl:gap-20 w-full">
          {/* Title */}
          <h2 id={titleId} className="flex-1 type-h2 text-white-1 text-right">
            {title}
          </h2>

          {/* Description & Button */}
          <div className="flex flex-col items-start gap-6 max-w-150.25">
            <p className="type-body-1 text-white-1 text-right">{description}</p>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onButtonClick}
              aria-label={buttonText}
              className={cn(
                "group relative z-10",
                "flex items-center gap-1",
                "cursor-pointer",
                "transition-all duration-300",
                "hover:gap-2",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-2 focus-visible:ring-offset-2 focus-visible:ring-offset-teritary-1"
              )}
            >
              <span
                className={cn(
                  "type-subtitle-1 font-semibold",
                  "text-secondary-2 text-nowrap",
                  "transition-colors duration-300",
                  "group-hover:text-secondary-3"
                )}
              >
                {buttonText}
              </span>
              <span
                className={cn(
                  "flex items-center justify-center",
                  "text-secondary-2",
                  "transition-transform duration-300"
                )}
                aria-hidden="true"
              >
                <ChevronLeft className="size-7" strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <article className="flex desktop:hidden flex-col items-center relative px-10 py-20">
        {/* Glow Effect - Decorative */}
        <div
          className="glow-base glow-xs glow-color-blue absolute left-1/3 top-1/2 -translate-y-1/2"
          aria-hidden="true"
          role="presentation"
        />

        {/* Content */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Text Content */}
          <header className="flex flex-col gap-5 text-center text-white-1 z-10">
            <h2 className="type-h4">{title}</h2>
            <p className="type-body-2 leading-relaxed">{description}</p>
          </header>

          {/* CTA Button */}
          <button
            type="button"
            onClick={onButtonClick}
            aria-label={buttonText}
            className={cn(
              "group relative z-10",
              "flex items-center gap-1",
              "cursor-pointer",
              "transition-all duration-300",
              "hover:gap-2",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-2 focus-visible:ring-offset-2 focus-visible:ring-offset-teritary-1"
            )}
          >
            <span
              className={cn(
                "type-subtitle-1 font-semibold",
                "text-secondary-2 text-nowrap",
                "transition-colors duration-300",
                "group-hover:text-secondary-3"
              )}
            >
              {buttonText}
            </span>
            <span
              className={cn(
                "flex items-center justify-center",
                "text-secondary-2",
                "transition-transform duration-300"
              )}
              aria-hidden="true"
            >
              <ChevronLeft className="size-6" strokeWidth={2} />
            </span>
          </button>
        </div>
      </article>
    </section>
  );
}

ContactCTA.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  className: PropTypes.string,
};

ContactCTA.defaultProps = {
  title: "پلان مورد نیاز خود را پیدا نکردید ؟",
  description:
    "در صورت نیاز به راهنمایی بیشتر یا حتی درخواست فیچر‌های اختصاصی می‌توانید با کارشناسان آیلایو ارتباط برقرار کنید.",
  buttonText: "ارتباط با آیلایو",
  onButtonClick: () => {},
  className: "",
};
