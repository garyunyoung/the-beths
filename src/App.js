import React from "react";
import Merch from "./Merch";
import Socials from "./Socials";
import Nav from "./Nav";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Nav />
        <section className="home">
          <section className="home__subsection">
            <Socials />
          </section>
        </section>
        {/* <Merch/> */}
      </section>
    );
  }
}
