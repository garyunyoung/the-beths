import React from "react";
import Socials from "./Socials";
import CTAButton from "./CTAButton";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <section className="home__content">
      <section className="home__wrapper">
        <Socials />
        <CTAButton/>
        </section>
      </section>
    </section>
  );
}
