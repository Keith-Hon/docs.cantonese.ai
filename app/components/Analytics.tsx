'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Declare gtag function type
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  // Send page view event when pathname changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
      window.gtag('config', process.env.NEXT_PUBLIC_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  if (!process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}