"use client";

import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { Check, Flame } from "lucide-react";
import Button from "@/shared/components/elements/Button";
import { cn } from "@/shared/utils/cn";
import { toPersianNumber } from "@/shared/utils/toPersianNumber";

/**
 * Card Variants
 */
const cardVariants = cva("relative h-full overflow-hidden", {
  variants: {
    variant: {
      full: "rounded-xl bg-teritary-2 border border-white-6 w-full",
      simple:
        "border-b border-r border-white-6 last:border-l last:border-l-white-6 bg-teritary-2 flex-1",
    },
  },
  defaultVariants: {
    variant: "full",
  },
});

/**
 * GlowEffect Component - Decorative
 */
function GlowEffect() {
  return (
    <div
      className="absolute -top-20 -right-20 w-60 h-60 bg-primary-2 rounded-full blur-[100px] opacity-20 pointer-events-none"
      aria-hidden="true"
      role="presentation"
    />
  );
}

function SimplePricingCard({
  planName,
  price,
  priceUnit = "/ ماهانه",
  buttonText,
  onButtonClick,
  isHighlighted = false,
  className,
}) {
  return (
    <article
      className={cn(cardVariants({ variant: "simple" }), className)}
      aria-label={`Pricing plan: ${planName}`}
    >
      <div className="flex flex-col gap-8 p-6 w-full">
        {/* Plan Name and Price */}
        <header className="flex flex-col gap-4 items-start w-full">
          {/* Plan Name */}
          <h3
            className={cn(
              "type-captions text-right w-full",
              isHighlighted ? "text-primary-2" : "text-white-2"
            )}
          >
            {planName}
          </h3>

          {/* Price */}
          <p className="flex gap-2 items-end justify-start w-full">
            <span className="type-subtitle-1 text-white">
              {toPersianNumber(price)} تومان
            </span>
            <span className="type-captions-2 text-white-3 pb-1">
              / {priceUnit}
            </span>
          </p>
        </header>

        {/* Button */}
        <Button
          onClick={onButtonClick}
          color="green"
          size="medium"
          variant={isHighlighted ? "outlined-filled" : "initial"}
          className="w-full"
        >
          {buttonText}
        </Button>
      </div>
    </article>
  );
}

SimplePricingCard.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceUnit: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  isHighlighted: PropTypes.bool,
  className: PropTypes.string,
};

SimplePricingCard.defaultProps = {
  priceUnit: "/ ماهانه",
  onButtonClick: () => {},
  isHighlighted: false,
  className: "",
};

function PricingCard({
  planName,
  description,
  price,
  priceUnit = "/ ماهانه",
  buttonText,
  onButtonClick,
  features,
  featuresTitle = "",
  isRecommended = false,
  recommendedBadgeText = "پیشنهادی",
  className,
}) {
  return (
    <article
      className={cn(
        cardVariants({ variant: "full" }),
        "flex flex-col",
        className
      )}
      aria-label={`Pricing plan: ${planName}${
        isRecommended ? " (Recommended)" : ""
      }`}
    >
      <div className="flex flex-col flex-1 p-6 overflow-hidden">
        {/* Header Section */}
        <header className="flex flex-col w-full">
          {/* Plan Name and Description */}
          <hgroup className="flex flex-col gap-2 text-right w-full h-20">
            {isRecommended ? (
              <div className="flex gap-2 items-center justify-start w-full">
                <h3 className="type-subtitle-1 text-white">{planName}</h3>
                <mark className="flex gap-1 items-center px-3 py-1 rounded-lg bg-primary-1/20">
                  <Flame
                    className="size-4 text-primary-1"
                    aria-hidden="true"
                    role="presentation"
                  />
                  <span className="type-captions text-primary-1">
                    {recommendedBadgeText}
                  </span>
                </mark>
              </div>
            ) : (
              <h3 className="type-subtitle-1 text-white">{planName}</h3>
            )}
            <p className="type-body-2 text-white-2 line-clamp-2">
              {description}
            </p>
          </hgroup>

          {/* Price */}
          <p className="flex gap-2 items-end justify-start h-11 mt-8">
            <data value={price} className="type-h5 text-white">
              {toPersianNumber(price)} تومان
            </data>
            <span className="type-captions text-white-3 pb-1">
              / {priceUnit}
            </span>
          </p>

          {/* Button */}
          <div className="mt-6">
            <Button
              onClick={onButtonClick}
              color="green"
              size="large"
              variant={isRecommended ? "outlined-filled" : "initial"}
              className="w-full"
            >
              {buttonText}
            </Button>
          </div>
        </header>

        {/* Features Section */}
        <section
          className="flex flex-col gap-4 w-full mt-10"
          aria-label="Plan features"
        >
          {featuresTitle && (
            <h4 className="type-captions text-white-2 text-right">
              {featuresTitle}
            </h4>
          )}
          <ul
            className="flex flex-col gap-2 w-full list-none p-0 m-0"
            role="list"
            aria-label="Features list"
          >
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-3 items-center justify-start w-full"
              >
                <Check
                  className="size-5 text-white shrink-0"
                  aria-hidden="true"
                  role="presentation"
                />
                <span className="type-body-2 text-white text-right">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Glow Effect - Decorative */}
        {isRecommended && <GlowEffect />}
      </div>
    </article>
  );
}

PricingCard.propTypes = {
  planName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceUnit: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  featuresTitle: PropTypes.string,
  isRecommended: PropTypes.bool,
  recommendedBadgeText: PropTypes.string,
  className: PropTypes.string,
};

PricingCard.defaultProps = {
  priceUnit: "/ ماهانه",
  onButtonClick: () => {},
  featuresTitle: "",
  isRecommended: false,
  recommendedBadgeText: "پیشنهادی",
  className: "",
};

export default PricingCard;
export { SimplePricingCard };
