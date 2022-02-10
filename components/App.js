import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { docCookies } from "./utilities/cookies.js";
import { tagManager } from "./utilities/google.js";

import ConsentBanner from "./partials/ConsentBanner.js";
import FacebookPixel from "./utilities/facebookPixel.js";

import Header from "./partials/Header";
import Home from "./sections/Home";
import Merch from "./sections/Merch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
import MailingList from "./sections/MailingList";

import scss from "../styles/App.scss";

const Game = dynamic(import("./sections/Game"));

const cookieName = "beths-GDPR-consent";

export default function App({ data }) {
  const [gameIsOpen, setGameIsOpen] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const cookie = docCookies.getItem(cookieName);
    if (cookie !== null) {
      loadAnalytics();
    }

  })

  function toggleGame() {
    setGameIsOpen(true)
  }

  function gameVisibility() {
    if (gameIsOpen) {
      return <Game open={gameIsOpen} />;
    }
  }

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
      <MailingList />
      <section id="watch" className="page page--watch">
        <Header header="watch" />
        <p>featured video goes here</p>
        <p>See all videos link here</p>
      </section>
      <section id="merch" className="page page--merch">
        <Header header="merch" />
        <Merch consent={hasConsent} merch={data.merchData} />
      </section>
      <section id="game" className="page page--game">
        <Header header="game" open={gameIsOpen} />
        {gameVisibility()}
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

      <style jsx>{scss}</style>
    </>
  );

}
