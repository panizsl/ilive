import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import Button from "@/shared/components/elements/Button";

const feedbackCardVariants = cva(
  [
    "flex flex-col p-6 rounded-xl border transition-all duration-300 ease-in-out relative overflow-hidden",
  ],
  {
    variants: {
      mode: {
        feedback: [
          "justify-between cursor-pointer bg-teritary-3 border-white-6",
          "w-full max-w-[300px] h-auto min-h-[392px]",
          "desktop:w-full desktop:max-w-[620px] desktop:h-[304px] desktop:min-h-[304px]",
        ],
        registration: [
          "items-center justify-center border-white-6 bg-teritary-1",
          "max-w-[328px] max-h-[180px] min-h-[180px]",
          "desktop:w-[620px] desktop:max-w-[620px] desktop:h-[304px] desktop:min-h-[304px]",
        ],
      },
    },
    defaultVariants: {
      mode: "feedback",
    },
  }
);

const TestimonialsCard = ({
  name,
  role,
  comment,
  avatarSrc,
  className,
  title,
  buttonText,
  isRegistration = false,
}) => {
  const mode = isRegistration ? "registration" : "feedback";

  if (isRegistration) {
    return (
      <aside
        className={cn(feedbackCardVariants({ mode }), className)}
        aria-label="Join us call to action"
      >
        {/* Glow Effect - Top */}
        <div
          className="glow-base glow-color-green glow-md -top-16 -right-16 opacity-25"
          aria-hidden="true"
        />

        {/* Glow Effect - Bottom */}
        <div
          className="glow-base glow-color-green glow-md -bottom-16 -left-16 opacity-25"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <p className="type-h3 text-white-1 text-center">{title}</p>

          <Button
            variant="outlined-filled"
            size="large"
            color="green"
            aria-label={buttonText}
          >
            {buttonText}
          </Button>
        </div>
      </aside>
    );
  }

  return (
    <article
      className={cn(feedbackCardVariants({ mode }), className)}
      aria-label={`Testimonial from ${name}`}
    >
      {/* Quote Content */}
      <figure className="flex flex-col grow relative z-10">
        <Image
          src="/assets/images/openingquote.svg"
          alt=""
          width={28}
          height={28}
          className="w-7 h-7"
          aria-hidden="true"
        />

        <blockquote className="text-white-1 type-body-1 grow line-clamp-4 desktop:line-clamp-none">
          <p>{comment}</p>
        </blockquote>

        <Image
          src="/assets/images/closingquote.svg"
          alt=""
          width={28}
          height={28}
          className="w-7 h-7 self-end mt-2"
          aria-hidden="true"
        />
      </figure>

      {/* Author Info */}
      <footer className="flex items-center gap-4 h-15 w-full mt-4 relative z-10">
        <figure className="relative w-15 h-15 shrink-0">
          <Image
            src={avatarSrc}
            alt={`${name} profile photo`}
            fill
            sizes="60px"
            className="rounded-lg object-cover"
          />
        </figure>
        <cite className="flex flex-col justify-center h-full gap-1 not-italic">
          <span className="text-white type-subtitle-1 leading-tight">
            {name}
          </span>
          <span className="text-white-3 type-captions-2">{role}</span>
        </cite>
      </footer>
    </article>
  );
};

TestimonialsCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  comment: PropTypes.string,
  avatarSrc: PropTypes.string,
  className: PropTypes.string,
  isRegistration: PropTypes.bool,
};

export default TestimonialsCard;
