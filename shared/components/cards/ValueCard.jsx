import PropTypes from "prop-types";
import { HelpCircle } from "lucide-react";
import { cn } from "@/shared/utils/cn";

export function ValueCard({ title, description, icon, className }) {
  return (
    <article
      className={cn("relative rounded-xl size-full bg-teritary-2", className)}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="flex flex-col gap-5 desktop:gap-3 items-center justify-center overflow-clip px-6.5 py-10 desktop:py-6.25 relative size-full">
          {/* icon */}
          <figure className="relative shrink-0 size-20 text-secondary-2 m-0">
            {icon || <HelpCircle className="size-full" aria-hidden="true" />}
          </figure>

          {/* content */}
          <div className="flex flex-col gap-3 items-center relative shrink-0 text-center w-full">
            <h3
              className="type-subtitle-2 desktop:type-subtitle-1-5 text-white w-full"
              dir="auto"
            >
              {title}
            </h3>

            <p
              className="type-body-2 desktop:type-captions-2 text-white-1 w-full"
              dir="auto"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default ValueCard;
