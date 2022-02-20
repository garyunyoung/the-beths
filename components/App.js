import React, { useState, useEffect } from "react";

import facebook from "../utilities/facebook.js";
import GoogleTagManager from "../utilities/google.js";
import { docCookies } from "../utilities/cookies.js";

import Home from "./sections/Home";
import MailingList from "./shared/MailingList";
import Watch from "./sections/Watch.js";
import Merch from "./sections/Merch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
import { ConsentBanner } from "./shared/ConsentBanners.js";

import styles from '../styles/App.scss'

const cookieName = "beths-GDPR-consent";

export default function App({ data }) {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const cookie = docCookies.getItem(cookieName);
    if (cookie !== null) {
      setCookies();
    }
  })

  function setCookies() {
    docCookies.setItem(cookieName, "accepted");
    setHasConsent(true)
    loadAnalytics()
  }

  function loadAnalytics() {
    facebook()
    GoogleTagManager();
  }

  return (
    <main>
      {hasConsent ? loadAnalytics() : null}
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
