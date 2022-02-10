import NavigationMobile from "./sections/NavigationMobile";
import NavigationDesktop from "./sections/NavigationDesktop";

export default function Layout({ children }) {
  return (
    <>
      <NavigationMobile />
      <NavigationDesktop />
      <main>{children}</main>
      <h1>I AM FOOTER</h1>
    </>
  )
}