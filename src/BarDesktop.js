import React from "react";
import Sticky from "./Sticky";
import Socials from "./Socials";
import "./BarDesktop.scss";

export default function BarDesktop(props) {
  return (
    <Sticky>
      <nav className="barDesktop">
        <section className="barDesktop__socials">
          <Socials test="brDesktop__socials--icons" />
        </section>
        <a className="nav__item" href="#">
          <img
            className="barDesktop__logo"
            src={`${props.img}logo.png`}
            alt="the beths logo"
          />
        </a>
        <nav className="barDesktop__nav">
          <a className="nav__item" href="#merch">
            merch
          </a>
          <a className="nav__item" href="#watch">
            watch
          </a>
          <a className="nav__item" href="#tour">
            tour
          </a>
          <a className="nav__item" href="#contact">
            contact
          </a>

          <a className="nav__item" href="#game" onClick={props.toggleGame}>
            <img
              className="nav__tui cld-responsive"
              src={`${props.img}tui.png`}
              alt="tui bird"
            />
          </a>
        </nav>
      </nav>
    </Sticky>
  );
}
