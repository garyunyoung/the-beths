import React from "react";
import Socials from "./Socials";
import CTAButton from "./CTAButton";
import title from "./images/fmhm-title.png";
import outNow from './images/out-now.png';
import cpY from './images/cp-logo-y.jpg';
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <section className="home__content">
        <section className="home__wrapper">
          <img className="title" src={title} />
          <img className="outNow" src={outNow} />
          <img className="cpY" src={cpY} />

          <a
            className="cta__link"
            href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
            target="_blank"
            rel="noopener noreferrer"
          >
          <h1 className='cta'>purchase</h1>
          </a>
          <a
            className="cta__link"
            href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
            target="_blank"
            rel="noopener noreferrer"
          >
          <h1 className='cta'>stream</h1>
          </a>
          <Socials />
        </section>
      </section>
      <CTAButton />
    </section>
  );
}
