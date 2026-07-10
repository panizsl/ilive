import Image from "next/image";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";

const cardVariants = cva(
  "overflow-hidden flex items-center border transition-all duration-300 cursor-pointer w-full",
  {
    variants: {
      variant: {
        default: "bg-teritary-2 border-white-7 rounded-[20px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const titleVariants = cva(
  "type-h4 text-right text-[#FFFFFF] w-full line-clamp-1",
  {
    variants: {
      size: {
        desktop: "",
      },
    },
    defaultVariants: {
      size: "desktop",
    },
  }
);

const descriptionVariants = cva(
  "type-body-2 text-right text-white-1 line-clamp-4",
  {
    variants: {
      size: {
        desktop: "",
      },
    },
    defaultVariants: {
      size: "desktop",
    },
  }
);

const actionVariants = cva("type-subtitle-1 text-right text-primary-2", {
  variants: {},
  defaultVariants: {
    size: "default",
  },
});

function EventCard({
  title,
  description,
  viewText,
  imageSrc,
  className,
  variant,
}) {
  return (
    <article
      className={cn(
        "relative group flex w-full max-w-82  md:max-w-157 md:h-79.5 justify-between",
        cardVariants({ variant }),
        className
      )}
    >
      {/* Glow Effect */}
      <div
        className="absolute -right-10 size-70 top-35 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      >
        <div className="glow-base glow-md glow-color-blue" />
      </div>
      {/* text*/}
      <div className="z-20 flex flex-col justify-between w-full h-full md:w-100 p-6 md:p-10 shrink-0">
        <div className="flex flex-col gap-6">
          <h4
            className={cn(
              titleVariants(),
              " transition-colors duration-300 group-hover:text-primary-2"
            )}
          >
            {title}
          </h4>
          <p className={cn(descriptionVariants())}>{description}</p>
        </div>

        {/* text & icon */}
        <div className="flex items-center justify-start gap-1 cursor-pointer group mt-5">
          <span className={cn(actionVariants())}>{viewText}</span>
          <ChevronLeft
            size={20}
            className="text-primary-2 transition-transform group-hover:-translate-x-1"
            strokeWidth={2.5}
          />
        </div>
      </div>
      {/* Image*/}
      <div className="hidden md:block relative flex-1 h-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
        />
        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-teritary-2/20 to-teritary-2 z-10" />
      </div>
    </article>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  viewText: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};

EventCard.defaultProps = {
  viewText: "مشاهده",
  variant: "default",
};

export default EventCard;
