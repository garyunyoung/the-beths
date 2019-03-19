import React from "react";
import Socials from "./Socials";
import CTAButton from "./CTAButton";
import logoW from "./images/logo-w.png";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <section className="home__content">
        <section className="home__wrapper">
          <Socials />
        </section>
      </section>
      <CTAButton />
      <img className="logo--w" src={logoW} alt="the beths logo"/>
    </section>
  );
}
