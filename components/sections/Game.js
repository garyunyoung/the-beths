import React from "react";
import GameManager from "../game/game_manager";
import KeyboardInputManager from "../game/keyboard_input_manager";
import HTMLActuator from "../game/html_actuator";
import LocalStorageManager from "../game/local_storage_manager";
import scssA from "../../styles/Game.scss";
import scssB from "../../styles/_gameHelpers.scss";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  }

  render() {
    return (
      <section className={`game ${this.props.open ? "is-open" : ""} `}>
        <div className="game-area">
          <div className="game-curtain" />
          <div className="above-game">
            <div className="scores-container">
              <div className="score-container">
                <div className="score-label">SCORE</div>
                <div className="score">0</div>
              </div>
              <div className="best-container">
                <div className="score-label">BEST</div>
                <div className="best">0</div>
              </div>
              <a className="restart-button">New Game</a>
            </div>
          </div>

          <div className="game-container">
            <div className="game-message-container">
              <p className="game-message" />
              <div className="lower">
                <a className="keep-playing-button">Keep going</a>
                <a className="retry-button">Try again</a>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-row">
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
              </div>
              <div className="grid-row">
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
              </div>
              <div className="grid-row">
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
              </div>
              <div className="grid-row">
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
                <div className="grid-cell" />
              </div>
            </div>

            <div className="tile-container" />
          </div>
        </div>
        <p className="game-explanation">
          <strong className="important">How to play: </strong>
          Swipe to join similar Beths and get to the final tile!
        </p>
        <div className="credits">
          Based on{" "}
          <a href="http://gabrielecirulli.github.io/2048/" target="_blank" rel="noreferrer">
            2048 by Gabriele Cirulli
          </a>
          <br />
          Inspired by{" "}
          <a href="http://doge2048.com/" target="_blank" rel="noreferrer">
            Doge 2048
          </a>
        </div>
        <div className="tile-stack">
          <div className="tile tile-4">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-2">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-8">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-16">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-32">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-64">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-128">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-256">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-512">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-1024">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-2048">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-4096">
            <div className="tile-inner" />
          </div>
          <div className="tile tile-8192">
            <div className="tile-inner" />
          </div>
        </div>
        <style jsx>{scssA}</style>
        <style jsx>{scssB}</style>
      </section>
    );
  }
}
