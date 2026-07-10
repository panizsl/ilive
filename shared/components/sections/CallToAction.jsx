"use client";

import { useId } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/shared/components/elements/Button";
import { cn } from "@/shared/utils/cn";

export default function CallToAction({
  tagline,
  title,
  buttonText,
  buttonIcon = "",
  onButtonClick,
  backgroundImage,
  imageAlt = "",
  className,
}) {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "relative w-full h-130 bg-teritary-1 overflow-hidden",
        className,
      )}
    >
      {/* Background Image - Decorative */}
      <figure className="absolute inset-0 m-0" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
        />
      </figure>

      {/* Overlay - Decorative */}
      <div
        className="overlay-dark-fade"
        aria-hidden="true"
        role="presentation"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 desktop:px-20 z-10">
        {/* Text Content */}
        <motion.header
          className="flex flex-col items-center text-center mb-10 desktop:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="type-h5-light text-white mb-2 desktop:mb-3" dir="auto">
            {tagline}
          </p>
          <h2
            id={titleId}
            className="type-h2 text-white max-w-76 desktop:max-w-200"
            dir="auto"
          >
            {title}
          </h2>
        </motion.header>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={onButtonClick}
            color="green"
            variant="outlined-filled"
            size="large"
            icon={buttonIcon}
            iconPosition="start"
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

CallToAction.propTypes = {
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  onButtonClick: PropTypes.func,
  backgroundImage: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
};

CallToAction.defaultProps = {
  buttonIcon: "",
  onButtonClick: () => {},
  imageAlt: "",
  className: "",
};
