"use client";

import Footer from "@/layout/Footer";
import FooterMobile from "@/layout/mobile/FooterMobile";
import { useResponsive } from "@/shared/hooks/useResponsive";

export default function DeveloperLayout({ children }) {
  const { isMobile, isTablet, isReady } = useResponsive();

  if (!isReady) return null;

  const FooterComponent = isMobile || isTablet ? FooterMobile : Footer;

  return (
    <>
      <main className="grow">{children}</main>

      <FooterComponent variant="simple" />
    </>
  );
}
