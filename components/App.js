import React, { useState, useEffect } from "react";
import { docCookies } from "./utilities/cookies.js";
import { tagManager } from "./utilities/google.js";
import Link from 'next/link'

import ConsentBanner from "./partials/ConsentBanner.js";
import FacebookPixel from "./utilities/facebookPixel.js";

import Header from "./partials/Header";
import Home from "./sections/Home";
import Merch from "./sections/Merch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";

import styles from '../styles/App.scss'

const cookieName = "beths-GDPR-consent";

export default function App({ data }) {
  const [hasConsent, setHasConsent] = useState(false)
  const [shouldShowYoutubePoster, setShouldShowYoutubePoster] = useState(true)

  useEffect(() => {
    const cookie = docCookies.getItem(cookieName);
    if (cookie !== null) {
      loadAnalytics();
    }
  })

  function loadAnalytics() {
    docCookies.setItem(cookieName, "accepted");
    setHasConsent(true)
    tagManager();
    FacebookPixel();
  }

  function loadFacebookPixels() {
    FacebookPixel()
  }



  return (
    <>
      {hasConsent ? loadFacebookPixels() : null}
      <section className="page page--home">
        <Home />
        <ConsentBanner
          consent={hasConsent}
          loadAnalytics={() => loadAnalytics()}
          allowTracking={() => loadAnalytics()}
        />
      </section>
      <section id="watch" className="page page--watch">
        <Header header="featured video" />
        <span className="aspect-ratio-box-outter">
          {shouldShowYoutubePoster ?
            <span
              className="aspect-ratio-box-inner page__latest-video-poster"
              onClick={() => setShouldShowYoutubePoster(false)}
              style={{ backgroundImage: `url('https://res.cloudinary.com/garyou/image/upload/v1644552695/the-beths/a-real-thing/a-real-thing-youtube-poster_g4wisv.png')` }}>
            </span> :
            <iframe
              className="aspect-ratio-box-inner"
              src="https://www.youtube.com/embed/vd2Rps0cMdo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>}
        </span>
        <Link href="/videos">
          <a className="link">View All Videos</a>
        </Link>
      </section>
      <section id="merch" className="page page--merch">
        <Header header="merch" />
        <Merch consent={hasConsent} merch={data.merchData} />
      </section>
      <section id="tour" className="page page--tour">
        <Header header="tour" />
        <Tour
          consent={hasConsent}
          allowTracking={() => loadAnalytics()}
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
