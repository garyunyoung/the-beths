import NavigationMobile from "./sections/NavigationMobile";
import NavigationDesktop from "./sections/NavigationDesktop";

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