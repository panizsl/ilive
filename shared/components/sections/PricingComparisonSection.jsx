"use client";

import React, { useState, useId, useRef } from "react";
import PropTypes from "prop-types";
import useStickyHeader from "@/shared/hooks/useStickyHeader";
import PricingComparison from "@/shared/components/sections/PricingComparison";
import PricingTable from "@/shared/components/ui/PricingTable";

/**
 * PricingComparisonSection component with sticky header and comparison tables
 */
export default function PricingComparisonSection({
  title,
  subtitle,
  plans = [],
  tables = [],
}) {
  const titleId = useId();
  const sectionRef = useRef(null);

  const [activePlanId, setActivePlanId] = useState(
    plans.find((p) => p.isHighlighted)?.id || plans[0]?.id || ""
  );

  const { stickyRef, isSticky, width, height } = useStickyHeader({
    containerRef: sectionRef,
  });

  const handlePlanClick = (planId) => setActivePlanId(planId);
  const activeColumn = plans.findIndex((p) => p.id === activePlanId);

  if (!plans.length) return null;

  return (
    <section
      ref={sectionRef}
      aria-labelledby={titleId}
      className="max-w-360 mx-auto relative mt-25"
    >
      <h2 id={titleId} className="sr-only">
        Plans Comparison
      </h2>

      {/* Sticky Header Container */}
      <div
        ref={stickyRef}
        style={isSticky && height ? { minHeight: height } : undefined}
      >
        <PricingComparison
          title={title}
          subtitle={subtitle}
          plans={plans}
          activePlanId={activePlanId}
          onPlanClick={handlePlanClick}
          isSticky={isSticky}
          stickyWidth={width}
        />
      </div>

      {/* Comparison Tables */}
      <div role="region" aria-label="Feature comparison tables">
        {tables.map((table, index) => (
          <PricingTable
            key={index}
            title={table.title}
            data={table.data}
            activeColumn={activeColumn}
          />
        ))}
      </div>
    </section>
  );
}

PricingComparisonSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string,
      priceUnit: PropTypes.string,
      buttonText: PropTypes.string,
      isHighlighted: PropTypes.bool,
    })
  ),
  tables: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          row: PropTypes.shape({
            label: PropTypes.string,
            isNew: PropTypes.bool,
            description: PropTypes.string,
          }),
          values: PropTypes.array,
        })
      ),
    })
  ),
};
