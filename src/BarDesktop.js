import React from "react";
import Sticky from "./Sticky";
import Socials from "./Socials";
import { NavItem, NavItemGame } from "./Nav";
import "./BarDesktop.scss";

export default function BarDesktop(props) {
  return (
    <Sticky>
      <nav className="barDesktop">
        <section className="barDesktop__socials">
          <Socials className="brDesktop__socials--icons" />
        </section>
        <a className="nav__item" href="#">
          <img
            className="barDesktop__logo"
            src={`${props.img}logo.png`}
            alt="the beths logo"
          />
        </a>
        <nav className="barDesktop__nav">
          <NavItem className="nav__item" text="merch" link="merch" />
          <NavItem className="nav__item" text="watch" link="watch" />
          <NavItem className="nav__item" text="tour" link="tour" />
          <NavItem className="nav__item" text="contact" link="contact" />
          <NavItemGame class='desk__nav__tui' img={props.img} toggleGame={props.toggleGame}/>
        </nav>
      </nav>
    </Sticky>
  );
}
