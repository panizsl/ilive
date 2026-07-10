"use client";

import { useLoading } from "@/shared/contexts/LoadingContext";

/**
 * Hook برای استفاده از لودینگ در کامپوننت‌ها
 *
 * مثال استفاده:
 *
 * const { withLoading } = useApiLoading();
 *
 * const handleClick = async () => {
 *   await withLoading(async () => {
 *     // درخواست API یا عملیات async
 *     await someApiCall();
 *   });
 * };
 */
export function useApiLoading() {
  const { startLoading, stopLoading, isLoading } = useLoading();

  const withLoading = async (asyncFunction) => {
    try {
      startLoading();
      return await asyncFunction();
    } finally {
      stopLoading();
    }
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
  };
}
