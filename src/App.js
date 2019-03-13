import React from "react";
import Merch from "./Merch";
import Nav from "./Nav";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Nav/>
        <section className="home-page">
        
        </section>

        <Merch/>
      </section>
    );
  }
}
