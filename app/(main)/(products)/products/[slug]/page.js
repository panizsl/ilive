import Hero from "@/shared/components/sections/Hero";
import Breadcrumb from "@/shared/components/elements/Breadcrumb";
import TargetAudienceCard from "@/shared/components/cards/TargetAudienceCard";
import CarouselSectionWrapper from "@/shared/components/widgets/CarouselSectionWrapper";
import dynamic from "next/dynamic";
import {
  fetchGraphQL,
  GET_SINGLE_PRODUCT,
  transformProductData,
} from "@/lib/graphql";

// Lazy load below-the-fold components
const StreamFeatures = dynamic(() =>
  import("@/shared/components/sections/StreamFeatures")
);
const Integration = dynamic(() =>
  import("@/shared/components/sections/Integration")
);
const Feature = dynamic(() => import("@/shared/components/sections/Feature"));
const HeroSlider = dynamic(() =>
  import("@/shared/components/widgets/HeroSlider")
);
const TrustedBy = dynamic(() =>
  import("@/shared/components/sections/TrustedBy")
);
const FeatureCard = dynamic(() =>
  import("@/shared/components/cards/FeatureCard")
);
const ProjectsShowcase = dynamic(() =>
  import("@/shared/components/widgets/ProjectsShowcase")
);
const Testimonials = dynamic(() =>
  import("@/shared/components/sections/Testimonials")
);
const FAQ = dynamic(() => import("@/shared/components/sections/FAQ"));
const CallToAction = dynamic(() =>
  import("@/shared/components/sections/CallToAction")
);

// Product metadata mapping (fallback)
const productMetadata = {
  stream: {
    title: "پلتفرم استریم",
    description:
      "پخش زنده حرفه‌ای با کیفیت بالا. استریم روی چندین پلتفرم همزمان با آیلایو استریم.",
    keywords: ["استریم", "پخش زنده", "لایو استریم", "استریم حرفه‌ای"],
  },
  restream: {
    title: "سرویس ری‌استریم",
    description:
      "پخش همزمان روی چندین پلتفرم با یک کلیک. ری‌استریم به YouTube، Aparat، Instagram و بیشتر.",
    keywords: ["ری‌استریم", "پخش همزمان", "مولتی استریم", "multistream"],
  },
  vod: {
    title: "سرویس VOD",
    description:
      "ویدیو آن دیمند حرفه‌ای. آرشیو و پخش ویدیوهای ضبط شده با کیفیت بالا.",
    keywords: ["VOD", "ویدیو آن دیمند", "آرشیو ویدیو", "پخش ویدیو"],
  },
  "event-room": {
    title: "اتاق رویداد",
    description:
      "برگزاری رویدادهای آنلاین حرفه‌ای. وبینار، کنفرانس و رویدادهای زنده با آیلایو.",
    keywords: ["اتاق رویداد", "وبینار", "کنفرانس آنلاین", "رویداد زنده"],
  },
  player: {
    title: "پخش‌کننده (Player)",
    description:
      "پلیر اختصاصی با قابلیت‌های پیشرفته. پخش ویدیو با کیفیت بالا و سفارشی‌سازی کامل.",
    keywords: ["پلیر ویدیو", "video player", "پخش‌کننده", "پلیر اختصاصی"],
  },
};

