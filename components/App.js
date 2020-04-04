import React from "react";
import dynamic from "next/dynamic";
import { docCookies } from "./cookies";
import { tagManager } from "./google";
import Bar from "./Bar";
import NavbarDesktop from "./NavbarDesktop";
import SiteHeader from "./SiteHeader";
import Home from "./Home";
import ConsentBanner from "./ConsentBanner";
import MailingListBanner from "./MailingListBanner";
import Header from "./Header";
import Socials from "./_socials";

import Merch from "./Merch";
import Watch from "./Watch";
import Tour from "./Tour";
import Contact from "./Contact";
import scss from "../styles/App.scss";
const Game = dynamic(import("./Game"));

const cookieName = "beths-GDPR-consent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIsOpen: false,
      hasConsent: false
    };
  }

  componentDidMount() {
    const cookie = docCookies.getItem(cookieName);
    if (cookie !== null) {
      this.loadAnalytics();
    }
  }

  toggleGame() {
    this.setState(_props => ({
      gameIsOpen: true
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
  }

  render() {
    return (
      <React.Fragment>
        <SiteHeader toggleGame={() => this.toggleGame()} />
        <section className="page page--home">
          <Home />
          <ConsentBanner
            consent={this.state.hasConsent}
            loadAnalytics={() => this.loadAnalytics()}
            allowTracking={() => this.loadAnalytics()}
          />
        </section>
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
        <style jsx>{scss}</style>
      </React.Fragment>
    );
  }
}
