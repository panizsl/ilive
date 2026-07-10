import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import Button from "@/shared/components/elements/Button";

const sectionVariants = cva(["relative", "w-full"], {
  variants: {
    layout: {
      default: "",
    },
  },
  defaultVariants: {
    layout: "default",
  },
});

const contentVariants = cva(
  [
    "flex",
    "flex-col",
    "gap-6",
    "tablet:gap-8",
    "desktop:gap-15",
    "py-6",
    "tablet:py-8",
    "desktop:py-20",
    "relative",
    "w-full",
    "min-w-0",
    "items-center",
    "desktop:items-start",
    "text-center",
    "desktop:text-right",
    "justify-center",
    "desktop:flex-1",
  ],
  {
    variants: {
      hasFeatures: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      hasFeatures: false,
    },
  }
);

function Feature({
  id,
  tagline,
  title,
  description,
  button = null,
  features = [],
  media,
  backgroundColor = "bg-transparent",
  className,
}) {
  const sectionId = id || "feature-section";
  const titleId = `${sectionId}-title`;

  const hasFeatures = features && features.length > 0;
  const mediaPosition = media?.position || "right";

  const renderCheckIcon = () => (
    <span
      className="inline-flex items-center justify-center size-8 shrink-0"
      aria-hidden="true"
    >
      <Check className="size-6 text-primary-1" strokeWidth={3} />
    </span>
  );

  const renderGlowEffect = () => (
    <div
      className="hidden desktop:block glow-base glow-md glow-color-green right-0 top-0 opacity-60"
      aria-hidden="true"
    />
  );

  const renderMediaSection = () => {
    if (!media) return null;

    return (
      <figure className="h-57.5 tablet:h-80 desktop:h-160 overflow-hidden relative rounded-xl w-full min-w-0 desktop:shrink-0 desktop:w-202.5">
        {media.type === "video" ? (
          <video
            className="absolute inset-0 object-cover size-full rounded-xl"
            src={media.src}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            loading="lazy"
            aria-label={media.alt || "Feature demonstration video"}
          />
        ) : (
          <Image
            src={media.src}
            alt={media.alt || "Feature illustration"}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 1200px) 100vw, 810px"
            loading="lazy"
          />
        )}

        {/* Desktop horizontal fade overlay */}
        <div
          className={cn(
            "w-65 hidden desktop:block",
            mediaPosition === "left"
              ? "overlay-fade-left"
              : "overlay-fade-right"
          )}
          aria-hidden="true"
        />

        {/* Mobile bottom fade overlay */}
        <div
          className="overlay-fade-bottom h-26.25 desktop:hidden"
          aria-hidden="true"
        />
      </figure>
    );
  };

  const renderFeatureList = () => {
    if (!hasFeatures) return null;

    return (
      <ul
        className="flex flex-col gap-3 items-center desktop:items-start w-full desktop:w-77"
        role="list"
        aria-label="Feature highlights"
      >
        {features.map((feature, index) => (
          <li
            key={feature.id || index}
            className="flex gap-4 items-center justify-center desktop:justify-start w-full"
            role="listitem"
          >
            {feature.icon || renderCheckIcon()}
            <span className="type-subtitle-1 text-white text-nowrap">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  const renderContentSection = () => (
    <div className={cn(contentVariants({ hasFeatures }))}>
      <header className="flex flex-col gap-6 items-center desktop:items-start w-full">
        <hgroup className="flex flex-col gap-3 w-full">
          <p className="type-body-1 text-primary-2" role="doc-subtitle">
            {tagline}
          </p>
          <h2 id={titleId} className="type-h2 text-white">
            {title}
          </h2>
        </hgroup>

        {description && (
          <p className="type-body-2 text-white-1">{description}</p>
        )}

        {renderFeatureList()}
      </header>

      {button && (
        <Button
          variant="outlined-filled"
          color="green"
          size="medium"
          aria-label={button.text}
        >
          {button.text}
        </Button>
      )}

      {renderGlowEffect()}
    </div>
  );

  return (
    <section
      id={sectionId}
      className={cn(sectionVariants(), backgroundColor, className)}
      aria-labelledby={titleId}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full gap-4 tablet:gap-6 desktop:gap-10 max-w-360 mx-auto px-4 tablet:px-8 desktop:px-15",
          "flex-col py-6 tablet:py-8 desktop:py-20",
          mediaPosition === "right"
            ? "desktop:flex-row"
            : "desktop:flex-row-reverse"
        )}
      >
        {renderMediaSection()}
        {renderContentSection()}
      </div>
    </section>
  );
}

Feature.propTypes = {
  id: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ),
  media: PropTypes.shape({
    type: PropTypes.oneOf(["image", "video"]).isRequired,
    src: PropTypes.string.isRequired,
    overlayImage: PropTypes.string,
    alt: PropTypes.string,
    position: PropTypes.oneOf(["left", "right"]),
  }).isRequired,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

export default Feature;
