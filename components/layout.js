import NewNavigation from './navigation/NewNavigation'

import globalStyles from '../styles/global.scss'

export default function Layout({ children }) {
  return (
    <>
      <NewNavigation />
      <main>{children}</main>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}