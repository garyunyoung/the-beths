import React from "react";
import Script from 'next/script'

export default function Google() {
  // GTM-M845XR9 | The Beths | 2019
  // GTM-MM2W9SX | Ivy League | Feb 2022

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        }(window, document, "script", "dataLayer", 'GTM-M845XR9');`,
        }}
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        }(window, document, 'script', 'dataLayer', 'GTM-MM2W9SX');`,
        }}
      />

      {/* AEG Pixel Snippet */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(e,t,n,a,i,l,o,s,r){e[i]||
            (o=e[i]=function(){o.process?
            o.process.apply(o,arguments):o.queue.push(arguments)
            },o.queue=[],o.t=1*new
            Date,s=t.createElement(n),s.async=1,s.src=a+"?
            t="+Math.ceil(new
            Date/l)*l,r=t.getElementsByTagName(n)
            [0],r.parentNode.insertBefore(s,r))}
            (window,document,"script","//tracking.aegpresents.co
            m/universalpixel/universalpixel.js","kl",864e5),kl("
            event","pageload");`,
        }}
      />

      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-M845XR9`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>

      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-MM2W9SX`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
    </>
  )
}