import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mini Donuts Caseras',
  description: 'Conviértete en experta en Mini Donuts Caseras',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="preload" href="https://player-vz-208f6759-5ea.tv.pandavideo.com.br/embed/css/styles.css" as="style" />
        <link rel="prerender" href="https://player-vz-208f6759-5ea.tv.pandavideo.com.br/embed/?v=7db8ac89-ff17-4d3d-9820-ac84a18501c6" />
        <link rel="preload" href="https://player-vz-208f6759-5ea.tv.pandavideo.com.br/embed/js/hls.js" as="script" />
        <link rel="preload" href="https://player-vz-208f6759-5ea.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js" as="script" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-208f6759-5ea/7db8ac89-ff17-4d3d-9820-ac84a18501c6.json" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-208f6759-5ea/config.json" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="https://b-vz-208f6759-5ea.tv.pandavideo.com.br/7db8ac89-ff17-4d3d-9820-ac84a18501c6/playlist.m3u8" as="fetch" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://b-vz-208f6759-5ea.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://player-vz-208f6759-5ea.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://vz-208f6759-5ea.b-cdn.net" />
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "68ff16dfb1be9af24fd7cda3";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          async
          defer
        ></Script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
