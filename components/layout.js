import NavigationMobile from "./sections/NavigationMobile";
import NavigationDesktop from "./sections/NavigationDesktop";
import MailingList from "../components/sections/MailingList";

import globalStyles from '../styles/global.js'

export default function Layout({ children }) {
  return (
    <>
      <NavigationMobile />
      <NavigationDesktop />
      <main>{children}</main>
      <MailingList />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}