/**
 * Transform WordPress GraphQL response to component-ready data for Pricing page
 * Handles ACF Flexible Content layouts
 */

const LAYOUT_TYPES = {
  HERO: "PricingPageOutletPricingpageoutletHeroSectionLayout",
  PROMO_BANNER: "PricingPageOutletPricingpageoutletPromoBannerSectionLayout",
  PRICING_PLANS: "PricingPageOutletPricingpageoutletPricingPlanSectionLayout",
  CONTACT_CTA: "PricingPageOutletPricingpageoutletContactCTASectionLayout",
  PRICING_COMPARISON:
    "PricingPageOutletPricingpageoutletPricingComparisonSectionLayout",
  CALL_TO_ACTION: "PricingPageOutletPricingpageoutletCallToActionSectionLayout",
  FAQ: "PricingPageOutletPricingpageoutletFaqSectionLayout",
};

/**
 * Find a specific layout from the flexible content array
 */
function findLayout(layouts, typeName) {
  return layouts?.find((layout) => layout.__typename === typeName);
}

/**
 * Transform Hero Section data
 */
function transformHeroSection(layout) {
  if (!layout) return null;
  return {
    tagline: layout.herotagline || "",
    title: layout.herotitle || "",
    description: layout.herodescription || "",
  };
}

/**
 * Transform Promo Banner data
 */
function transformPromoBanner(layout) {
  if (!layout) return null;
  return {
    text: layout.promobannertext || "",
  };
}

/**
 * Transform Pricing Plans data
 */
function transformPricingPlans(layout) {
  if (!layout) return null;
  return (
    layout.pricingcard?.map((card) => ({
      id: card.pricingcardid?.[0] || "",
      planName: card.pricingcardplanname || "",
      description: card.pricingcarddescription || "",
      price: card.pricingcardPrice || "۰",
      priceUnit: card.pricingcardpriceunit || "",
      buttonText: card.pricingcardbuttontext || "",
      featuresTitle: card.pricingcardfeaturetitle || "",
      features: card.pricingcardfeatures?.map((f) => f.featurestext) || [],
      isRecommended: card.pricingcardisrecommended?.[0] === "true",
    })) || []
  );
}

/**
 * Transform Contact CTA data
 */
function transformContactCTA(layout) {
  if (!layout) return null;
  return {
    title: layout.contactctatitle || "",
    description: layout.contactctadescription || "",
    buttonText: layout.contactctabuttontext || "",
  };
}

/**
 * Transform Pricing Comparison data
 */
function transformPricingComparison(layout) {
  if (!layout) return null;

  const plans =
    layout.pricingcomparisonplans?.map((plan) => ({
      id: plan.planId?.[0] || "",
      name: plan.planname || "",
      price: plan.planprice || "0",
      priceUnit: "ماهانه",
      buttonText: plan.planbuttontext || "",
      isHighlighted: plan.planishighlighted?.[0] === "true",
    })) || [];

  const tables =
    layout.pricingtable?.map((table) => ({
      title: table.pricingtabletitle || "",
      data:
        table.pricingtabledata?.map((item) => {
          const row = item.datarow?.[0] || {};
          return {
            row: {
              label: row.rowlable || "",
              isNew: row.rowisnew?.[0] === "true",
              description: row.rowtooltip || "",
            },
            values:
              item.datavalues?.map((val) => {
                const type = val.valuestype?.[0];
                if (type === "check") {
                  return val.valuescheck?.[0] === "true";
                }
                if (type === "description") {
                  return val.valuesdescription || false;
                }
                if (type === "soon") {
                  return "soon";
                }
                return false;
              }) || [],
          };
        }) || [],
    })) || [];

  return {
    title: layout.pricingcomparisontitle || "",
    subtitle: layout.pricingcomparisonsubtitle || "",
    plans,
    tables,
  };
}

/**
 * Transform Call To Action data
 */
function transformCallToAction(layout) {
  if (!layout) return null;
  return {
    tagline: layout.calltoactiontagline || "",
    title: layout.calltoactiontitle || "",
    buttonText: layout.calltoactionbuttontext || "",
    backgroundImage: layout.calltoactionimage?.node?.sourceUrl || "",
    imageAlt: layout.calltoactionimagealt || "",
  };
}

/**
 * Transform FAQ data
 */
function transformFAQ(layout) {
  if (!layout) return null;
  return {
    title: layout.faqstitle || "",
    subtitle: layout.faqssubtitle || "",
    items:
      layout.faqs?.map((item, index) => {
        const faq = item.faq?.nodes?.[0];
        return {
          id: faq?.id || index + 1,
          question: faq?.faqFields?.faqQuestion || "",
          answer: faq?.faqFields?.faqanswer || "",
        };
      }) || [],
  };
}

/**
 * Main transformer function
 * Transforms raw GraphQL response to component-ready data
 */
export function transformPricingData(data) {
  const page = data?.pages?.nodes?.[0];
  if (!page) return null;

  const layouts = page.pricingPageOutlet?.pricingpageoutlet || [];

  const heroLayout = findLayout(layouts, LAYOUT_TYPES.HERO);
  const promoBannerLayout = findLayout(layouts, LAYOUT_TYPES.PROMO_BANNER);
  const pricingPlansLayout = findLayout(layouts, LAYOUT_TYPES.PRICING_PLANS);
  const contactCTALayout = findLayout(layouts, LAYOUT_TYPES.CONTACT_CTA);
  const pricingComparisonLayout = findLayout(
    layouts,
    LAYOUT_TYPES.PRICING_COMPARISON
  );
  const callToActionLayout = findLayout(layouts, LAYOUT_TYPES.CALL_TO_ACTION);
  const faqLayout = findLayout(layouts, LAYOUT_TYPES.FAQ);

  return {
    hero: transformHeroSection(heroLayout),
    promoBanner: transformPromoBanner(promoBannerLayout),
    pricingPlans: transformPricingPlans(pricingPlansLayout),
    contactCTA: transformContactCTA(contactCTALayout),
    pricingComparison: transformPricingComparison(pricingComparisonLayout),
    callToAction: transformCallToAction(callToActionLayout),
    faq: transformFAQ(faqLayout),
  };
}

export { LAYOUT_TYPES };
