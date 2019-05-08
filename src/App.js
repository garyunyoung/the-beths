import React, { lazy, Suspense } from "react";
import cloudinary from "cloudinary-core";
import { docCookies } from "./cookies";
import Bar from "./Bar";
import BarDesktop from "./BarDesktop";
import Home from "./Home";
import ConsentBanner from "./ConsentBanner";
import Header from "./Header";
import Merch from "./Merch";
import Game from "./Game";
import Tour from "./Tour";
import "./App.scss";

// const Game = lazy(() => import("./Game"));
const Watch = lazy(() => import("./Watch"));
const Contact = lazy(() => import("./Contact"));

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
    this.setState({ hasConsent: true });
  }

  render() {
    let cl = cloudinary.Cloudinary.new({ cloud_name: "garyou" });
    cl.responsive();

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
            <Merch />
          </section>
          <section id="watch" className="page page--watch">
            <Header header="watch" />
            <Suspense fallback={<div>loading...</div>}>
              <Watch />
            </Suspense>
          </section>
          <section id="game" className="page page--game">
            <Header header="game" open={this.state.gameIsOpen} />
            <Suspense fallback={<div>loading...</div>}>
              <Game open={this.state.gameIsOpen} />
            </Suspense>
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
            <Suspense fallback={<div>loading...</div>}>
              <Contact />
            </Suspense>
          </section>
      </React.Fragment>
    );
  }
}
