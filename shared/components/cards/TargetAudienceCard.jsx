import Image from "next/image";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";

/* CVA - Container */
const cardVariants = cva(
  "relative overflow-hidden flex flex-col transition-all duration-300 cursor-pointer",
  {
    variants: {
      type: {
        withIcon: "",
        simple: "",
      },
    },
    defaultVariants: {
      type: "withIcon",
    },
  }
);

/* CVA - Title */
const titleVariants = cva(
  "flex items-center gap-3 type-subtitle-1 w-full text-right justify-start md:w-[352px]",
  {
    variants: {
      type: {
        withIcon: "text-primary-1 md:text-center md:justify-center",
        simple: "text-[#FFFFFF] md:text-right md:justify-start",
      },
    },
    defaultVariants: {
      type: "withIcon",
    },
  }
);

/* CVA - Description */
const descriptionVariants = cva(
  "h-[72px] text-white-1 type-body-2 line-clamp-3 w-full text-right md:w-[352px]",
  {
    variants: {
      type: {
        withIcon: "md:text-center",
        simple: "md:text-right",
      },
    },
    defaultVariants: {
      type: "withIcon",
    },
  }
);

function TargetAudienceCard({
  imageSrc,
  title,
  description,
  type,
  showContent = false,
}) {
  return (
    <article
      className={cn(
        "relative bg-teritary-2 rounded-xl opacity-100",
        "w-82 h-100.5 md:w-100 md:h-125",
        cardVariants({ type })
      )}
      aria-label={`Target audience: ${title}`}
    >
      {/* Image Section */}
      <figure className="relative w-full h-full md:h-76.5">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 768px) 328px, 400px"
          aria-hidden="true"
        />

        {/* Gradient Overlay - Decorative */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 md:h-45 translate-y-2 md:translate-y-0 overlay-gradient-tertiary-bottom z-10"
          aria-hidden="true"
          role="presentation"
        />
      </figure>

      {/* Card Content - visible when parent has .is-featured */}
      <div
        className={cn(
          "flex flex-col px-6 py-10 gap-3 z-30 transition-all duration-500 ease-in-out",
          "opacity-0 translate-y-4 invisible pointer-events-none",
          "group-[.is-featured]:opacity-100 group-[.is-featured]:translate-y-0 group-[.is-featured]:visible",
          showContent && "opacity-100 translate-y-0 visible"
        )}
      >
        {/* Title with optional Icon */}
        <header className={cn(titleVariants({ type }))}>
          <h3 className="type-subtitle-1">{title}</h3>
          {type === "withIcon" && (
            <ChevronLeft
              size={20}
              className="shrink-0"
              aria-hidden="true"
              role="presentation"
            />
          )}
        </header>

        {/* Description */}
        <p className={cn(descriptionVariants({ type }))}>{description}</p>
      </div>
    </article>
  );
}

TargetAudienceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["withIcon", "simple"]),
  showContent: PropTypes.bool,
};

TargetAudienceCard.defaultProps = {
  type: "withIcon",
  showContent: false,
};

export default TargetAudienceCard;
