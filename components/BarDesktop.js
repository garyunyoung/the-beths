import React from "react";
import Sticky from "./Sticky";
import Socials from "./Socials";
import { NavItem, NavItemGame } from "./Nav";
import { Logo } from "./Bar";
import scss from "../styles/BarDesktop.scss";

export default function BarDesktop(props) {
  return (
    <Sticky>
      <Logo className="barDesktop__logo" />
      <nav className="barDesktop">
        <section className="barDesktop__socials">
          <Socials
            className="brDesktop__socials--icons"
            color={"black"}
            width={"22"}
            height={"22"}
          />
        </section>
        <nav className="barDesktop__nav">
          <NavItem className="nav__item" text="merch" link="merch" />
          <NavItem className="nav__item" text="watch" link="watch" />
          <NavItem className="nav__item" text="tour" link="tour" />
          <li className={`nav__item nav__item--blog`}>
            <a
              className="nav__link"
              href="https://breakfastandtravelupdates.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </li>
          <NavItem className="nav__item" text="contact" link="contact" />
          <NavItemGame class="nav__tui" toggleGame={props.toggleGame} />
        </nav>
        <style jsx>{scss}</style>
      </nav>
    </Sticky>
  );
}
