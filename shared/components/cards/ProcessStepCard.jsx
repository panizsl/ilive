import PropTypes from "prop-types";
import { CircleCheckBig } from "lucide-react";
import { cn } from "@/shared/utils/cn";

export function ProcessStepCard({ title, description, icon, className }) {
  return (
    <article className={cn("relative size-full", className)}>
      <div className="flex flex-col items-start size-full">
        <div className="flex flex-col gap-3 desktop:gap-4 items-start px-2 desktop:p-0 relative size-full">
          {/* icon */}
          <figure className="relative shrink-0 size-15 text-primary-1 m-0">
            {icon || (
              <CircleCheckBig className="size-full" aria-hidden="true" />
            )}
          </figure>

          {/* content */}
          <div className="flex flex-col gap-0 desktop:gap-1 items-start relative shrink-0 text-right w-full">
            <h3 className="type-subtitle-1 text-white w-full" dir="auto">
              {title}
            </h3>

            {/* description - show in desktop*/}
            {description && (
              <p
                className="hidden desktop:block type-body-1-5 text-white-2 w-full"
                dir="auto"
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

ProcessStepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default ProcessStepCard;
