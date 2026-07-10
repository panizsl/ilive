"use client";

import { useState, useId } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import { toPersianNumber } from "@/shared/utils/toPersianNumber";

const sectionVariants = cva([
  "relative",
  "w-full",
  "min-h-screen",
  "overflow-hidden",
]);

/**
 * FAQItem component for individual FAQ entries
 */
function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
  isLast,
  questionId,
  answerId,
}) {
  return (
    <div
      className={cn(
        "relative w-full transition-colors duration-300",
        (!isLast || isOpen) && "border-b border-white-4",
        isOpen ? "bg-teritary-3" : "hover:bg-teritary-3",
      )}
    >
      <dt>
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center w-full px-3 py-7 gap-5 desktop:gap-20 cursor-pointer"
          aria-expanded={isOpen}
          aria-controls={answerId}
          id={questionId}
        >
          <span
            className={cn(
              "grow type-body-1 desktop:type-subtitle-1 text-right transition-colors duration-300",
              isOpen ? "text-primary-2" : "text-white-1",
            )}
          >
            {toPersianNumber(index + 1)}. {item.question}
          </span>
          <span
            className={cn(
              "rounded-full shrink-0 size-8 desktop:size-12 border-2 flex items-center justify-center transition-all duration-300",
              isOpen ? "border-primary-2 rotate-90" : "border-white-4",
            )}
            aria-hidden="true"
            role="presentation"
          >
            <ChevronLeft
              className={cn(
                "size-4 desktop:size-6 transition-colors duration-300",
                isOpen ? "text-primary-2" : "text-white-4",
              )}
            />
          </span>
        </button>
      </dt>

      <dd
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <p className="type-body-2 text-white-2 text-right w-full leading-relaxed px-3 pb-7">
            {item.answer}
          </p>
        </div>
      </dd>
    </div>
  );
}

FAQItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired,
  questionId: PropTypes.string.isRequired,
  answerId: PropTypes.string.isRequired,
};

function FAQ({
  subtitle,
  title,
  categoryTitle,
  items = [],
  defaultOpenId = null,
  backgroundColor = "bg-transparent",
  className,
}) {
  const titleId = useId();
  const [openId, setOpenId] = useState(defaultOpenId);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const categoryTitleStyle =
    "text-right text-white type-h5 mb-10 w-full px-10 ";

  return (
    <section
      aria-labelledby={titleId}
      className={cn(sectionVariants(), backgroundColor, className)}
    >
      <div className="w-full h-full max-w-360 mx-auto">
        {/* Desktop Layout */}
        <div className="hidden desktop:flex gap-10 items-start pb-50 pt-30 px-20 w-full">
          <header className="flex flex-col gap-3 items-start p-10 shrink-0 text-center">
            <p className="type-body-1 text-primary-2">{subtitle}</p>
            <h2 id={titleId} className="type-h2 text-white">
              {title}
            </h2>
          </header>

          <div className="grow" role="region" aria-label="FAQ accordion">
            {/* Desktop Category Title */}
            {categoryTitle && (
              <h2 className={categoryTitleStyle}>{categoryTitle}</h2>
            )}
            <dl className="flex flex-col items-start w-full px-10">
              {items.map((item, index) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  index={index}
                  isOpen={openId === item.id}
                  onToggle={() => toggleItem(item.id)}
                  isLast={index === items.length - 1}
                  questionId={`faq-question-${item.id}`}
                  answerId={`faq-answer-${item.id}`}
                />
              ))}
            </dl>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex desktop:hidden flex-col items-end w-full pb-20 pt-5 px-4">
          <div className="flex flex-col gap-4 items-start py-5 w-full">
            <header className="flex flex-col gap-2 items-start py-5 w-full text-center">
              <p className="type-captions text-primary-2">{subtitle}</p>
              <h2 className="type-h3 text-white">{title}</h2>
            </header>

            <div role="region" aria-label="FAQ accordion" className="w-full">
              {/* Mobile Category Title */}
              {categoryTitle && (
                <h2 className={cn(categoryTitleStyle, "px-0")}>
                  {categoryTitle}
                </h2>
              )}
              <dl className="flex flex-col items-start w-full">
                {items.map((item, index) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    index={index}
                    isOpen={openId === item.id}
                    onToggle={() => toggleItem(item.id)}
                    isLast={index === items.length - 1}
                    questionId={`faq-mobile-question-${item.id}`}
                    answerId={`faq-mobile-answer-${item.id}`}
                  />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FAQ.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
  defaultOpenId: PropTypes.number,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};

FAQ.defaultProps = {
  categoryTitle: "",
  defaultOpenId: null,
  backgroundColor: "bg-transparent",
  className: "",
};

export default FAQ;
