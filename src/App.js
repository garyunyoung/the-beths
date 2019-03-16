import React from "react";
import Bar from "./Bar";
import Home from "./Home";
import Header from "./Header";
import Merch from "./Merch";
import Watch from "./Watch";
import Tour from "./Tour";
import Contact from "./Contact";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Bar />
        <section id="home" className="page page--home">
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