// Fetch product data from WordPress
async function getProductData(slug) {
  try {
    const data = await fetchGraphQL(
      GET_SINGLE_PRODUCT,
      { slug },
      { revalidate: 60 }
    );
    return transformProductData(data);
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // Try to get data from CMS first
  const pageData = await getProductData(decodedSlug);

  if (pageData) {
    return {
      title: pageData.title,
      description:
        pageData.hero?.description || `محصول ${pageData.title} آیلایو`,
      openGraph: {
        title: `${pageData.title} | آیلایو`,
        description:
          pageData.hero?.description || `محصول ${pageData.title} آیلایو`,
      },
      alternates: {
        canonical: `/products/${decodedSlug}`,
      },
    };
  }

  // Fallback to static metadata
  const product = productMetadata[decodedSlug] || {
    title: decodedSlug,
    description: `محصول ${decodedSlug} آیلایو - پلتفرم پخش آنلاین`,
    keywords: [decodedSlug, "آیلایو", "استریم"],
  };

  return {
    title: product.title,
    description: product.description,
    keywords: product.keywords,
    openGraph: {
      title: `${product.title} | آیلایو`,
      description: product.description,
    },
    alternates: {
      canonical: `/products/${decodedSlug}`,
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const pageData = await getProductData(decodedSlug);

  // Fallback if CMS data is unavailable
  if (!pageData) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-white-2">خطا در بارگذاری اطلاعات محصول</p>
      </div>
    );
  }

  const {
    title,
    hero,
    productFeatures,
    integration,
    feature,
    heroSlider,
    carouselTargetAudience,
    trustedBy,
    featureCards,
    projectsShowcase,
    testimonials,
    faq,
    callToAction,
  } = pageData;

  return (
    <article aria-label="Product page">
      {/* Hero Section with Breadcrumb Navigation */}
      <header className="container mx-auto" role="banner">
        <nav aria-label="Breadcrumb navigation">
          <Breadcrumb
            items={[
              { label: "خانه", href: "/", active: false },
              { label: "محصولات", active: false },
              { label: title || decodedSlug, active: true },
            ]}
            className="hidden desktop:block px-4 tablet:px-8 desktop:px-15"
          />
        </nav>

        {hero && (
          <section
            aria-labelledby="hero-title"
            className="px-4 py-6 tablet:px-8 tablet:py-8 desktop:px-15 desktop:py-10"
          >
            <h1 id="hero-title" className="sr-only">
              {hero.tagline || title}
            </h1>
            <Hero
              tagline={hero.tagline}
              title={hero.title}
              description={hero.description}
              primaryButton={hero.primaryButton}
              secondaryButton={hero.secondaryButton}
              image={hero.image}
              backgroundColor="bg-transparent"
            />
          </section>
        )}
      </header>

      <main id="main-content" role="main">
        {/* Stream Features Section */}
        {productFeatures && productFeatures.features?.length > 0 && (
          <section
            aria-labelledby="stream-features-title"
            className="container mx-auto"
          >
            <h2 id="stream-features-title" className="sr-only">
              Stream Features
            </h2>
            <StreamFeatures
              title={productFeatures.title}
              features={productFeatures.features}
            />
          </section>
        )}

        {/* Platform Integration Section */}
        {integration && (
          <section aria-labelledby="integration-title">
            <h2 id="integration-title" className="sr-only">
              Platform Integration
            </h2>
            <Integration
              subtitle={integration.subtitle}
              titleLine1={integration.titleLine1}
              titleLine2={integration.titleLine2}
              linkText={integration.linkText}
              platforms={integration.platforms}
            />
          </section>
        )}

        {/* Product Features Section */}
        {feature && (
          <section
            aria-labelledby="feature-title"
            className="container mx-auto px-4 py-20 flex flex-col gap-6 desktop:px-0 desktop:py-0 desktop:pb-32 desktop:gap-0"
          >
            <h2 id="feature-title" className="sr-only">
              Product Features
            </h2>
            <Feature
              tagline={feature.tagline}
              title={feature.title}
              description={feature.description}
              button={feature.button}
              media={feature.media}
            />
          </section>
        )}

        {/* Hero Slider Section */}
        {heroSlider && heroSlider.length > 0 && (
          <section
            aria-labelledby="slider-title"
            className="py-10 desktop:py-20"
          >
            <h2 id="slider-title" className="sr-only">
              Featured Slider
            </h2>
            <HeroSlider slides={heroSlider} />
          </section>
        )}

        {/* Target Audience Carousel Section */}
        {carouselTargetAudience && carouselTargetAudience.cards?.length > 0 && (
          <section aria-labelledby="carousel-title">
            <h2 id="carousel-title" className="sr-only">
              Target Audience
            </h2>
            <CarouselSectionWrapper
              title={carouselTargetAudience.title}
              description={carouselTargetAudience.description}
            >
              {carouselTargetAudience.cards.map((card, index) => (
                <TargetAudienceCard
                  key={index}
                  type="withIcon"
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </CarouselSectionWrapper>
          </section>
        )}

        {/* Trusted Companies Section */}
        {trustedBy && (
          <section
            aria-labelledby="trusted-title"
            className="border-y border-white-6 my-10 desktop:my-20"
          >
            <h2 id="trusted-title" className="sr-only">
              Trusted Companies
            </h2>
            <div className="container mx-auto">
              <TrustedBy
                titlePart1={trustedBy.titlePart1}
                titlePart2={trustedBy.titlePart2}
                logos={trustedBy.logos}
              />
            </div>
          </section>
        )}

        {/* Why iLive Section */}
        {featureCards && featureCards.cards?.length > 0 && (
          <section
            aria-labelledby="why-ilive-title"
            className="container mx-auto py-10 px-4 desktop:pt-30 desktop:pb-10 desktop:px-47 flex flex-col gap-18"
          >
            <header className="flex flex-col gap-3 text-center">
              <h2 id="why-ilive-title" className="type-h4 text-primary-2">
                {featureCards.headerTitle}
              </h2>
              <p className="type-body-1 text-white-2">
                {featureCards.headerDescription}
              </p>
            </header>
            <ul
              className="app-grid list-none p-0"
              role="list"
              aria-label="Features list"
            >
              {featureCards.cards.map((card) => (
                <li key={card.id} className="col-span-6 desktop:col-span-4">
                  <FeatureCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Projects Showcase Section */}
        {projectsShowcase && projectsShowcase.items?.length > 0 && (
          <section
            aria-labelledby="projects-title"
            className="container mx-auto"
          >
            <h2 id="projects-title" className="sr-only">
              Projects Showcase
            </h2>
            <ProjectsShowcase
              sectionTitle={projectsShowcase.sectionTitle}
              viewAllText={projectsShowcase.viewAllText}
              items={projectsShowcase.items}
            />
          </section>
        )}

        {/* Customer Testimonials Section */}
        {testimonials && testimonials.reviews?.length > 0 && (
          <section
            aria-labelledby="testimonials-title"
            className="container mx-auto"
          >
            <h2 id="testimonials-title" className="sr-only">
              Customer Testimonials
            </h2>
            <Testimonials
              number={testimonials.number}
              reviews={testimonials.reviews}
              title={testimonials.subtitle}
              subtitle={testimonials.title}
            />
          </section>
        )}

        {/* FAQ Section */}
        {faq && faq.items?.length > 0 && (
          <section aria-labelledby="faq-title" className="container mx-auto">
            <h2 id="faq-title" className="sr-only">
              Frequently Asked Questions
            </h2>
            <FAQ
              subtitle={faq.subtitle}
              title={faq.title}
              items={faq.items}
              defaultOpenId={1}
            />
          </section>
        )}
      </main>

      {/* Call To Action Footer */}
      {callToAction && (
        <aside aria-label="Call to action" role="complementary">
          <CallToAction
            tagline={callToAction.tagline}
            title={callToAction.title}
            buttonText={callToAction.buttonText}
            backgroundImage={callToAction.backgroundImage}
            imageAlt={callToAction.imageAlt}
          />
        </aside>
      )}
    </article>
  );
}
