"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID!;
const FB_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID!;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // GA4 page_view
    if (GA_ID && typeof window.gtag === "function") {
      window.gtag("config", GA_ID, { page_path: url });
    }

    // Meta Pixel PageView (opcional reenviar)
    if (FB_ID && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}
