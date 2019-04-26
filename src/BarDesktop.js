import React from "react";
import Sticky from "./Sticky";
import Game from "./Game";
import logoBlack from "./images/logo-b.png";
import tui from "./images/tui.png";
import "./BarDesktop.scss";

export default class BarDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIsOpen: false
    };
  }

  toggleGame() {
    this.setState((prevState, _props) => ({
      gameIsOpen: !prevState.gameIsOpen
    }));
  }

  closeGame() {
    this.setState(_props => ({
      gameIsOpen: false
    }));
  }

  render() {
    return (
      <Sticky>
        <div className="barDesktop">
          <section className="barDesktop__socials">
            <a
              href="https://open.spotify.com/artist/7DjwIxbe8kpw4pqnzAMoin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="socials__icon socials__icon--spotify fab fa-spotify" />
            </a>
            <a
              href="https://www.facebook.com/thebethsnz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="socials__icon socials__icon--facebook fab fa-facebook-f" />
            </a>
            <a
              href="https://www.instagram.com/lizstokedstokes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="socials__icon socials__icon--instagram fab fa-instagram" />
            </a>
            <a
              href="https://twitter.com/lizstokedstokes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="socials__icon socials__icon--twitter fab fa-twitter" />
            </a>
            <a
              href="https://thebethsnz.bandcamp.com/music"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="socials__icon socials__icon--bandcamp fab fa-bandcamp" />
            </a>
          </section>
          <a className="nav__item" href="#" onClick={() => this.closeGame()}>
            <img
              className="barDesktop__logo"
              src={logoBlack}
              alt="the beths logo"
            />
          </a>
          <section className="barDesktop__nav">
            <a
              className="nav__item"
              href="#merch"
              onClick={() => this.closeGame()}
            >
              <p>merch</p>
            </a>
            <a
              className="nav__item"
              href="#watch"
              onClick={() => this.closeGame()}
            >
              <p>watch</p>
            </a>
            <a
              className="nav__item"
              href="#tour"
              onClick={() => this.closeGame()}
            >
              <p>tour</p>
            </a>
            <a
              className="nav__item"
              href="#contact"
              onClick={() => this.closeGame()}
            >
              <p>contact</p>
            </a>

            <a className="nav__item" onClick={() => this.toggleGame()}>
              <img className="nav__tui" src={tui} alt="tui bird" />
            </a>
          </section>
        </div>
        <Game open={this.state.gameIsOpen} />
      </Sticky>
    );
  }
}
