import dynamic from "next/dynamic";

import Header from "../../components/partials/Header"

const Game = dynamic(import("../../components/sections/Game"))

function Game2048() {
  return (
    <>
      <Header header="Game 2048" />
      <Game />
    </>
  )
}

export default Game2048
