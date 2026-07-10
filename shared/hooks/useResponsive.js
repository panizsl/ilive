"use client";
import { useViewportSize, useMediaQuery } from "@mantine/hooks";

const DEFAULT_BREAKPOINTS = {
  tablet: 768,
  desktop: 1200,
};

export function useResponsive(options = {}) {
  const { breakpoints = DEFAULT_BREAKPOINTS } = options;
  const { width, height } = useViewportSize();

  // Use media queries for accurate breakpoint detection
  const isMobile = useMediaQuery(
    `(max-width: ${breakpoints.tablet - 1}px)`,
    false
  );
  const isTablet = useMediaQuery(
    `(min-width: ${breakpoints.tablet}px) and (max-width: ${
      breakpoints.desktop - 1
    }px)`,
    false
  );
  const isDesktop = useMediaQuery(
    `(min-width: ${breakpoints.desktop}px)`,
    false
  );

  // isReady becomes true once we have actual viewport dimensions
  const isReady = width > 0;

  return {
    isMobile,
    isTablet,
    isDesktop,
    isReady,
    width,
    height,
  };
}
