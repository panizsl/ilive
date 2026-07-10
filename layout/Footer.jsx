import { useCallback } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
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

// Full Footer Component
export default function Footer({
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
        <div className="w-full px-10 py-10">
          <div className="flex flex-row items-start justify-between gap-8 max-w-360 mx-auto">
            {/* Company Info Section */}
            <section
              className="flex flex-row items-start gap-10"
              aria-label="Company information"
            >
              <figure
                className="shrink-0 relative"
                style={{ width: "147px", height: "48px" }}
              >
                <Image
                  src={logoSrc}
                  alt="Company logo"
                  fill
                  sizes="147px"
                  className="object-contain"
                />
              </figure>
              <address className="flex flex-col gap-3 text-right not-italic">
                <p className="text-white-1 type-body-2 max-w-md">{address}</p>
                <p className="text-white-1 type-body-2">
                  <a
                    href={`tel:${phone.replace(/\s|-/g, "")}`}
                    aria-label={`Call us at ${phone}`}
                  >
                    {phone}
                  </a>
                </p>
              </address>
            </section>

            {/* Trust Badges */}
            <ul
              className="flex flex-row gap-4 items-center"
              role="list"
              aria-label="Trust badges and certifications"
            >
              {badges.map((badge, index) => (
                <li
                  key={badge.id || index}
                  className="flex items-center justify-center w-16 h-20 rounded-lg bg-transparent"
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
        </div>

        {/* Glow Effects - Decorative */}
        {showGlowEffects && (
          <>
            <span
              className="glow-base glow-lg glow-color-green left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-30"
              aria-hidden="true"
            />
            <span
              className="glow-base glow-lg glow-color-blue right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-30"
              aria-hidden="true"
            />
          </>
        )}
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
      <div className="w-full px-10 py-10">
        <div className="flex flex-col gap-12 max-w-360 mx-auto">
          {/* Main Content */}
          <div className="flex flex-row gap-12 py-10">
            {/* Company Info Section */}
            <section
              className="flex flex-col gap-10 items-start w-98.75"
              aria-label="Company information"
            >
              <header className="flex flex-col gap-6 items-start">
                <figure
                  className="relative"
                  style={{ width: "147px", height: "48px" }}
                >
                  <Image
                    src={logoSrc}
                    alt="Company logo"
                    fill
                    sizes="147px"
                    className="object-contain"
                  />
                </figure>
                <address className="flex flex-col gap-3 text-white-1 type-body-2 text-right max-w-md not-italic">
                  <p>{address}</p>
                  <p>
                    <a
                      href={`tel:${phone.replace(/\s|-/g, "")}`}
                      aria-label={`Call us at ${phone}`}
                    >
                      {phone}
                    </a>
                  </p>
                </address>
              </header>

              {/* Trust Badges */}
              <ul
                className="flex flex-row gap-4 items-center"
                role="list"
                aria-label="Trust badges and certifications"
              >
                {badges.map((badge, index) => (
                  <li
                    key={badge.id || index}
                    className="flex items-center justify-center w-16 h-20 rounded-lg bg-transparent"
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
            </section>

            {/* Navigation Links Section */}
            <nav
              className="flex-1 grid grid-cols-5 gap-8"
              aria-label="Footer navigation"
            >
              {allColumns.map((column, colIndex) => (
                <section
                  key={column.id || colIndex}
                  className="flex flex-col gap-6 items-start"
                  aria-labelledby={`footer-col-${colIndex}`}
                >
                  <h2
                    id={`footer-col-${colIndex}`}
                    className="text-white type-subtitle-2 whitespace-nowrap"
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
                        "text-white-2 hover:text-white type-body-2 text-right transition-colors whitespace-nowrap"
                      )
                    )}
                  </ul>
                </section>
              ))}
            </nav>
          </div>

          {/* Footer Bottom - Social & Copyright */}
          <section
            className="flex flex-row items-center justify-between gap-6 py-10 border-t border-white-5"
            aria-label="Social links and copyright"
          >
            {/* Copyright */}
            <small className="text-white-2 type-body-2">{copyrightText}</small>

            {/* Social Links */}
            <ul
              className="flex flex-row gap-5 items-center"
              role="list"
              aria-label="Social media links"
            >
              {socialLinks.map((social) => renderSocialLink(social))}
            </ul>
          </section>
        </div>
      </div>

      {/* Glow Effects - Decorative */}
      {showGlowEffects && (
        <>
          <span
            className="glow-base glow-lg glow-color-green left-0 bottom-0 -translate-x-1/2 translate-y-1/2 opacity-30"
            aria-hidden="true"
          />
          <span
            className="glow-base glow-lg glow-color-blue right-0 bottom-0 translate-x-1/2 translate-y-1/2 opacity-30"
            aria-hidden="true"
          />
        </>
      )}
    </footer>
  );
}

Footer.propTypes = {
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
