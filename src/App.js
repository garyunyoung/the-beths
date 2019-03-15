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
        <Header heading="merch" />
        <Merch />
        <Header heading="watch" />
        <Watch />
        <Header heading="tour" />
        <Tour />
        <Header heading="contact" />
        <Contact />
      </section>
    );
  }
}
