import React from "react";
import fmhm from "./images/fmhm.jpg";
import logoB from "./images/logo-b.png";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <section className="landing">
      <div className="landing__bar">
        <img className="landing__logo" src={logoB} />
      </div>
      <h1 className="landing__text landing__text--purchase">
        purchase / stream
      </h1>
      <img className="landing__image" src={fmhm} />
      <h1 className="landing__text landing__text--outnow">
        future me hates me <br/>out now!
      </h1>
      <div className="landing__text landing__text--enter">
        <h1>enter site</h1>
        <h1>v</h1>
      </div>
    </section>
  );
}
