import dynamic from "next/dynamic";
import Image from "next/image";
import Hero from "@/shared/components/sections/Hero";
import {
  fetchGraphQL,
  GET_HOMEPAGE,
  transformHomepageData,
} from "@/lib/graphql";

// Lazy load below-the-fold components
const TrustedBy = dynamic(() =>
  import("@/shared/components/sections/TrustedBy")
);
const HeroSlider = dynamic(() =>
  import("@/shared/components/widgets/HeroSlider")
);
const ServiceCard = dynamic(() =>
  import("@/shared/components/cards/ServiceCard")
);
const Feature = dynamic(() => import("@/shared/components/sections/Feature"));
const Testimonials = dynamic(() =>
  import("@/shared/components/sections/Testimonials")
);

// SEO Metadata
export const metadata = {
  alternates: {
    canonical: "/",
  },
};

// Fetch homepage data from WordPress
async function getHomepageData() {
  try {
    const data = await fetchGraphQL(GET_HOMEPAGE, {}, { revalidate: 60 });
    return transformHomepageData(data);
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
}

export default async function HomePage() {
  const pageData = await getHomepageData();

  // Fallback if CMS data is unavailable
  if (!pageData) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-white-2">خطا در بارگذاری اطلاعات</p>
      </div>
    );
  }

  const {
    hero,
    heroImage,
    trustedBy,
    heroSlider,
    services,
    feature,
    testimonials,
  } = pageData;

  // Split service cards: first 3 primary, rest secondary
  const primaryProducts = services?.cards?.slice(0, 3) || [];
  const secondaryProducts = services?.cards?.slice(3) || [];

  return (
    <>
      {/* Hero Section - Above the fold, no lazy load */}
      <section
        className="container mx-auto desktop:px-20 desktop:py-10"
        aria-label="Hero section"
      >
        {hero && (
          <Hero
            tagline={hero.tagline}
            title={hero.title}
            description={hero.description}
            primaryButton={hero.primaryButton}
            secondaryButton={hero.secondaryButton}
          />
        )}
        {heroImage && (
          <figure className="w-full h-90 overflow-hidden flex justify-end sm:block sm:w-full sm:h-auto sm:overflow-visible">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1280}
              height={680}
              className="w-[200%] max-w-none h-auto shrink-0 sm:w-full"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 200vw, 1280px"
              quality={75}
            />
          </figure>
        )}
      </section>

      {/* Trusted By Section */}
      {trustedBy && (
        <section
          className="border-y border-white-6 desktop:border-y-0"
          aria-labelledby="trusted-heading"
        >
          <h2 id="trusted-heading" className="sr-only">
            Companies that trust us
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

      {/* Hero Slider Section */}
      {heroSlider && heroSlider.length > 0 && (
        <section
          className="py-10 desktop:py-20 desktop:gap-2.5"
          aria-labelledby="slider-heading"
        >
          <h2 id="slider-heading" className="sr-only">
            Featured industries and use cases
          </h2>
          <HeroSlider slides={heroSlider} />
        </section>
      )}

      {/* Products Section */}
      {services && (
        <section
          className="app-grid py-10 desktop:py-20"
          aria-labelledby="products-title"
        >
          <header className="col-span-6 desktop:col-span-12 py-10 gap-3 flex flex-col text-center">
            <h2 id="products-title" className="type-h4 text-primary-2">
              {services.headerTitle}
            </h2>
            <p className="type-body-1 text-white-2">
              {services.headerDescription}
            </p>
          </header>
          {primaryProducts.length > 0 && (
            <ServiceCard
              cards={primaryProducts}
              className="col-span-6 desktop:col-span-12 grid grid-cols-1 desktop:grid-cols-3 gap-4 desktop:gap-10"
            />
          )}
          {secondaryProducts.length > 0 && (
            <ServiceCard
              cards={secondaryProducts}
              className="col-span-6 desktop:col-span-12 grid grid-cols-1 desktop:grid-cols-2 gap-4 desktop:gap-10 desktop:px-[calc(100%/6)]"
            />
          )}
        </section>
      )}

      {/* Features Section */}
      {feature && (
        <section
          className="container mx-auto px-4 py-20 flex flex-col gap-6 desktop:px-0 desktop:py-0 desktop:pb-32 desktop:gap-0"
          aria-labelledby="features-heading"
        >
          <h2 id="features-heading" className="sr-only">
            Platform features and capabilities
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

      {/* Testimonials Section */}
      {testimonials && (
        <section
          className="container mx-auto"
          aria-labelledby="testimonials-heading"
        >
          <h2 id="testimonials-heading" className="sr-only">
            Customer testimonials and reviews
          </h2>
          <Testimonials
            number={testimonials.number}
            reviews={testimonials.reviews}
            title={testimonials.subtitle}
            subtitle={testimonials.title}
          />
        </section>
      )}
    </>
  );
}
