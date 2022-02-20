import React, { useState, useEffect } from "react";
import Link from 'next/link'

import facebook from "../utilities/facebook.js";
import GoogleTagManager from "../utilities/google.js";
import { docCookies } from "../utilities/cookies.js";

import Header from "./partials/Header";
import Home from "./sections/Home";
import Merch from "./sections/Merch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
import { ConsentBanner } from "./partials/ConsentBanners.js";
import MailingList from "./partials/MailingList";

import { ExternalLink } from "./partials/Links.js";
import { aRealThingVideoThumbnail } from "../utilities/cloudinary.js";

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

      <section id="videos" className="page page--watch">
        <Header header="latest video" />
        <span className="aspect-ratio-box-outter page__latest-video-wrapper">
          <ExternalLink
            href='https://youtu.be/vd2Rps0cMdo'>
            <img
              className='aspect-ratio-box-inner page__latest-video-poster'
              src={aRealThingVideoThumbnail}
              alt='' />
          </ExternalLink>
        </span>
        <Link href="/videos">
          <a className="link">View All Videos</a>
        </Link>
      </section>

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
