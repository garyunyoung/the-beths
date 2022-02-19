import NavigationMobile from "./navigation/NavigationMobile";
import NavigationDesktop from "./navigation/NavigationDesktop";

import globalStyles from '../styles/global.scss'

export default function Layout({ children }) {
  return (
    <>
      <NavigationMobile />
      <NavigationDesktop />
      <main>{children}</main>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}