import Navigation from './navigation/Navigation'

import globalStyles from '../styles/global.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}