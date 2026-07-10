import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { cn } from "@/shared/utils/cn";
import Button from "@/shared/components/elements/Button";

const heroVariants = cva(["relative", "w-full", "overflow-hidden"], {
  variants: {
    layout: {
      centered: "flex flex-col items-center justify-center",
      split: "flex flex-col desktop:flex-row items-center",
    },
  },
  defaultVariants: {
    layout: "split",
  },
});

const contentVariants = cva(
  ["flex", "flex-col", "gap-6", "desktop:gap-10", "relative", "w-full"],
  {
    variants: {
      layout: {
        centered:
          "items-center text-center max-w-[800px] px-5 desktop:px-15 py-10 desktop:py-20 shrink-0",
        split:
          "items-center text-center desktop:items-start desktop:text-right w-full desktop:flex-1",
      },
    },
    defaultVariants: {
      layout: "split",
    },
  }
);

function Hero({
  id,
  tagline,
  title,
  description,
  primaryButton = null,
  secondaryButton = null,
  image = null,
  backgroundColor = "bg-transparent",
  className,
}) {
  const sectionId = id || "hero-section";
  const titleId = `${sectionId}-title`;

  const hasButtons = primaryButton || secondaryButton;
  const hasImage = !!image;
  const layout = hasImage ? "split" : "centered";
  const imagePosition = image?.position || "right";

  const renderImageSection = () => {
    if (!image) return null;

    return (
      <figure className="relative w-full max-w-70 tablet:max-w-100 desktop:max-w-none aspect-4/3 tablet:aspect-16/10 desktop:flex-none desktop:w-163.25 desktop:h-124.5 desktop:aspect-auto mx-auto desktop:mx-0 shrink-0">
        <Image
          src={image.src}
          alt={image.alt || "Hero section illustration"}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 280px, (max-width: 1200px) 400px, 653px"
          priority
        />
      </figure>
    );
  };

  const renderContentSection = () => (
    <div className={cn(contentVariants({ layout }))}>
      <header
        className={cn(
          "flex flex-col gap-6 w-full",
          layout === "centered"
            ? "items-center"
            : "items-center desktop:items-start"
        )}
      >
        <hgroup className="flex flex-col gap-3 w-full">
          <p className="type-body-1 text-primary-2" role="doc-subtitle">
            {tagline}
          </p>
          <h1 id={titleId} className="type-h2 text-white">
            {title}
          </h1>
        </hgroup>
        <p className="type-body-2 text-white-1">{description}</p>
      </header>

      {hasButtons && (
        <div
          className={cn(
            "flex gap-3 w-full desktop:w-auto",
            layout === "centered"
              ? "justify-center"
              : "justify-center desktop:justify-start"
          )}
          role="group"
          aria-label="Call to action buttons"
        >
          {secondaryButton && (
            <Button
              variant="outlined"
              color="white"
              size="medium"
              aria-label={secondaryButton.text}
            >
              {secondaryButton.text}
            </Button>
          )}
          {primaryButton && (
            <Button
              variant="outlined-filled"
              color="green"
              size="medium"
              aria-label={primaryButton.text}
            >
              {primaryButton.text}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  if (!hasImage) {
    return (
      <section
        id={sectionId}
        className={cn(
          heroVariants({ layout }),
          backgroundColor,
          "min-h-fit py-10 desktop:py-15",
          className
        )}
        aria-labelledby={titleId}
      >
        {renderContentSection()}
      </section>
    );
  }

  return (
    <section
      id={sectionId}
      className={cn(
        heroVariants({ layout }),
        backgroundColor,
        "min-h-fit",
        className
      )}
      aria-labelledby={titleId}
    >
      <div
        className={cn(
          "flex items-center justify-center desktop:justify-between w-full gap-4 tablet:gap-6 desktop:gap-10 max-w-360 mx-auto px-4 py-6 tablet:px-8 tablet:py-8 desktop:p-15",
          imagePosition === "left"
            ? "flex-col desktop:flex-row"
            : "flex-col desktop:flex-row-reverse"
        )}
      >
        {renderContentSection()}
        {renderImageSection()}
      </div>
    </section>
  );
}

Hero.propTypes = {
  id: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    position: PropTypes.oneOf(["left", "right"]),
  }),
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

export default Hero;
