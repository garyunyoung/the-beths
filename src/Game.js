import React from "react";
import "./Game.scss";

export default function Game(props) {
  return (
    <section className={`game ${props.open ? "game--open" : ""} `}>
      <div class="game-area">
        <div class="game-curtain" />
        <div class="above-game">
          <div class="scores-container">
            <div class="score-container">
              <div class="score-label">SCORE</div>
              <div class="score">0</div>
            </div>
            <div class="best-container">
              <div class="score-label">BEST</div>
              <div class="score">0</div>
            </div>
            <a class="restart-button">New Game</a>
          </div>
        </div>

        <div class="game-container">
          <div class="game-message-container">
            <p class="game-message" />
            <div class="lower">
              <a class="keep-playing-button">Keep going</a>
              <a class="retry-button">Try again</a>
            </div>
          </div>
          <div class="grid-container">
            <div class="grid-row">
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
            </div>
            <div class="grid-row">
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
            </div>
            <div class="grid-row">
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
            </div>
            <div class="grid-row">
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
              <div class="grid-cell" />
            </div>
          </div>

          <div class="tile-container" />
        </div>
      </div>

      <p class="game-explanation">
        <strong class="important">How to play: </strong> Use your
        <strong> arrow keys</strong> to move the tiles. When two tiles with the
        same picture touch, they
        <strong> merge into one!</strong>
      </p>

    
      <div class="credits">
        Based on{" "}
        <a href="http://gabrielecirulli.github.io/2048/" target="_blank">
          2048 by Gabriele Cirulli
        </a>
        <br />
        Inspired by{" "}
        <a href="http://doge2048.com/" target="_blank">
          Doge 2048
        </a>
      </div>

      <div class="tile-stack">
        <div class="tile tile-4">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-2">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-8">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-16">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-32">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-64">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-128">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-256">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-512">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-1024">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-2048">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-4096">
          <div class="tile-inner" />
        </div>
        <div class="tile tile-8192">
          <div class="tile-inner" />
        </div>
      </div>
    </section>
  );
}
