import { useCallback } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import {
  footerColumns,
  footerSocialLinks,
  footerBadges,
  footerContactInfo,
} from "@/shared/data/footerData";

// Social Icon Component
function SocialIcon({ name, className }) {
  const iconSrc = {
    aparat: "/assets/social/aparat.svg",
    linkedin: "/assets/social/linkedin.svg",
    instagram: "/assets/social/instagram.svg",
    youtube: "/assets/social/youtube.svg",
  }[name];

  if (!iconSrc) return null;

  return (
    <Image
      src={iconSrc}
      alt=""
      width={32}
      height={32}
      className={className}
      aria-hidden="true"
    />
  );
}

SocialIcon.propTypes = {
  name: PropTypes.oneOf(["aparat", "linkedin", "instagram", "youtube"])
    .isRequired,
  className: PropTypes.string,
};

// Footer variants using CVA
const footerVariants = cva("bg-teritary-1 relative w-full overflow-hidden", {
  variants: {
    variant: {
      full: "",
      simple: "",
    },
  },
  defaultVariants: {
    variant: "full",
  },
});

// Full Footer Mobile Component
export default function FooterMobile({
  variant = "full",
  logoSrc = footerContactInfo.logoSrc,
  address = footerContactInfo.address,
  phone = footerContactInfo.phone,
  columns = footerColumns,
  socialLinks = footerSocialLinks,
  badges = footerBadges,
  copyrightText = footerContactInfo.copyrightText,
  showGlowEffects = true,
  className,
  products = [],
}) {
  // ساخت ستون محصولات از GraphQL
  const productsColumn = {
    title: "محصولات",
    links: products.map((product) => ({
      label: product.title,
      href: `/products/${product.slug}`,
    })),
  };

  // ترکیب ستون محصولات با بقیه ستون‌ها
  const allColumns =
    products.length > 0 ? [productsColumn, ...columns] : columns;
  // Render link - uses Next.js Link for internal, anchor for external
  const renderLink = useCallback((link, linkIndex, linkClassName) => {
    if (link.href) {
      const isExternal = link.href.startsWith("http");
      if (isExternal) {
        return (
          <li key={link.id || linkIndex} role="listitem">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
              aria-label={`Visit ${link.label} (opens in new tab)`}
            >
              {link.label}
            </a>
          </li>
        );
      }
      return (
        <li key={link.id || linkIndex} role="listitem">
          <Link
            href={link.href}
            className={linkClassName}
            aria-label={`Navigate to ${link.label}`}
          >
            {link.label}
          </Link>
        </li>
      );
    }
    return (
      <li key={link.id || linkIndex} role="listitem">
        <span className={linkClassName}>{link.label}</span>
      </li>
    );
  }, []);

  // Render social link
  const renderSocialLink = useCallback((social) => {
    if (social.href) {
      const isExternal = social.href.startsWith("http");
      if (isExternal) {
        return (
          <li key={social.name} role="listitem">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 flex items-center justify-center text-white hover:text-primary-1 transition-colors"
              aria-label={`Visit our ${social.name} page (opens in new tab)`}
            >
              <SocialIcon name={social.name} className="size-full" />
            </a>
          </li>
        );
      }
      return (
        <li key={social.name} role="listitem">
          <Link
            href={social.href}
            className="size-8 flex items-center justify-center text-white hover:text-primary-1 transition-colors"
            aria-label={`Visit our ${social.name} page`}
          >
            <SocialIcon name={social.name} className="size-full" />
          </Link>
        </li>
      );
    }
    return (
      <li key={social.name} role="listitem">
        <span className="size-8 flex items-center justify-center text-white">
          <SocialIcon name={social.name} className="size-full" />
        </span>
      </li>
    );
  }, []);

  // Simple variant
  if (variant === "simple") {
    return (
      <footer
        className={cn(footerVariants({ variant }), className)}
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="flex flex-col gap-13 items-start px-4 py-10">
          <section
            className="flex flex-col items-center w-full"
            aria-label="Company information"
          >
            <div className="flex flex-col gap-10 items-center w-full">
              <div className="flex flex-col gap-8 items-center w-full relative">
                <figure className="h-9 w-27.75 relative z-10">
                  <Image
                    src={logoSrc}
                    alt="Company logo"
                    fill
                    sizes="111px"
                    className="object-contain"
                  />
                </figure>
                <address className="flex flex-col gap-3 items-center text-white-1 type-body-2 text-center w-full not-italic">
                  <p dir="auto">{address}</p>
                  <p dir="auto">
                    <a
                      href={`tel:${phone.replace(/\s|-/g, "")}`}
                      aria-label={`Call us at ${phone}`}
                    >
                      {phone}
                    </a>
                  </p>
                </address>
                {showGlowEffects && (
                  <span
                    className="glow-base glow-md glow-color-blue left-54.75 -top-19.75 opacity-50"
                    aria-hidden="true"
                  />
                )}
              </div>
              <ul
                className="flex gap-4 items-center"
                role="list"
                aria-label="Trust badges and certifications"
              >
                {badges.map((badge, index) => (
                  <li
                    key={badge.id || index}
                    className="flex items-center justify-center w-16 h-20 rounded-lg"
                    role="listitem"
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={64}
                      height={80}
                      className="max-w-full max-h-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {showGlowEffects && (
            <span
              className="glow-base glow-sm glow-color-green -left-26.75 top-66.5 opacity-30"
              aria-hidden="true"
            />
          )}
        </div>
      </footer>
    );
  }

  // Full variant
  return (
    <footer
      className={cn(footerVariants({ variant }), className)}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="flex flex-col gap-13 items-start pb-0 pt-10 px-4">
        <section
          className="flex flex-col gap-13 items-center w-full"
          aria-label="Company information"
        >
          <div className="flex flex-col gap-10 items-center w-full">
            <header className="flex flex-col gap-8 items-center w-full">
              <figure className="h-9 w-27.75 relative">
                <Image
                  src={logoSrc}
                  alt="Company logo"
                  fill
                  sizes="111px"
                  className="object-contain"
                />
              </figure>
              <address className="flex flex-col gap-3 items-center text-white-1 type-body-2 text-center w-full not-italic">
                <p dir="auto">{address}</p>
                <p dir="auto">
                  <a
                    href={`tel:${phone.replace(/\s|-/g, "")}`}
                    aria-label={`Call us at ${phone}`}
                  >
                    {phone}
                  </a>
                </p>
              </address>
            </header>
            <ul
              className="flex gap-4 items-center"
              role="list"
              aria-label="Trust badges and certifications"
            >
              {badges.map((badge, index) => (
                <li
                  key={badge.id || index}
                  className="flex items-center justify-center w-16 h-20 rounded-lg"
                  role="listitem"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={64}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
          <nav className="w-full" aria-label="Footer navigation">
            <div className="flex flex-col items-start">
              <div className="flex flex-col gap-6 items-start px-6 w-full">
                <div className="flex gap-6 items-start w-full">
                  {allColumns.slice(0, 2).map((column, colIndex) => (
                    <section
                      key={column.id || colIndex}
                      className="flex-1 flex flex-col gap-6 items-start"
                      aria-labelledby={`footer-col-${colIndex}`}
                    >
                      <h2
                        id={`footer-col-${colIndex}`}
                        className="text-white type-captions whitespace-nowrap"
                      >
                        {column.title}
                      </h2>
                      <ul
                        className="flex flex-col gap-3 items-start w-full"
                        role="list"
                      >
                        {column.links.map((link, linkIndex) =>
                          renderLink(
                            link,
                            linkIndex,
                            "text-white-2 hover:text-white type-captions-2 text-right whitespace-nowrap transition-colors"
                          )
                        )}
                      </ul>
                    </section>
                  ))}
                </div>
                <div className="flex gap-6 items-start w-full">
                  {allColumns.slice(2, 4).map((column, colIndex) => (
                    <section
                      key={column.id || colIndex}
                      className="flex-1 flex flex-col gap-6 items-start"
                      aria-labelledby={`footer-col-${colIndex + 2}`}
                    >
                      <h2
                        id={`footer-col-${colIndex + 2}`}
                        className="text-white type-captions whitespace-nowrap"
                      >
                        {column.title}
                      </h2>
                      <ul
                        className="flex flex-col gap-3 items-start w-full"
                        role="list"
                      >
                        {column.links.map((link, linkIndex) =>
                          renderLink(
                            link,
                            linkIndex,
                            "text-white-2 hover:text-white type-captions-2 text-right whitespace-nowrap transition-colors"
                          )
                        )}
                      </ul>
                    </section>
                  ))}
                </div>
                {allColumns[4] && (
                  <section
                    className="flex flex-col gap-6 items-start w-full"
                    aria-labelledby="footer-col-4"
                  >
                    <h2
                      id="footer-col-4"
                      className="text-white type-captions whitespace-nowrap"
                    >
                      {allColumns[4].title}
                    </h2>
                    <ul
                      className="flex flex-col gap-3 items-start w-full"
                      role="list"
                    >
                      {allColumns[4].links.map((link, linkIndex) =>
                        renderLink(
                          link,
                          linkIndex,
                          "text-white-2 hover:text-white type-captions-2 text-right whitespace-nowrap transition-colors"
                        )
                      )}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </nav>
        </section>
        <section
          className="flex flex-col gap-10 items-center py-10 w-full border-t border-white-5 relative"
          aria-label="Social links and copyright"
        >
          <ul
            className="flex gap-5 items-center"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((social) => renderSocialLink(social))}
          </ul>
          <small className="text-white-2 type-captions-2 text-center">
            {copyrightText}
          </small>
        </section>
        {showGlowEffects && (
          <>
            <span
              className="glow-base glow-lg glow-color-green left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-30"
              aria-hidden="true"
            />
            <span
              className="glow-base glow-lg glow-color-blue right-0 top-1/2 translate-x-1/2 opacity-30"
              aria-hidden="true"
            />
          </>
        )}
      </div>
    </footer>
  );
}

FooterMobile.propTypes = {
  variant: PropTypes.oneOf(["full", "simple"]),
  logoSrc: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          label: PropTypes.string.isRequired,
          href: PropTypes.string,
        })
      ).isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(["aparat", "linkedin", "instagram", "youtube"])
        .isRequired,
      href: PropTypes.string,
    })
  ),
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  copyrightText: PropTypes.string,
  showGlowEffects: PropTypes.bool,
  className: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
};
