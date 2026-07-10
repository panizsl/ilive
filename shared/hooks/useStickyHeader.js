"use client";

import { useState, useEffect, useMemo } from "react";
import { useWindowScroll, useResizeObserver } from "@mantine/hooks";

/**
 * Hook for sticky header behavior
 * @param {Object} options
 * @param {React.RefObject} options.containerRef - Ref to the container element (for boundary detection)
 * @returns {{ stickyRef: Function, isSticky: boolean, width: number, height: number }}
 */
export default function useStickyHeader(options = {}) {
  const { containerRef } = options;

  const [headerRef, headerRect] = useResizeObserver();
  const [scroll] = useWindowScroll();

  const [initialTop, setInitialTop] = useState(null);
  const [containerBottom, setContainerBottom] = useState(Infinity);

  const height = headerRect?.height || 0;
  const width = headerRect?.width || 0;

  // Get initial position of header and track container bottom
  useEffect(() => {
    if (headerRef.current && initialTop === null) {
      const rect = headerRef.current.getBoundingClientRect();
      setInitialTop(rect.top + window.scrollY);
    }
    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerBottom(rect.bottom);
    }
  }, [headerRef, containerRef, initialTop, scroll.y]);

  // Calculate sticky state
  const isSticky = useMemo(() => {
    if (initialTop === null) return false;
    const isPastTop = scroll.y >= initialTop;
    const isContainerVisible = containerBottom > height;
    return isPastTop && isContainerVisible;
  }, [scroll.y, initialTop, height, containerBottom]);

  return { stickyRef: headerRef, isSticky, width, height };
}
