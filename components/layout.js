import NavigationMobile from "./sections/NavigationMobile";
import NavigationDesktop from "./sections/NavigationDesktop";

export default function Layout({ children }) {
  function toggleGame() {
    return null
  }

  return (
    <>
      <NavigationMobile toggleGame={() => toggleGame()} />
      <NavigationDesktop toggleGame={() => toggleGame()} />
      <main>{children}</main>
      <h1>I AM FOOTER</h1>
    </>
  )
}