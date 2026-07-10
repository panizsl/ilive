import PropTypes from "prop-types";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { ChevronLeft } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "../../utils/cn";

// Card Variants
const cardVariants = cva([
  "relative",
  "rounded-xl",
  "overflow-hidden",
  "size-full",
  "group",
  "cursor-pointer",
  "transition-all",
  "duration-300",
  "bg-teritary-3",
  "min-h-[280px]",
  "desktop:min-h-[274px]",
]);

// Main ServiceCard Component
export default function ServiceCard({ cards, className }) {
  return (
    <div className={cn("grid gap-6", className)} role="list">
      {cards.map((card, index) => {
        const IconComponent = card.icon ? LucideIcons[card.icon] : null;
        const defaultColor = card.iconColor || "text-yellow-1";

        return (
          <Link
            key={card.id || index}
            href={card.href || "#"}
            className={cardVariants()}
            aria-label={`View ${card.title} product details`}
            role="listitem"
          >
            <article className="flex flex-col items-start size-full">
              <div className="flex flex-col gap-4 desktop:gap-6 items-start p-4 desktop:p-6 relative size-full">
                {/* Header Section */}
                <header className="flex flex-col gap-3 items-start relative w-full">
                  {/* Title with Icon */}
                  <div className="flex gap-3 desktop:gap-4 items-center">
                    {IconComponent && (
                      <span
                        className="size-10 desktop:size-12 shrink-0"
                        aria-hidden="true"
                      >
                        <IconComponent
                          className={cn(
                            "size-full transition-colors duration-300",
                            !card.iconColor?.startsWith("#") && defaultColor,
                            "group-hover:text-white"
                          )}
                          style={
                            card.iconColor?.startsWith("#")
                              ? { color: card.iconColor }
                              : {}
                          }
                          strokeWidth={1.5}
                        />
                      </span>
                    )}
                    <h3
                      className="type-h5 text-white text-right leading-tight"
                      dir="auto"
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="type-body-1-5 desktop:type-body-2 text-white-2 text-right w-full line-clamp-3 desktop:line-clamp-none"
                    dir="auto"
                  >
                    {card.description}
                  </p>
                </header>

                {/* Spacer to push footer to bottom */}
                <div className="flex-1" aria-hidden="true" />

                {/* Divider */}
                <hr className="divider-horizontal w-full" aria-hidden="true" />

                {/* Footer Section */}
                <footer className="flex items-center justify-center w-full shrink-0">
                  <span className="flex gap-1 items-center">
                    <span className="type-h6 desktop:type-subtitle-1 text-primary-1 text-nowrap text-center transition-colors duration-300 group-hover:text-primary-2">
                      {card.buttonText || "مشاهده"}
                    </span>
                    <ChevronLeft
                      className="size-6 desktop:size-7 text-primary-1 transition-transform duration-300 group-hover:-translate-x-1"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </footer>

                {/* Glow Effect */}
                <div
                  className="absolute -left-40 size-56.25 top-35 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                >
                  <div className="glow-base glow-md glow-color-blue" />
                </div>
              </div>
            </article>

            {/* Border Overlay */}
            <div
              aria-hidden="true"
              className="absolute border border-white-7 inset-0 pointer-events-none rounded-xl transition-colors duration-300 group-hover:border-white-5"
            />
          </Link>
        );
      })}
    </div>
  );
}

ServiceCard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.string,
      iconColor: PropTypes.string,
      buttonText: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};
