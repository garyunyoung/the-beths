import NavigationMobile from "./sections/NavigationMobile";
import NavigationDesktop from "./sections/NavigationDesktop";
import MailingList from "../components/sections/MailingList";

export default function Layout({ children }) {
  return (
    <>
      <NavigationMobile />
      <NavigationDesktop />
      <main>{children}</main>
      <MailingList />
    </>
  )
}