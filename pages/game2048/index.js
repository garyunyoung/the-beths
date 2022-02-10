import dynamic from "next/dynamic";

const Game = dynamic(import("../../components/sections/Game"))

function Game2048() {
  return (
    <Game />
  )
}

export default Game2048
