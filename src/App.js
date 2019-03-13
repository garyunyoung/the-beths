import React from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import Merch from "./Merch";
import Watch from "./Watch";
import Tour from "./Tour";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Nav />
        <section className="home">
          <Socials />
        </section>
        <Merch />
        <section className="watch">
          <Watch />
        </section>
        <section className="tour">
          <Tour />
        </section>
      </section>
    );
  }
}
