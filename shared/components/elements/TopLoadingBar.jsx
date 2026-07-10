"use client";

import { useRef, Suspense, useCallback, useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLoading } from "@/shared/contexts/LoadingContext";

function LoadingBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isLoading: apiLoading } = useLoading();

  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const animationRef = useRef(null);
  const prevPathnameRef = useRef(pathname);
  const isLoadingRef = useRef(false);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const startLoading = useCallback(() => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;

    stopAnimation();
    setProgress(0);
    setIsVisible(true);

    let start = null;
    const duration = 8000;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const newProgress = Math.min((elapsed / duration) * 90, 90);
      setProgress(newProgress);
      if (elapsed < duration && isLoadingRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
  }, [stopAnimation]);

  const completeLoading = useCallback(() => {
    stopAnimation();
    isLoadingRef.current = false;
    setProgress(100);
    setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 200);
  }, [stopAnimation]);

  // کلیک روی لینک
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (!target?.href) return;

      try {
        const targetUrl = new URL(target.href);
        if (targetUrl.origin !== window.location.origin) return;

        const currentUrl = new URL(window.location.href);

        if (
          targetUrl.pathname !== currentUrl.pathname ||
          targetUrl.search !== currentUrl.search
        ) {
          startLoading();
        }
      } catch {
        return;
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, [startLoading]);

  // تغییر pathname - using setTimeout to avoid synchronous setState in effect
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      // Use setTimeout to defer setState call
      const timeoutId = setTimeout(() => {
        completeLoading();
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, searchParams, completeLoading]);

  // API loading - using setTimeout to avoid synchronous setState in effect
  useEffect(() => {
    let timeoutId;
    if (apiLoading) {
      timeoutId = setTimeout(() => {
        startLoading();
      }, 0);
    } else if (isLoadingRef.current) {
      timeoutId = setTimeout(() => {
        completeLoading();
      }, 0);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [apiLoading, startLoading, completeLoading]);

  useEffect(() => {
    return () => stopAnimation();
  }, [stopAnimation]);

  if (!isVisible) return null;

  return (
    <div
      dir="ltr"
      className="fixed top-0 left-0 right-0 z-100 h-0.5 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.15s" }}
    >
      <div
        className="h-full bg-secondary-1"
        style={{
          width: `${progress}%`,
          transition: progress === 100 ? "width 0.2s ease-out" : "none",
        }}
      />
    </div>
  );
}

export default function TopLoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarContent />
    </Suspense>
  );
}
