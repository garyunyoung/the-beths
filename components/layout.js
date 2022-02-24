import Navigation from './navigation/Navigation'
import { ConsentBanner } from './shared/ConsentBanners'

import globalStyles from '../styles/_global.scss'

export default function Layout({
  children,
  hasConsent,
  allowTracking }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <ConsentBanner
        hasConsent={hasConsent}
        allowTracking={allowTracking}
      />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}