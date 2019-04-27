import React from "react";
import Bar from "./Bar";
import BarDesktop from "./BarDesktop";
import Home from "./Home";
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
    return (
      <React.Fragment>
        <BarDesktop toggleGame={() => this.toggleGame()} />
        <Bar toggleGame={() => this.toggleGame()}/>
        <section className="page page--home">
          <Home />
        </section>
        <section id="merch" className="page page--merch">
          <Header header="merch" />
          <Merch />
        </section>
        <section id="watch" className="page page--watch">
          <Header header="watch" />
          <Watch />
        </section>
        <section id="game" className="page page--game">
          <Header header="game" open={this.state.gameIsOpen}/>
          <Game open={this.state.gameIsOpen}/>
        </section>
        <section id="tour" className="page page--tour">
          <Header header="tour" />
          <Tour />
        </section>
        <section id="contact" className="page page--contact">
          <Header header="contact" />
          <Contact />
        </section>
      </React.Fragment>
    );
  }
}
