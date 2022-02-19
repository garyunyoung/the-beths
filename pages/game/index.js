import dynamic from "next/dynamic";

import Header from "../../components/partials/Header"

const Game2048 = dynamic(import("../../components/sections/Game2048"))

function Game() {
  return (
    <>
      <Header header="The Beths 2048" />
      <Game2048 />
    </>
  )
}

export default Game
