import React from "react";

import Home from "./sections/Home";
import Watch from "./sections/Watch.js";
import Merch from "./sections/Merch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
import MailingList from "./shared/MailingList";
import { ConsentBanner } from "./shared/ConsentBanners.js";

import styles from '../styles/App.scss'

export default function App({
  data,
  hasConsent,
  setCookies }) {
  return (
    <main>
      <Home />
      <MailingList />
      <Watch />
      <Merch
        consent={hasConsent}
        merch={data.merchData} />
      <Tour
        consent={hasConsent}
        allowTracking={() => setCookies()} />
      <Contact
        contacts={data.contactData} />
      <ConsentBanner
        consent={hasConsent}
        allowTracking={() => setCookies()}
      />
      <style jsx>{styles}</style>
    </main>
  );
}
