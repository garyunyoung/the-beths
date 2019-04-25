import React from "react";
import Socials from "./Socials";
import CTAButton from "./CTAButton";
import MailingList from './MailingList';
import title from "./images/fmhm-title.png";
import cpY from "./images/cp-logo-y.png";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <section className="home__content">
        <section className="home__wrapper">
          <img className="title" src={title} />
          <h1 className="titleText">future me hates me</h1>
          <h1 className="outNow">out now</h1>
          <a
            href="http://store.carparkrecords.com/products/615148-cak128-the-beths-future-me-hates-me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cpY" src={cpY} />
          </a>

          <a
            className="cta__link"
            href="http://smarturl.it/TheBethsFMHM-Digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="cta">digital</h1>
          </a>
          <a
            className="cta__link"
            href="http://smarturl.it/TheBethsFMHM-VinylCD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="cta">vinyl / cd</h1>
          </a>
          <Socials />
        </section>
      </section>
      <CTAButton />
      <MailingList/>
    </section>
  );
}
