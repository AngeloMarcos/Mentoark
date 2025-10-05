import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import AnalyticsTracker from "./trackers"; // vamos criar já já

export const metadata: Metadata = {
  title: "Mentoark",
  description: "Automação inteligente, visual e explicável",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const FB_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* GA4 */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {FB_ID && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !(function(f,b,e,v,n,t,s){
                  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)
                })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            {/* no-script fallback */}
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </head>
      <body>
        {/* rastreia pageviews em trocas de rota */}
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
