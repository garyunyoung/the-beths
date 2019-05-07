import React from "react";
import Sticky from "./Sticky";
import Socials from "./Socials";
import { NavItem, NavItemGame } from "./Nav";
import { Logo } from "./Bar";
import "./BarDesktop.scss";

export default function BarDesktop(props) {
  return (
    <Sticky>
      <nav className="barDesktop">
        <section className="barDesktop__socials">
          <Socials className="brDesktop__socials--icons" />
        </section>
        <Logo className="barDesktop__logo" />
        <nav className="barDesktop__nav">
          <NavItem className="nav__item" text="merch" link="merch" />
          <NavItem className="nav__item" text="watch" link="watch" />
          <NavItem className="nav__item" text="tour" link="tour" />
          <NavItem className="nav__item" text="contact" link="contact" />
          <NavItemGame class="nav__tui" toggleGame={props.toggleGame} />
        </nav>
      </nav>
    </Sticky>
  );
}
