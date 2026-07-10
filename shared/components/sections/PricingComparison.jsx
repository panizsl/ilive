"use client";

import { useState, useId } from "react";
import PropTypes from "prop-types";
import { SimplePricingCard } from "@/shared/components/cards/PricingCard";
import { cn } from "@/shared/utils/cn";

export default function PricingComparison({
  title,
  subtitle,
  plans = [],
  activePlanId: controlledActivePlanId,
  onPlanClick,
  isSticky = false,
  stickyWidth = 0,
  className,
}) {
  const titleId = useId();
  const tablistId = useId();
  const [internalActivePlanId, setInternalActivePlanId] = useState(
    plans[0]?.id || ""
  );

  const activePlanId = controlledActivePlanId ?? internalActivePlanId;

  const handlePlanClick = (planId) => {
    setInternalActivePlanId(planId);
    onPlanClick?.(planId);
  };

  const content = (
    <div
      className={cn("w-full bg-teritary-2", className)}
      style={
        isSticky && stickyWidth
          ? { width: stickyWidth, margin: "0 auto" }
          : undefined
      }
    >
      {/* Mobile Version */}
      <article className="desktop:hidden flex flex-col items-center">
        {/* Header */}
        <header className="w-82 mx-auto">
          <hgroup className="flex flex-col items-center gap-2 py-6 text-center">
            <h2 id={titleId} className="type-h4 text-white text-nowrap">
              {title}
            </h2>
            <p className="type-body-2 text-white-1">{subtitle}</p>
          </hgroup>
        </header>

        {/* Plan Tabs Navigation */}
        {plans.length > 0 && (
          <nav
            className="w-82 mx-auto border-b border-white-3 shadow-lg"
            aria-label="Plan selection"
          >
            <div
              className="flex items-center justify-between w-full"
              role="tablist"
              aria-label="Pricing plans"
              id={tablistId}
            >
              {plans.map((plan, index) => {
                const isActive = plan.id === activePlanId;

                return (
                  <div key={plan.id} className="flex items-center flex-1">
                    {index > 0 && (
                      <div
                        className="h-8 w-px bg-white-7"
                        aria-hidden="true"
                        role="presentation"
                      />
                    )}
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${plan.id}`}
                      id={`tab-${plan.id}`}
                      onClick={() => handlePlanClick(plan.id)}
                      className={cn(
                        "flex-1 py-4 type-subtitle-2 underline underline-offset-4 transition-colors text-center",
                        isActive ? "text-primary-2" : "text-white"
                      )}
                    >
                      {plan.name}
                    </button>
                  </div>
                );
              })}
            </div>
          </nav>
        )}
      </article>

      {/* Desktop Version */}
      <div className="hidden desktop:flex border-b border-white-6 bg-teritary-2">
        {/* Side Header - Same width as table label column (w-82) */}
        <header className="flex flex-col items-start shrink-0 w-82 border-l border-white-3 px-6 py-8">
          <hgroup className="flex flex-col gap-2 items-start text-right">
            <h2 className="type-h4 text-white text-nowrap">{title}</h2>
            <p className="type-body-2 text-white-1">{subtitle}</p>
          </hgroup>
        </header>

        {/* Pricing Cards - flex-1 to match table value columns */}
        <div className="flex flex-1" role="list" aria-label="Pricing plans">
          {plans.map((plan) => (
            <SimplePricingCard
              key={plan.id}
              planName={plan.name}
              price={plan.price}
              priceUnit={plan.priceUnit}
              buttonText={plan.buttonText}
              onButtonClick={() => handlePlanClick(plan.id)}
              isHighlighted={activePlanId === plan.id}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (isSticky) {
    return (
      <section
        aria-labelledby={titleId}
        className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-teritary-2"
      >
        {content}
      </section>
    );
  }

  return (
    <section aria-labelledby={titleId} className="w-full bg-teritary-2">
      {content}
    </section>
  );
}

PricingComparison.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      priceUnit: PropTypes.string,
      buttonText: PropTypes.string.isRequired,
      isHighlighted: PropTypes.bool,
    })
  ).isRequired,
  activePlanId: PropTypes.string,
  onPlanClick: PropTypes.func,
  isSticky: PropTypes.bool,
  stickyWidth: PropTypes.number,
  className: PropTypes.string,
};

PricingComparison.defaultProps = {
  activePlanId: undefined,
  onPlanClick: () => {},
  isSticky: false,
  stickyWidth: 0,
  className: "",
};
