import PropTypes from "prop-types";
import * as LucideIcons from "lucide-react";
import { cn } from "@/shared/utils/cn";

export function FeatureCard({ icon, title, description, className }) {
  const IconComponent = LucideIcons[icon];

  return (
    <article
      className={cn(
        "relative size-full rounded-xl bg-teritary-2",
        "border border-white-7",
        className,
      )}
      aria-label={`Feature: ${title}`}
    >
      <div className="flex flex-col items-center justify-center gap-6 px-8 py-6 desktop:py-11">
        {/* Icon - Decorative */}
        {IconComponent && (
          <span className="shrink-0" aria-hidden="true" role="presentation">
            <IconComponent className="size-12 text-primary-1" />
          </span>
        )}

        {/* Card Content */}
        <div className="flex flex-col items-center gap-2 text-center text-white-1">
          <h3 className="type-h6" dir="auto">
            {title}
          </h3>
          <p className="type-body-2" dir="auto">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FeatureCard.defaultProps = {
  className: "",
};

export default FeatureCard;
