import Head from "next/head";
import App from "../components/App";
import { favicon } from "../components/cloudinary";

export default function IndexPage() {
  return (
    <div>
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

        {/* <!-- Font Awesome --> */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />

        {/* <!--Font --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Gaegu:300,400,700"
          rel="stylesheet"
        />

        {/* <!-- MailChimp CSS --> */}
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
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
          sizes="180x180"
          href="https://res.cloudinary.com/garyou/image/upload/c_scale,w_180/v1556808502/the-beths/home-mobile.png"
        />
        <meta name="apple-mobile-web-app-title" content="The Beths" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#000000" />

        {/* <!-- Generic Metadata + Analytics--> */}
        <meta
          name="description"
          content="New Zealand four-piece The Beths channel their longtime friendship into high-energy guitar pop with a smart lyrical bite."
        />
        <meta property="fb:app_id" content="320561938462640" />

        {/* <!-- Facebook Metadata--> */}
        <meta property="fb:app_id" content="320561938462640" />
        <meta property="og:title" content="The Beths - Official Website" />
        <meta
          property="og:description"
          content="Buy/Stream 'Future Me Hates Me'"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garyou/image/upload/c_scale,w_1200/the-beths/fb.jpg"
        />
        <meta property="og:image:width" content="1064" />
        <meta property="og:image:height" content="557" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebeths.com" />
        <meta
          property="og:image:alt"
          content="Picture of the Beths chilling on a ledge somewhere in New Zealand. Photo: Maison Fairey"
        />

        {/* <!-- Twitter Metadata--> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Picture of the Beths chilling on a ledge somewhere in New Zealand. Photo: Maison Fairey"
        />
      </Head>
      <App />
    </div>
  );
}
