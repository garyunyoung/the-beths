import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Socials from "./Socials";
import Merch from "./Merch";
import Watch from "./Watch";
import Tour from "./Tour";
import Contact from "./Contact";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Nav />
        <section className="home">
          <Socials />
        </section>
        <Header heading="merch"/>
          <Merch />
        <Header heading="watch"/>
          <Watch />
        <Header heading="tour"/>
          <Tour />
        <Header heading="contact"/>
          <Contact />
      </section>
    );
  }
}
