import React from "react";
import dynamic from "next/dynamic";
import { docCookies } from "./utilities/cookies.js";
import { tagManager } from "./utilities/google.js";
import NavigationMobile from "./sections/NavigationMobile";
import NavigationDesktop from "./sections/NavigationDesktop";
import Home from "./sections/Home";
import ConsentBanner from "./partials/ConsentBanner.js";
import MailingList from "./sections/MailingList";
import Header from "./partials/Header";
import FacebookPixel from "./utilities/facebookPixel.js";

import Merch from "./sections/Merch";
import Watch from "./sections/Watch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
import scss from "../styles/App.scss";
const Game = dynamic(import("./sections/Game"));

const cookieName = "beths-GDPR-consent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIsOpen: false,
      hasConsent: false,
    };
  }

  componentDidMount() {
    const cookie = docCookies.getItem(cookieName);
    if (cookie !== null) {
      this.loadAnalytics();
    }
  }

  toggleGame() {
    this.setState((_props) => ({
      gameIsOpen: true,
    }));
  }

  gameVisibility() {
    if (this.state.gameIsOpen) {
      return <Game open={this.state.gameIsOpen} />;
    }
  }

  loadAnalytics() {
    docCookies.setItem(cookieName, "accepted");
    this.setState({ hasConsent: true });
    tagManager();
    FacebookPixel();
  }

  loadFacebookPixels() {
    FacebookPixel()
  }

  render() {
    return (
      <React.Fragment>
        {this.state.hasConsent ? this.loadFacebookPixels() : null}
        <NavigationMobile toggleGame={() => this.toggleGame()} />
        <NavigationDesktop toggleGame={() => this.toggleGame()} />
        <section className="page page--home">
          <Home />
          <ConsentBanner
            consent={this.state.hasConsent}
            loadAnalytics={() => this.loadAnalytics()}
            allowTracking={() => this.loadAnalytics()}
          />
        </section>
        <div className="divider"></div>

        <section id="watch" className="page page--watch">
          <Header header="watch" />
          <Watch />
        </section>
        <section id="merch" className="page page--merch">
          <Header header="merch" />
          <Merch consent={this.state.hasConsent} />
        </section>
        <section id="game" className="page page--game">
          <Header header="game" open={this.state.gameIsOpen} />
          {this.gameVisibility()}
        </section>
        <section id="tour" className="page page--tour">
          <Header header="tour" />
          <Tour
            consent={this.state.hasConsent}
            allowTracking={() => this.loadAnalytics()}
          />
        </section>
        <section id="contact" className="page page--contact">
          <Header header="contact" />
          <Contact />
        </section>
        <MailingList />

        <style jsx>{scss}</style>
      </React.Fragment>
    );
  }
}
