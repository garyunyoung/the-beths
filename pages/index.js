import Head from "next/head";
import App from "../components/App";
import { favicon } from "../components/utilities/cloudinary.js";
import { client } from '../lib/sanity';

const merchQuery = `*\[_type == "merch"\] {
  name, 
  url, 
  thumbnail{
    asset->{
      _id,
      url
    },
  },
}`;

const contactQuery = `*\[_type == "contact"\] {
  email,
}`;

export async function getStaticProps() {
  const merchData = await client.fetch(merchQuery);
  const contactData = await client.fetch(contactQuery);

  const data = { merchData, contactData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default function IndexPage({ data }) {
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

        {/* <!--Font --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Gaegu:300,400,700"
          rel="stylesheet"
        />

        {/* <!-- Generic Metadata + Analytics--> */}
        <meta
          name="description"
          content="New Live Album 'Auckland, New Zealand, 2020' out now on Carpark Records. Order here at thebeths.com."
        />
        {/* <!-- Facebook Metadata--> */}
        <meta property="fb:app_id" content="320561938462640" />
        <meta property="og:title" content="The Beths" />
        <meta
          property="og:description"
          content="New Live Album 'Auckland, New Zealand, 2020' out now on Carpark Records. Order here at thebeths.com."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garyou/image/upload/v1629343047/the-beths/town-hall-live-2020/facebook_820x312_out_now.jpg"
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
      <App data={data} />
    </div>
  );
}
