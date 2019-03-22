import React from "react";
import logoB from "./images/logo-b.png";
import fmhm from "./images/fmhm.jpg";
import fmhmDog from "./images/fmhm-dog.png";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <section className="landing">
      <div className="landing__bar">
        <img className="landing__logo" src={logoB} />
      </div>
      <h1 className="landing__text">
        <a
          className="landing__text--purchase"
          href="https://thebethsnz.bandcamp.com/album/future-me-hates-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          - purchase / stream -
        </a>
      </h1>
      <img className="landing__image" src={fmhm} />

      <h1 className="landing__text landing__text--outnow">
        future me hates me <br />
        out now!
      </h1>
      <a className="landing__text--link" href="#home">
        <div className="landing__text landing__text--enter">
          <p>enter site</p>
          <p>V</p>
        </div>
      </a>
      <img className="landing__dog" src={fmhmDog} />
    </section>
  );
}
