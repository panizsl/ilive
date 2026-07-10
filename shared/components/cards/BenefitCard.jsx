import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const cardVariants = cva(
  "rounded-[12px] w-[328px] h-[328px] md:w-[298.25px] md:h-[372px] flex flex-col opacity-100",
  {
    variants: {
      type: {
        image: "bg-[#042128] w-[328px] h-[328px] md:w-[298px] md:h-[372px]",

        content:
          "p-[40px_26px] gap-[20px] md:p-[25px_26px] md:gap-3 justify-start",
      },
      color: {
        default: "bg-teritary-2",
        blue: "bg-teritary-4",
        lightblue: "bg-teritary-3",
        cyan: "bg-teritary-5",
      },
    },
    defaultVariants: {
      type: "content",
      color: "default",
    },
  },
);

function BenefitCard({
  type = "content",
  color = "default",
  title,
  description,
  logo,
  className,
  children,
}) {
  return (
    <div className={cn(cardVariants({ type, color }), className)}>
      {type === "image" ? (
        <div className="w-full h-full rounded-xl overflow-hidden">
          {children}
        </div>
      ) : (
        <>
          {logo && (
            <div className="md:p-5 flex items-center text-center justify-center">
              {logo}
            </div>
          )}

          <h3 className="type-subtitle-2 text-white text-center">{title}</h3>

          <p className="type-caption-2 text-white-1 text-center">
            {description}
          </p>
        </>
      )}
    </div>
  );
}

BenefitCard.propTypes = {
  type: PropTypes.oneOf(["image", "content"]),
  color: PropTypes.oneOf(["default", "blue", "green", "cyan"]),
  title: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BenefitCard;
