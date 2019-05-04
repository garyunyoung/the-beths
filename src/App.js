import React from "react";
import cloudinary from "cloudinary-core";
import Bar from "./Bar";
import BarDesktop from "./BarDesktop";
import Home from "./Home";
import ConsentBanner from './ConsentBanner';
import Header from "./Header";
import Merch from "./Merch";
import Watch from "./Watch";
import Game from "./Game";
import Tour from "./Tour";
import Contact from "./Contact";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIsOpen: false
    };
  }

  toggleGame() {
    this.setState(_props => ({
      gameIsOpen: true
    }));
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
          <ConsentBanner/>
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
          <Tour img={cld} />
        </section>
        <section id="contact" className="page page--contact">
          <Header header="contact" />
          <Contact img={cld} />
        </section>
      </React.Fragment>
    );
  }
}
