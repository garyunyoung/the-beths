
import { client } from '../lib/sanity';

import App from "../components/App";

const merchQuery = `*\[_type == "merch"\] {
  name, 
  url, 
  thumbnail{
    asset->{
      _id,
      url
    },
  },
  isHidden
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

export default function IndexPage({
  data,
  hasConsent,
  setCookies }) {
  return (
    <div>
      <App
        data={data}
        hasConsent={hasConsent}
        setCookies={setCookies} />
    </div>
  );
}
