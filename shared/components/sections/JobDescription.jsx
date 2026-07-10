import React from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { Check, Briefcase } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// CVA
const sectionVariants = cva("flex flex-col w-full text-right", {
  variants: {
    spacing: {
      default: "gap-4 md:gap-6",
      tight: "gap-3",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});
//title
const titleVariants = cva("type-h6 text-white-1");
//text
const textVariants = cva("text-body-1", {
  variants: {
    intent: {
      primary: "text-white-1",
      secondary: "text-gray-400",
    },
  },
  defaultVariants: {
    intent: "secondary",
  },
});

export default function JobDescription({
  description,
  responsibilities,
  requirements,
  advantages,
  additionalInfo,
}) {
  return (
    <div className="w-full max-w-265 gap-14.5 bg-transparent px-4 md:px-0">
      <div className="flex flex-col gap-10 md:gap-14 py-8">
        {/*  description*/}
        <section className={cn(sectionVariants())}>
          <h2 className={cn(titleVariants())}>{description.title}</h2>
          <p className={cn(textVariants())}>{description.content}</p>
        </section>

        {/* responsibilities */}
        <section className={cn(sectionVariants())}>
          <h2 className={cn(titleVariants())}>{responsibilities.title}</h2>
          <p className={cn(textVariants())}>{responsibilities.content}</p>
          <ul className="flex flex-col gap-4 mt-2">
            {responsibilities.items.map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-white-1">
                <Check className="w-7 h-7 text-primary-1 shrink-0" />
                <span className={cn(textVariants({ intent: "primary" }))}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* requirements*/}
        <section className={cn(sectionVariants())}>
          <h2 className={cn(titleVariants())}>{requirements.title}</h2>
          <p className={cn(textVariants())}>{requirements.content}</p>
        </section>

        {/* advantages*/}
        <section className={cn(sectionVariants())}>
          <h2 className={cn(titleVariants())}>{advantages.title}</h2>
          <p className={cn(textVariants())}>{advantages.content}</p>
          <ul className="flex flex-col gap-4 mt-2">
            {advantages.items.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <Briefcase className="w-8 h-8 text-secondary-2 shrink-0" />
                <span className={cn(textVariants({ intent: "primary" }))}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* additionalInfo*/}
        <section className={cn(sectionVariants())}>
          <h2 className={cn(titleVariants())}>{additionalInfo.title}</h2>
          <p className={cn(textVariants())}>{additionalInfo.content}</p>
        </section>
      </div>
    </div>
  );
}

//Prop Types
JobDescription.propTypes = {
  description: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  responsibilities: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  requirements: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  advantages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  additionalInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
