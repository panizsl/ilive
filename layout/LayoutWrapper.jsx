"use client";

import PropTypes from "prop-types";
import { useScrollHeader } from "@/shared/hooks/useScrollHeader";
import Header from "@/layout/Header";
import HeaderMobile from "@/layout/mobile/HeaderMobile";
import Footer from "@/layout/Footer";
import FooterMobile from "@/layout/mobile/FooterMobile";
import { cn } from "@/shared/utils/cn";
import { LoadingProvider } from "@/shared/contexts/LoadingContext";
import TopLoadingBar from "@/shared/components/elements/TopLoadingBar";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
  headerProducts = [],
  footerProducts = [],
}) {
  const { isVisible } = useScrollHeader(50);
  const pathname = usePathname();

  const isJobDetailPage = pathname?.match(/\/jobopportunities\/[^/]+$/);
  const isDeveloperPage = pathname === "/developer";
  const shouldHideMainFooter = isJobDetailPage || isDeveloperPage;
  return (
    <LoadingProvider>
      <div className="min-h-screen flex flex-col bg-teritary-1 overflow-x-hidden">
        <TopLoadingBar />

        {/* Header Glow Effects - Desktop only */}
        <div
          className="fixed top-0 left-0 right-0 z-60 pointer-events-none h-0 hidden desktop:block"
          aria-hidden="true"
        >
          <span className="glow-base glow-lg glow-color-green left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-30" />
          <span className="glow-base glow-lg glow-color-blue right-0 top-0 translate-x-1/2 -translate-y-1/2 opacity-30" />
        </div>

        {/* Header - CSS-based responsive */}
        <div
          className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out",
            isVisible ? "translate-y-0" : "-translate-y-full",
          )}
        >
          {/* Mobile Header */}
          <div className="desktop:hidden">
            <HeaderMobile
              logoSrc="/assets/logo/iLiveLogo.svg"
              products={headerProducts}
            />
          </div>
          {/* Desktop Header */}
          <div className="hidden desktop:block">
            <Header
              logoSrc="/assets/logo/iLiveLogo.svg"
              products={headerProducts}
            />
          </div>
        </div>

        {/* Main Content */}
        <main
          id="main-content"
          className="flex-1 pt-17 desktop:pt-23"
          role="main"
        >
          {children}
        </main>

        {/* Footer - CSS-based responsive */}
        {!shouldHideMainFooter && (
          <>
            <div className="desktop:hidden mt-auto">
              <FooterMobile
                logoSrc="/assets/logo/iLiveLogo.svg"
                variant="full"
                products={footerProducts}
              />
            </div>
            <div className="hidden desktop:block mt-auto">
              <Footer
                logoSrc="/assets/logo/iLiveLogo.svg"
                variant="full"
                products={footerProducts}
              />
            </div>
          </>
        )}
      </div>
    </LoadingProvider>
  );
}

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  headerProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      icon: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
  footerProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  ),
};
