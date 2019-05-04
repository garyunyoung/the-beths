import React from "react";
import cloudinary from "cloudinary-core";
import { docCookies } from "./cookies";
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
import "./App.scss";

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
    const cld =
      "https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto/the-beths/";

    let cl = cloudinary.Cloudinary.new({ cloud_name: "<Cloud Name>" });
    cl.responsive();

    return (
      <React.Fragment>
        <BarDesktop img={cld} toggleGame={() => this.toggleGame()} />
        <Bar img={cld} toggleGame={() => this.toggleGame()} />
        <section className="page page--home">
          <Home img={cld} />
          <ConsentBanner
            consent={this.state.hasConsent}
            loadAnalytics={() => this.loadAnalytics()}
            allowTracking={() => this.loadAnalytics()}
          />
        </section>
        <section id="merch" className="page page--merch">
          <Header header="merch" />
          <Merch img={cld} />
        </section>
        <section id="watch" className="page page--watch">
          <Header header="watch" />
          <Watch img={cld} />
        </section>
        <section id="game" className="page page--game">
          <Header header="game" open={this.state.gameIsOpen} />
          <Game open={this.state.gameIsOpen} />
        </section>
        <section id="tour" className="page page--tour">
          <Header header="tour" />
          <Tour
            img={cld}
            consent={this.state.hasConsent}
            allowTracking={() => this.loadAnalytics()}
          />
        </section>
        <section id="contact" className="page page--contact">
          <Header header="contact" />
          <Contact img={cld} />
        </section>
      </React.Fragment>
    );
  }
}
