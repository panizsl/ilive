import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, X, ChevronLeft, LogIn } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import {
  servicesData,
  resourcesData,
  mobileMenuItems,
  socialLinks,
} from "@/shared/data/headerData";
import { DropdownItem } from "@/layout/components/mobile/DropdownItem";
import { MobileDropdown } from "@/layout/components/mobile/MobileDropdown";
import { SolutionsDropdown } from "@/layout/components/mobile/SolutionsDropdown";

// ==================== DROPDOWN DATA MAP ====================
const DROPDOWN_DATA = {
  services: { title: "خدمات ما", items: servicesData },
  resources: { title: "پایگاه دانش", items: resourcesData },
};

// ==================== DEFAULT MENU CONTENT ====================
function DefaultMenuContent({ onSubmenuClick, isOpen, onCloseMenu, products }) {
  const lastItemIndex = mobileMenuItems.length - 1;

  const handleSubmenuClick = useCallback(
    (dropdownType) => {
      onSubmenuClick(dropdownType);
    },
    [onSubmenuClick]
  );

  return (
    <>
      <nav
        className="flex-1 overflow-y-auto px-6 scrollbar-hidden"
        role="navigation"
        aria-label="Main mobile navigation"
      >
        {/* Products Section */}
        <section
          className="flex flex-col gap-3 items-start py-5 border-b border-[#3D6069]"
          aria-labelledby="products-heading"
        >
          <h2 id="products-heading" className="type-subtitle-2 text-white-3">
            محصولات
          </h2>
          <ul className="w-full" role="list" aria-label="Products list">
            {products.map((product) => (
              <li key={product.id || product.slug} role="listitem">
                <DropdownItem
                  title={product.title}
                  icon={product.icon}
                  color={product.color}
                  href={`/products/${product.slug}`}
                  onClick={onCloseMenu}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Menu Items */}
        <ul role="list" aria-label="Menu items">
          {mobileMenuItems.map((item, index) => (
            <li key={item.id} role="listitem">
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-19 items-center justify-between w-full py-5 cursor-pointer hover:bg-teritary-3 transition-colors",
                    index !== lastItemIndex && "border-b border-[#3D6069]"
                  )}
                  onClick={onCloseMenu}
                  aria-label={`Navigate to ${item.title}`}
                >
                  <span className="type-body-1 text-white">{item.title}</span>
                  <span aria-hidden="true" />
                </Link>
              ) : (
                <button
                  type="button"
                  className={cn(
                    "flex h-19 items-center justify-between w-full py-5 cursor-pointer hover:bg-teritary-3 transition-colors",
                    index !== lastItemIndex && "border-b border-[#3D6069]"
                  )}
                  onClick={() => {
                    if (item.hasSubmenu) {
                      handleSubmenuClick(item.dropdownType);
                    } else {
                      onCloseMenu();
                    }
                  }}
                  aria-expanded={item.hasSubmenu ? false : undefined}
                  aria-haspopup={item.hasSubmenu ? "menu" : undefined}
                  aria-label={
                    item.hasSubmenu ? `Open ${item.title} submenu` : item.title
                  }
                >
                  <span className="type-body-1 text-white">{item.title}</span>
                  {item.hasSubmenu ? (
                    <ChevronLeft
                      className="size-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <footer
        className="flex gap-5 items-center justify-center pt-6 px-5 shrink-0 pb-[max(1.5rem,env(safe-area-inset-bottom,1.5rem))]"
        aria-label="Social media links"
      >
        <ul className="flex gap-5 items-center" role="list">
          {socialLinks.map((social, index) => (
            <li key={social.id} role="listitem">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.alt} page`}
                className={cn(
                  "block transition-all duration-300",
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                )}
                style={{
                  transitionDelay: isOpen ? `${(index + 3) * 100}ms` : "0ms",
                }}
              >
                <Image
                  src={social.src}
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}

DefaultMenuContent.propTypes = {
  onSubmenuClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      icon: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

// ==================== MOBILE MENU PORTAL ====================
function MobileMenu({
  isOpen,
  activeSubmenu,
  setActiveSubmenu,
  onCloseMenu,
  products,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setMounted(true), 0);
    return () => {
      clearTimeout(timeoutId);
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBack = useCallback(
    () => setActiveSubmenu(null),
    [setActiveSubmenu]
  );

  if (!mounted) return null;

  const renderContent = () => {
    // Solutions has special layout with sections
    if (activeSubmenu === "solutions") {
      return (
        <SolutionsDropdown onBack={handleBack} onItemClick={onCloseMenu} />
      );
    }

    // Other dropdowns use simple list
    if (activeSubmenu && DROPDOWN_DATA[activeSubmenu]) {
      const { title, items } = DROPDOWN_DATA[activeSubmenu];
      return (
        <MobileDropdown
          title={title}
          items={items}
          onBack={handleBack}
          onItemClick={onCloseMenu}
        />
      );
    }

    // Default menu
    return (
      <DefaultMenuContent
        onSubmenuClick={setActiveSubmenu}
        isOpen={isOpen}
        onCloseMenu={onCloseMenu}
        products={products}
      />
    );
  };

  return createPortal(
    <aside
      className={cn(
        "fixed top-17 left-0 w-full bg-teritary-1 z-9999 transition-all duration-300 ease-in-out overflow-hidden flex flex-col",
        isOpen
          ? "h-[calc(100dvh-68px)] opacity-100 translate-y-0"
          : "h-0 opacity-0 -translate-y-4 pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      inert={!isOpen ? true : undefined}
    >
      {renderContent()}
    </aside>,
    document.body
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  activeSubmenu: PropTypes.oneOf(["solutions", "services", "resources", null]),
  setActiveSubmenu: PropTypes.func.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      icon: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

// ==================== MAIN COMPONENT ====================
export function HeaderMobile({ logoSrc, products = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) setActiveSubmenu(null);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, []);

  const headerTitle = isMenuOpen && !activeSubmenu ? "منوی اصلی" : null;

  return (
    <>
      <header
        className={cn(
          "bg-teritary-1 relative w-full h-17",
          isMenuOpen && "border-b border-white-3"
        )}
        role="banner"
      >
        <div className="flex items-center justify-between px-5 py-4 w-full h-full">
          {/* Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="size-6 text-white" aria-hidden="true" />
            ) : (
              <Menu className="size-6 text-white" aria-hidden="true" />
            )}
          </button>

          {/* Logo or Title */}
          {!isMenuOpen ? (
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 h-9 w-27.5"
              aria-label="Go to homepage"
            >
              <Image
                src={logoSrc}
                alt="iLive Logo"
                fill
                sizes="110px"
                className="object-contain object-center"
                priority
              />
            </Link>
          ) : headerTitle ? (
            <h1 className="type-subtitle-2 text-white" dir="auto">
              {headerTitle}
            </h1>
          ) : (
            <span aria-hidden="true" />
          )}

          {/* Login Button */}
          {!isMenuOpen ? (
            <button
              type="button"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Login to your account"
            >
              <LogIn className="size-6 text-primary-2" aria-hidden="true" />
            </button>
          ) : (
            <span className="w-6" aria-hidden="true" />
          )}
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
        onCloseMenu={closeMenu}
        products={products}
      />
    </>
  );
}

HeaderMobile.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      icon: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

export default HeaderMobile;
