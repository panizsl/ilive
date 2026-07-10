/**
 * Transform WordPress GraphQL response for Product page
 */

const LAYOUT_TYPES = {
  HERO: "ProductsPageOutletProductspageoutletHeroSectionLayout",
  PRODUCT_FEATURE:
    "ProductsPageOutletProductspageoutletProductFeatureSectionLayout",
  INTEGRATION: "ProductsPageOutletProductspageoutletIntegrationSectionLayout",
  FEATURE: "ProductsPageOutletProductspageoutletFeatureSectionLayout",
  HERO_SLIDER: "ProductsPageOutletProductspageoutletHeroSliderSectionLayout",
  CAROUSEL_TARGET:
    "ProductsPageOutletProductspageoutletCarouselTargetAudienceSectionLayout",
  TRUSTED_BY: "ProductsPageOutletProductspageoutletTrustedBySectionLayout",
  FEATURE_CARD: "ProductsPageOutletProductspageoutletFeatureCardSectionLayout",
  PROJECTS_SHOWCASE:
    "ProductsPageOutletProductspageoutletProjectsShowcaseSectionLayout",
  TESTIMONIALS: "ProductsPageOutletProductspageoutletTestimonialsSectionLayout",
  FAQ: "ProductsPageOutletProductspageoutletFaqSectionLayout",
  CALL_TO_ACTION:
    "ProductsPageOutletProductspageoutletCallToActionSectionLayout",
};

function findLayout(layouts, typeName) {
  return layouts?.find((layout) => layout.__typename === typeName);
}

function transformHeroSection(layout) {
  if (!layout) return null;
  const heroImage = layout.heroimage?.[0];
  return {
    tagline: layout.herotagline || "",
    title: layout.herotitle || "",
    description: layout.heroDescription || "",
    primaryButton: { text: layout.heroprimarybuttontext || "" },
    secondaryButton: { text: layout.herosecondarybuttontext || "" },
    image: heroImage
      ? {
          src: heroImage.imagesrc?.node?.sourceUrl || "",
          alt: heroImage.imagealt || "",
          position: heroImage.imagePosition?.[0] || "right",
        }
      : null,
  };
}

function transformProductFeatureSection(layout) {
  if (!layout) return null;
  return {
    title: layout.productfeaturetitle || "",
    features:
      layout.productfeature?.map((feature) => ({
        image: feature.featuresrc?.node?.sourceUrl || "",
        title: feature.featuretitle || "",
        description: feature.featuredescription || "",
      })) || [],
  };
}

function transformIntegrationSection(layout) {
  if (!layout) return null;
  const line1 = layout.integrationtitleline1?.[0];
  const line2 = layout.integrationtitleline2?.[0];
  return {
    subtitle: layout.integrationsubtitle || "",
    titleLine1: {
      before: line1?.titleline1before || "",
      highlight: line1?.titleline1hightlight || "",
      after: line1?.titleline1after || "",
    },
    titleLine2: {
      before: line2?.titleline2before || "",
      highlight: line2?.titleline2highlight || "",
      after: line2?.titleline2after || "",
    },
    linkText: layout.integrationlinktext || "",
    platforms:
      layout.integrationplatforms?.map((platform) => ({
        icon: platform.platformicon?.node?.sourceUrl || "",
        alt: platform.platformalt || "",
      })) || [],
  };
}

function transformFeatureSection(layout) {
  if (!layout) return null;
  const media = layout.featuremedia?.[0];
  return {
    tagline: layout.featuretagline || "",
    title: layout.featuretitle || "",
    description: layout.featuredescription || "",
    button: { text: layout.featurebuttontext || "" },
    media: {
      type: media?.mediatype?.[0] || "image",
      src: media?.mediasrc?.node?.sourceUrl || "",
      alt: media?.mediaalt || "",
      position: media?.mediaPosition?.[0] || "right",
    },
  };
}

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

function transformCarouselTargetAudience(layout) {
  if (!layout) return null;
  return {
    title: layout.carouseltargetaudiencetitle || "",
    description: layout.carouseltargetaudiencedescription || "",
    cards:
      layout.targetaudiencecards?.map((card) => ({
        imageSrc: card.cardsrc?.node?.sourceUrl || "",
        title: card.cardtitle || "",
        description: card.cardDescription || "",
      })) || [],
  };
}

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

