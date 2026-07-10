import dynamic from "next/dynamic";
import { Gift } from "lucide-react";
import Hero from "@/shared/components/sections/Hero";
import {
  fetchGraphQL,
  GET_PRICING_PAGE,
  transformPricingData,
} from "@/lib/graphql";

// Lazy load below-the-fold components
const PricingCard = dynamic(() =>
  import("@/shared/components/cards/PricingCard")
);
const ContactCTA = dynamic(() =>
  import("@/shared/components/sections/ContactCTA")
);
const CallToAction = dynamic(() =>
  import("@/shared/components/sections/CallToAction")
);
const FAQ = dynamic(() => import("@/shared/components/sections/FAQ"));
const PricingComparisonSection = dynamic(() =>
  import("@/shared/components/sections/PricingComparisonSection")
);

// SEO Metadata
export const metadata = {
  title: "تعرفه‌ها و پلان‌های قیمت‌گذاری",
  description:
    "پلان‌های متنوع آیلایو برای استریم حرفه‌ای. از پلان رایگان تا سازمانی، بهترین گزینه را برای نیاز خود انتخاب کنید.",
  keywords: [
    "قیمت استریم",
    "تعرفه پخش زنده",
    "پلان استریم",
    "هزینه استریم",
    "آیلایو قیمت",
  ],
  openGraph: {
    title: "تعرفه‌ها و پلان‌های قیمت‌گذاری | آیلایو",
    description:
      "پلان‌های متنوع آیلایو برای استریم حرفه‌ای. از پلان رایگان تا سازمانی.",
  },
  alternates: {
    canonical: "/pricing",
  },
};

// Fetch pricing page data from WordPress
async function getPricingData() {
  try {
    const data = await fetchGraphQL(GET_PRICING_PAGE, {}, { revalidate: 60 });
    return transformPricingData(data);
  } catch (error) {
    console.error("Error fetching pricing data:", error);
    return null;
  }
}

export default async function PricingPage() {
  const pageData = await getPricingData();

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
    promoBanner,
    pricingPlans,
    contactCTA,
    pricingComparison,
    callToAction,
    faq,
  } = pageData;

  return (
    <article itemScope itemType="https://schema.org/Product">
      <meta itemProp="name" content="پلان‌های آیلایو" />

      {/* Hero Section */}
      {hero && (
        <header className="container mx-auto desktop:px-20 desktop:py-10 relative">
          {/* Glow Effects - Desktop */}
          <span
            className="hidden desktop:block glow-base glow-lg glow-color-green left-15 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20"
            aria-hidden="true"
          />
          <span
            className="hidden desktop:block glow-base glow-lg glow-color-blue right-15 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-20"
            aria-hidden="true"
          />

          {/* Glow Effects - Mobile */}
          <span
            className="desktop:hidden glow-base glow-sm glow-color-green left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-60"
            aria-hidden="true"
          />
          <span
            className="desktop:hidden glow-base glow-sm glow-color-blue right-10 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-60"
            aria-hidden="true"
          />

          <Hero
            tagline={hero.tagline}
            title={hero.title}
            description={hero.description}
          />
        </header>
      )}

      <main id="main-content" className="container mx-auto">
        {/* Promo Banner */}
        {promoBanner && (
          <aside
            className="desktop:px-20 desktop:py-10 px-4 py-6"
            dir="rtl"
            aria-label="پیشنهاد ویژه"
          >
            <div
              className="relative rounded-xl w-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(4, 26, 32, 0.2) 0%, rgba(41, 171, 230, 0.2) 18.889%, rgba(41, 171, 230, 0.2) 79.35%, rgba(4, 26, 32, 0.2) 100%)",
              }}
            >
              <div className="flex items-center justify-center gap-2.5 px-2 py-3 w-full">
                <Gift
                  className="size-6 text-secondary-2 shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <p className="type-body-2 text-secondary-2 text-right desktop:text-nowrap">
                  {promoBanner.text}
                </p>
              </div>
            </div>
          </aside>
        )}

        {/* Pricing Plans */}
        {pricingPlans && pricingPlans.length > 0 && (
          <section
            className="desktop:px-20 desktop:py-10 px-4 py-6"
            aria-labelledby="pricing-heading"
          >
            <h2 id="pricing-heading" className="sr-only">
              پلان‌های قیمت‌گذاری
            </h2>
            <ul
              className="grid grid-cols-1 desktop:grid-cols-4 gap-6 w-full list-none p-0 m-0"
              role="list"
            >
              {pricingPlans.map((plan) => (
                <li key={plan.id}>
                  <PricingCard
                    variant="full"
                    planName={plan.planName}
                    description={plan.description}
                    price={plan.price}
                    priceUnit={plan.priceUnit}
                    buttonText={plan.buttonText}
                    features={plan.features}
                    featuresTitle={plan.featuresTitle}
                    isRecommended={plan.isRecommended}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Contact Section */}
        {contactCTA && (
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="sr-only">
              تماس با ما
            </h2>
            <ContactCTA
              title={contactCTA.title}
              description={contactCTA.description}
              buttonText={contactCTA.buttonText}
            />
          </section>
        )}

        {/* Pricing Comparison */}
        {pricingComparison && (
          <section aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="sr-only">
              مقایسه پلان‌ها
            </h2>
            <PricingComparisonSection
              title={pricingComparison.title}
              subtitle={pricingComparison.subtitle}
              plans={pricingComparison.plans}
              tables={pricingComparison.tables}
            />
          </section>
        )}
      </main>

      {/* Call To Action */}
      {callToAction && (
        <aside className="mt-20 desktop:mt-32" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">
            شروع کنید
          </h2>
          <CallToAction
            tagline={callToAction.tagline}
            title={callToAction.title}
            buttonText={callToAction.buttonText}
            backgroundImage={callToAction.backgroundImage}
            imageAlt={callToAction.imageAlt}
          />
        </aside>
      )}

      {/* FAQ */}
      {faq && faq.items?.length > 0 && (
        <section className="container mx-auto" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="sr-only">
            سوالات متداول
          </h2>
          <FAQ
            subtitle={faq.subtitle}
            title={faq.title}
            items={faq.items}
            backgroundColor="bg-teritary-1"
          />
        </section>
      )}
    </article>
  );
}
