import React, { useState, useEffect } from "react";
import Head from "next/head";

import Google from "../utilities/google";
import Facebook from "../utilities/facebook.js";
import docCookies from "../utilities/cookies.js";

import { COOKIENAME } from '../data/constants'
import { favicon } from "../utilities/cloudinary.js";

import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const cookie = docCookies.getItem(COOKIENAME);
    const hasCookie = cookie !== null

    if (hasCookie) {
      allowTracking()
    }
  }, [])

  function allowTracking() {
    docCookies.setItem(COOKIENAME, "accepted");
    setHasConsent(true)
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>The Beths</title>
        <link rel="shortcut icon" href={favicon} />

        {/* Preload */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/the-beths/home-mobile_SM.jpg"
          as="image"
        />

        {/* <!-- Generic Metadata + Analytics--> */}
        <meta
          name="description"
          content="'Expert In A Dying Field (Deluxe)' out September 15. Preorder here at thebeths.com."
        />
        {/* <!-- Facebook Metadata--> */}
        <meta property="fb:app_id" content="320561938462640" />
        <meta property="og:title" content="The Beths" />
        <meta
          property="og:description"
          content="'Expert In A Dying Field (Deluxe)' out September 15. Prorder here at thebeths.com."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garyou/image/upload/v1655004552/the-beths/expert-in-a-dying-field/album-art.jpg"
        />
        <meta property="og:image:width" content="1064" />
        <meta property="og:image:height" content="557" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebeths.com" />
        <meta
          property="og:image:alt"
          content="Expert in a dying field album art"
        />

        {/* <!-- Twitter Metadata--> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Expert in a dying field album art"
        />

        {/* <!-- Mobile Compatibility --> */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta
          name="viewport"
          content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui"
        />

        {/* <!-- MacOS integration --> */}
        <link
          rel="mask-icon"
          href="https://res.cloudinary.com/garyou/image/upload/v1557135007/the-beths/logo-svg.svg"
          color="#f5dc4a"
        />

        {/* <!-- iOS integration --> */}
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/garyou/image/upload/c_scale,w_180/v1556808502/the-beths/home-mobile.png"
          sizes="180x180"
        />

        <meta name="apple-mobile-web-app-title" content="The Beths" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#000000" />
      </Head>


      {/* Analytics */}
      {hasConsent ? <Facebook /> : null}
      {hasConsent ? <Google /> : null}

      <Layout
        hasConsent={hasConsent}
        allowTracking={allowTracking}>
        <Component
          {...pageProps}
          allowTracking={allowTracking}
          hasConsent={hasConsent}
        />
      </Layout>
    </>
  )
}