import React from "react";
import Home from "./Home";
import Bar from "./Bar";
import Header from "./Header";
import Merch from "./Merch";
import Watch from "./Watch";
import Tour from "./Tour";
import Contact from "./Contact";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Bar />
        <Home />
        <section id="merch" className="page page--merch">
          <Header heading="merch" />
          <Merch />
        </section>
        <section id="watch" className="page page--watch">
          <Header heading="watch" />
          <Watch />
        </section>
        <section id="tour" className="page page--tour">
          <Header heading="tour" />
          <Tour />
        </section>
        <section id="contact" className="page page--contact">
          <Header heading="contact" />
          <Contact />
        </section>
      </section>
    );
  }
}
