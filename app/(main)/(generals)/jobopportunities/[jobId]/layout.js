"use client";

import { useResponsive } from "@/shared/hooks/useResponsive";
import Footer from "@/layout/Footer";
import FooterMobile from "@/layout/mobile/FooterMobile";

/* Job Detail Layout */
export default function JobDetailLayout({ children }) {
  const { isMobile, isTablet, isReady } = useResponsive();

  if (!isReady) {
    return null;
  }

  const FooterComponent = isMobile || isTablet ? FooterMobile : Footer;

  return (
    <>
      {/* main content */}
      <main className="grow">{children}</main>

      <FooterComponent variant="simple" />
    </>
  );
}
