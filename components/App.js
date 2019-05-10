import React from "react";
import { docCookies } from "./cookies";
import { tagManager } from './google';
import Bar from "./Bar";
import BarDesktop from "./BarDesktop";
import Home from "./Home";
import ConsentBanner from "./ConsentBanner";
import Header from "./Header";
import Merch from "./Merch";
import Watch from "./Watch";
import Game from "./Game";
import Tour from "./Tour";
import Contact from "./Contact";
import scss from "../styles/App.scss";

const cookieName = "beths-EU-consent";

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


  loadAnalytics() {
    docCookies.setItem(cookieName, "accepted");
    this.setState({ hasConsent: true });

    // let script = document.createElement("script"); // create a script DOM node
    // script.src = "https://www.googletagmanager.com/gtag/js?id=UA-128211149-2"; // set its src to the provided URL
    // document.head.appendChild(script);

    // window.dataLayer = window.dataLayer || [];
    // function gtag() {
    //   window.dataLayer.push(arguments);
    // }

    // gtag("js", new Date());
    // gtag("config", "UA-128211149-2");

    // tagManager()
  }

  render() {
    return (
      <React.Fragment>
        <BarDesktop toggleGame={() => this.toggleGame()} />
        <Bar toggleGame={() => this.toggleGame()} />
        <section className="page page--home">
          <Home />
          <ConsentBanner
            consent={this.state.hasConsent}
            loadAnalytics={() => this.loadAnalytics()}
            allowTracking={() => this.loadAnalytics()}
          />
        </section>
        <section id="merch" className="page page--merch">
          <Header header="merch" />
          <Merch consent={this.state.hasConsent}/>
        </section>
        <section id="watch" className="page page--watch">
          <Header header="watch" />
          <Watch />
        </section>
        <section id="game" className="page page--game">
          <Header header="game" open={this.state.gameIsOpen} />
          <Game open={this.state.gameIsOpen} />
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
