import React from "react";
import Bar from "./Bar";
import Socials from "./Socials";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <section className="background-image">
        <Socials />
      </section>
    </section>
  );
}
