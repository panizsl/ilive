"use client";
import { useWindowScroll, usePrevious } from "@mantine/hooks";

export function useScrollHeader(options = {}) {
  const { threshold = 50 } = options;

  const [scroll] = useWindowScroll();
  const previousScrollY = usePrevious(scroll.y) ?? 0;

  const isAtTop = scroll.y < threshold;

  // Determine visibility based on scroll direction
  const isScrollingDown = scroll.y > previousScrollY;
  const isPastThreshold = scroll.y > threshold;

  // Hide when scrolling down past threshold, show when scrolling up or at top
  const isVisible = isAtTop || !isScrollingDown || !isPastThreshold;

  return {
    isVisible,
    isAtTop,
    scrollY: scroll.y,
  };
}
