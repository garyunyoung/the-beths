import dynamic from "next/dynamic";

import Header from "../../components/shared/Header";

const Game = dynamic(import("../../components/game/Game"))

export default function GamePage() {
  return (
    <>
      <Header text="The Beths 2048" />
      <Game />
    </>
  )
}
