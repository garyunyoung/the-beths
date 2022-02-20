import React, { useState, useEffect } from "react";
import Link from 'next/link'

import { docCookies } from "../utilities/cookies.js";
import facebook from "../utilities/facebook.js";
import GoogleTagManager from "../utilities/google.js";

import Header from "./partials/Header";
import Home from "./sections/Home";
import Merch from "./sections/Merch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
import ConsentBanner from "./partials/ConsentBanner.js";
import MailingList from "./partials/MailingList";

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
    <>
      {hasConsent ? loadAnalytics() : null}
      <section className="page page--home">
        <Home />
        <ConsentBanner
          consent={hasConsent}
          allowTracking={() => setCookies()}
        />
      </section>
      <MailingList />
      <section id="videos" className="page page--watch">
        <Header header="latest video" />
        <span className="aspect-ratio-box-outter page__latest-video-wrapper">
          <a
            className="aspect-ratio-box-inner page__latest-video-poster"
            href='https://youtu.be/vd2Rps0cMdo'
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1644552695/the-beths/a-real-thing/a-real-thing-youtube-poster_g4wisv.png')`
            }}>
          </a>
        </span>
        <Link href="/videos">
          <a className="link">View All Videos</a>
        </Link>
      </section>
      <section id="merch" className="page page--merch">
        <Header header="featured merch" />
        <Merch consent={hasConsent} merch={data.merchData} />
      </section>
      <section id="tour" className="page page--tour">
        <Header header="tour" />
        <Tour
          consent={hasConsent}
          allowTracking={() => setCookies()}
        />
      </section>
      <section id="contact" className="page page--contact">
        <Header header="contact" />
        <Contact contacts={data.contactData} />
      </section>
      <style jsx>{styles}</style>
    </>
  );
}
