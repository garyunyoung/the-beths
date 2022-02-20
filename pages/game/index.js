import dynamic from "next/dynamic";

import Header from "../../components/partials/Header"

const Game = dynamic(import("../../components/game/Game"))

export default function GamePage() {
  return (
    <>
      <Header header="The Beths 2048" />
      <Game />
    </>
  )
}