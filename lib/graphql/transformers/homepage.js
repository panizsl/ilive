/**
 * Transform WordPress GraphQL response to component-ready data
 * Handles ACF Flexible Content layouts
 */

const LAYOUT_TYPES = {
  HERO: "HomePageOutletHomepageoutletHeroSectionLayout",
  IMAGE: "HomePageOutletHomepageoutletImageSectionLayout",
  TRUSTED_BY: "HomePageOutletHomepageoutletTrustedBySectionLayout",
  HERO_SLIDER: "HomePageOutletHomepageoutletHeroSliderSectionLayout",
  SERVICE: "HomePageOutletHomepageoutletServiceSectionLayout",
  FEATURE: "HomePageOutletHomepageoutletFeatureSectionLayout",
  TESTIMONIALS: "HomePageOutletHomepageoutletTestimonialsSectionLayout",
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
    description: layout.heroDescription || "",
    primaryButton: { text: layout.heroprimarybutton || "" },
    secondaryButton: { text: layout.herosecondarybutton || "" },
  };
}

/**
 * Transform Hero Image data
 */
function transformHeroImage(layout) {
  if (!layout) return null;
  return {
    src: layout.imagesrc?.node?.sourceUrl || "",
    alt: layout.imagealt || "",
  };
}

/**
 * Transform Trusted By Section data
 */
function transformTrustedBySection(layout) {
  if (!layout) return null;
  return {
    titlePart1: layout.trustedbytitlepart1 || "",
    titlePart2: layout.trustedbytitlepart2 || "",
    logos:
      layout.trustedbylogos?.map((logo, index) => ({
        id: index + 1,
        icon: logo.logosicon?.node?.sourceUrl || "",
        alt: logo.logosalt || `Partner logo ${index + 1}`,
      })) || [],
  };
}

/**
 * Transform Hero Slider data
 */
function transformHeroSlider(layout) {
  if (!layout) return null;
  return (
    layout.herosliderslides?.map((slide, index) => ({
      id: index + 1,
      title: slide.slidestitle || "",
      description: slide.slidesdescription || "",
      image: slide.slidesimage?.node?.sourceUrl || "",
    })) || []
  );
}

/**
 * Transform Service Section data
 */
function transformServiceSection(layout) {
  if (!layout) return null;

  const cards =
    layout.servicecards?.flatMap(
      (card) =>
        card.servicecard?.nodes?.map((node) => ({
          id: node.slug || node.id,
          title: node.servicecardFields?.servicecardtitle || node.title || "",
          description: node.servicecardFields?.servicecarddescription || "",
          icon: node.servicecardFields?.servicecardicon || "Play",
          iconColor: node.servicecardFields?.servicecardiconcolor || "#FFFFFF",
          buttonText: node.servicecardFields?.servicecardbuttontext || "مشاهده",
          href: `/products/${node.slug || ""}`,
        })) || []
    ) || [];

  return {
    headerTitle: layout.serviceheadertitle || "",
    headerDescription: layout.serviceheaderdescription || "",
    cards,
  };
}

/**
 * Transform Feature Section data
 */
function transformFeatureSection(layout) {
  if (!layout) return null;

  const media = layout.featuremedia?.[0];
  return {
    tagline: layout.featuretagine || "",
    title: layout.featuretitle || "",
    description: layout.featuredescription || "",
    button: { text: layout.featurebuttontext || "" },
    media: {
      type: media?.mediaType?.[0] || "image",
      src: media?.mediaimage?.node?.sourceUrl || "",
      alt: media?.mediaalt || "",
      position: media?.mediaPosition?.[0] || "right",
    },
  };
}

/**
 * Transform Testimonials Section data
 */
function transformTestimonialsSection(layout) {
  if (!layout) return null;
  return {
    title: layout.testimonialsheadertitle || "",
    subtitle: layout.testimonialsheadersubtitle || "",
    number: parseInt(layout.testimonialsnumber, 10) || 5,
    reviews:
      layout.testimonialscard?.map((review, index) => ({
        id: index + 1,
        name: review.testemonialname || "",
        role: review.testimonialrole || "",
        avatarSrc: review.testimonialAvatarsrc?.node?.sourceUrl || "",
        comment: review.testimonialcomment || "",
      })) || [],
  };
}

/**
 * Main transformer function
 * Transforms raw GraphQL response to component-ready data
 */
export function transformHomepageData(data) {
  const page = data?.pages?.nodes?.[0];
  if (!page) return null;

  const layouts = page.homePageOutlet?.homepageoutlet || [];

  const heroLayout = findLayout(layouts, LAYOUT_TYPES.HERO);
  const imageLayout = findLayout(layouts, LAYOUT_TYPES.IMAGE);
  const trustedByLayout = findLayout(layouts, LAYOUT_TYPES.TRUSTED_BY);
  const heroSliderLayout = findLayout(layouts, LAYOUT_TYPES.HERO_SLIDER);
  const serviceLayout = findLayout(layouts, LAYOUT_TYPES.SERVICE);
  const featureLayout = findLayout(layouts, LAYOUT_TYPES.FEATURE);
  const testimonialsLayout = findLayout(layouts, LAYOUT_TYPES.TESTIMONIALS);

  return {
    hero: transformHeroSection(heroLayout),
    heroImage: transformHeroImage(imageLayout),
    trustedBy: transformTrustedBySection(trustedByLayout),
    heroSlider: transformHeroSlider(heroSliderLayout),
    services: transformServiceSection(serviceLayout),
    feature: transformFeatureSection(featureLayout),
    testimonials: transformTestimonialsSection(testimonialsLayout),
  };
}

export { LAYOUT_TYPES };
