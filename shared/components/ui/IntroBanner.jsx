import PropTypes from "prop-types";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import Button from "@/shared/components/elements/Button";

/**
 * Glow effect variants using CVA
 */
const glowVariants = cva("glow-base", {
  variants: {
    color: {
      green: "glow-color-green",
      blue: "glow-color-blue",
    },
    size: {
      xs: "glow-xs",
      sm: "glow-sm",
      md: "glow-md",
      lg: "glow-lg",
    },
  },
  defaultVariants: {
    color: "green",
    size: "sm",
  },
});

function IntroBanner({
  variant = "primary",
  category = "راهکار آیلایو برای صنعت بازی و گیمینگ",
  title = "هیجان را برای مخاطبان خود به سطح دیگه‌ای ببرید",
  description = "آیلایو طوری طراحی شده که به‌راحتی با نرم‌افزارها و سرویس‌های مختلف شما همگام شود. از OBS، vMix و Zoom گرفته تا پلتفرم‌های پخش مانند YouTube، LinkedIn و Aparat — همه تنها با چند کلیک به آیلایو متصل می‌شوند.",
  primaryButtonText = "ساختن اکانت رایگان",
  secondaryButtonText = "دریافت مشاوره",
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage = "/assets/images/banner.png",
  className,
}) {
  if (variant === "secondary") {
    return (
      <SecondaryVariant
        category={category}
        title={title}
        description={description}
        primaryButtonText={primaryButtonText}
        secondaryButtonText={secondaryButtonText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
        backgroundImage={backgroundImage}
        className={className}
      />
    );
  }

  return (
    <PrimaryVariant
      category={category}
      title={title}
      description={description}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      onPrimaryClick={onPrimaryClick}
      onSecondaryClick={onSecondaryClick}
      backgroundImage={backgroundImage}
      className={className}
    />
  );
}

/**
 * Primary Variant - Original SolutionHero design
 */
function PrimaryVariant({
  category,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  className,
}) {
  return (
    <section
      className={cn(
        "relative w-full rounded-xl desktop:rounded-2xl bg-teritary-1 overflow-hidden",
        className
      )}
      aria-labelledby="intro-banner-title"
    >
      <div className="flex flex-col-reverse desktop:flex-row items-start justify-between w-full">
        {/* Content Section */}
        <article className="relative w-full desktop:flex-1 desktop:h-full">
          <div className="flex flex-col items-end justify-center h-full">
            <div className="flex flex-col gap-10 desktop:gap-15 items-end justify-center px-5 py-6 desktop:px-15 desktop:py-20 w-full">
              {/* Text Content */}
              <header className="flex flex-col gap-6 items-end text-right w-full">
                {/* Category & Title */}
                <div className="flex flex-col gap-3 items-start w-full">
                  <span className="type-body-2 text-primary-2 w-full">
                    {category}
                  </span>
                  <h1
                    id="intro-banner-title"
                    className="type-h3 desktop:type-h2 text-white w-full"
                  >
                    {title}
                  </h1>
                </div>

                {/* Description */}
                <p className="type-body-2 text-white-1 w-full">{description}</p>
              </header>

              {/* Action Buttons */}
              <nav
                className="flex gap-3 items-center justify-center desktop:justify-start w-full"
                aria-label="اقدامات اصلی"
              >
                <Button
                  variant="outlined"
                  color="white"
                  size="medium"
                  onClick={onSecondaryClick}
                >
                  {secondaryButtonText}
                </Button>
                <Button
                  variant="outlined-filled"
                  color="green"
                  size="medium"
                  onClick={onPrimaryClick}
                  className="flex-1 desktop:flex-none"
                >
                  {primaryButtonText}
                </Button>
              </nav>

              {/* Glow Effect - Desktop only */}
              <div
                className={cn(
                  glowVariants({ color: "green", size: "lg" }),
                  "hidden desktop:block absolute -top-20 -right-32 opacity-40"
                )}
                aria-hidden="true"
              />
            </div>
          </div>
        </article>

        {/* Image Section */}
        <figure className="relative shrink-0 w-full desktop:w-155 h-62 desktop:h-168">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-center"
          />

          {/* Gradient Overlay - Desktop */}
          <div
            className="hidden desktop:block absolute inset-y-0 right-0 w-72.5"
            style={{
              background:
                "linear-gradient(to left, var(--color-teritary-1) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Gradient Overlay - Mobile */}
          <div
            className="desktop:hidden absolute inset-x-0 bottom-0 h-41"
            style={{
              background:
                "linear-gradient(to top, var(--color-teritary-1) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </figure>
      </div>

      {/* Border Overlay */}
      <div
        className="absolute inset-0 border border-white-7 rounded-xl desktop:rounded-2xl pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}

/**
 * Secondary Variant - Event Hero style with full-width background
 */
function SecondaryVariant({
  category,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage,
  className,
}) {
  return (
    <>
      {/* Desktop Layout */}
      <section
        className={cn(
          "hidden desktop:block relative w-full min-h-140 bg-teritary-1 rounded-2xl overflow-hidden",
          className
        )}
        aria-labelledby="intro-banner-secondary-title-desktop"
      >
        <div className="flex flex-col items-start justify-center size-full">
          <div className="flex flex-col gap-15 items-start justify-center px-15 py-20 relative size-full">
            {/* Background Image - Left Side */}
            <figure
              className="absolute left-0 top-0 h-140 w-319.25"
              aria-hidden="true"
            >
              <Image
                src={backgroundImage}
                alt=""
                fill
                priority
                className="object-cover object-center"
              />
            </figure>

            {/* Gradient Overlay */}
            <div
              className="absolute left-167.25 top-0 h-140 w-152"
              style={{
                background:
                  "linear-gradient(to left, var(--color-teritary-1) 0%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* Content - Right Side */}
            <header className="flex flex-col gap-6 items-start text-right w-137 relative z-10">
              <div className="flex flex-col gap-3 items-start w-full">
                <span className="type-subtitle-1 text-primary-2 w-full">
                  {category}
                </span>
                <h1
                  id="intro-banner-secondary-title-desktop"
                  className="type-h2 text-white w-full"
                >
                  {title}
                </h1>
              </div>
              <p className="type-body-2 text-white-1 w-full">{description}</p>
            </header>

            {/* Action Buttons */}
            <nav
              className="flex gap-3 items-start relative z-10"
              aria-label="اقدامات اصلی"
            >
              <Button
                variant="outlined-filled"
                color="green"
                size="medium"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </Button>
              <Button
                variant="outlined"
                color="white"
                size="medium"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            </nav>
          </div>
        </div>

        {/* Border Overlay */}
        <div
          className="absolute inset-0 border border-white-7 rounded-2xl pointer-events-none"
          aria-hidden="true"
        />
      </section>

      {/* Mobile Layout */}
      <section
        className={cn(
          "desktop:hidden relative w-full rounded-xl bg-teritary-1 border border-white-7 overflow-hidden",
          className
        )}
        aria-labelledby="intro-banner-secondary-title-mobile"
      >
        <div className="flex flex-col items-start size-full">
          {/* Image Section */}
          <figure className="relative h-62 w-full" aria-hidden="true">
            <Image
              src={backgroundImage}
              alt=""
              fill
              priority
              className="object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-x-0 top-21 h-41"
              style={{
                background:
                  "linear-gradient(to top, var(--color-teritary-1) 0%, transparent 100%)",
              }}
            />
          </figure>

          {/* Content Section */}
          <article className="w-full">
            <div className="flex flex-col items-start justify-center size-full">
              <div className="flex flex-col gap-10 items-start justify-center px-5 py-6 w-full">
                {/* Text Content */}
                <header className="flex flex-col gap-6 items-start text-right w-full">
                  <div className="flex flex-col gap-3 items-start w-full">
                    <span className="type-body-2 text-primary-2 w-full">
                      {category}
                    </span>
                    <h1
                      id="intro-banner-secondary-title-mobile"
                      className="type-h3 text-white w-full"
                    >
                      {title}
                    </h1>
                  </div>
                  <p className="type-body-2 text-white-1 w-full">
                    {description}
                  </p>
                </header>

                {/* Action Buttons */}
                <nav
                  className="flex gap-3 items-start justify-center w-full"
                  aria-label="اقدامات اصلی"
                >
                  <Button
                    variant="outlined-filled"
                    color="green"
                    size="small"
                    onClick={onPrimaryClick}
                    className="flex-1"
                  >
                    {primaryButtonText}
                  </Button>
                  <Button
                    variant="outlined"
                    color="white"
                    size="small"
                    onClick={onSecondaryClick}
                    className="flex-1"
                  >
                    {secondaryButtonText}
                  </Button>
                </nav>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

IntroBanner.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  category: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};

export default IntroBanner;