function transformFeatureCardSection(layout) {
  if (!layout) return null;
  return {
    headerTitle: layout.featurecardheadertitle || "",
    headerDescription: layout.featurecardheaderdescription || "",
    cards:
      layout.featurecards?.map((card, index) => ({
        id: index + 1,
        icon: card.cardicon || "Play",
        title: card.cardtitle || "",
        description: card.carddescription || "",
      })) || [],
  };
}

function transformProjectsShowcase(layout) {
  if (!layout) return null;
  return {
    sectionTitle: layout.projectsshowcasetitle || "",
    viewAllText: layout.projectsshowcaseviewtext || "",
    items:
      layout.projectsshowcaseItems?.map((item) => ({
        image: item.itemssrc?.node?.sourceUrl || "",
        title: item.itemstitle || "",
        description: item.itemsdescription || "",
      })) || [],
  };
}

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
        avatarSrc: review.testimonialavatarsrc?.node?.sourceUrl || "",
        comment: review.testimonialcomment || "",
      })) || [],
  };
}

function transformFaqSection(layout) {
  if (!layout) return null;
  return {
    subtitle: layout.faqsubtitle || "",
    title: layout.faqtitle || "",
    items:
      layout.faqs
        ?.map((faqItem, index) => {
          const faq = faqItem.faq?.nodes?.[0];
          return {
            id: index + 1,
            question: faq?.faqFields?.faqQuestion || "",
            answer: faq?.faqFields?.faqanswer || "",
          };
        })
        .filter((item) => item.question) || [],
  };
}

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

export function transformProductData(data) {
  const product = data?.product;
  if (!product) return null;

  const layouts = product.productsPageOutlet?.productspageoutlet || [];

  const heroLayout = findLayout(layouts, LAYOUT_TYPES.HERO);
  const productFeatureLayout = findLayout(
    layouts,
    LAYOUT_TYPES.PRODUCT_FEATURE
  );
  const integrationLayout = findLayout(layouts, LAYOUT_TYPES.INTEGRATION);
  const featureLayout = findLayout(layouts, LAYOUT_TYPES.FEATURE);
  const heroSliderLayout = findLayout(layouts, LAYOUT_TYPES.HERO_SLIDER);
  const carouselTargetLayout = findLayout(
    layouts,
    LAYOUT_TYPES.CAROUSEL_TARGET
  );
  const trustedByLayout = findLayout(layouts, LAYOUT_TYPES.TRUSTED_BY);
  const featureCardLayout = findLayout(layouts, LAYOUT_TYPES.FEATURE_CARD);
  const projectsShowcaseLayout = findLayout(
    layouts,
    LAYOUT_TYPES.PROJECTS_SHOWCASE
  );
  const testimonialsLayout = findLayout(layouts, LAYOUT_TYPES.TESTIMONIALS);
  const faqLayout = findLayout(layouts, LAYOUT_TYPES.FAQ);
  const callToActionLayout = findLayout(layouts, LAYOUT_TYPES.CALL_TO_ACTION);

  return {
    title: product.title || "",
    slug: product.slug || "",
    hero: transformHeroSection(heroLayout),
    productFeatures: transformProductFeatureSection(productFeatureLayout),
    integration: transformIntegrationSection(integrationLayout),
    feature: transformFeatureSection(featureLayout),
    heroSlider: transformHeroSlider(heroSliderLayout),
    carouselTargetAudience:
      transformCarouselTargetAudience(carouselTargetLayout),
    trustedBy: transformTrustedBySection(trustedByLayout),
    featureCards: transformFeatureCardSection(featureCardLayout),
    projectsShowcase: transformProjectsShowcase(projectsShowcaseLayout),
    testimonials: transformTestimonialsSection(testimonialsLayout),
    faq: transformFaqSection(faqLayout),
    callToAction: transformCallToAction(callToActionLayout),
  };
}

export { LAYOUT_TYPES };
