import React from "react";

import Home from "./sections/Home";
import Watch from "./sections/Watch.js";
import Merch from "./sections/Merch";
import Tour from "./sections/Tour";
import Contact from "./sections/Contact";
import MailingList from "./shared/MailingList";

import styles from '../styles/App.scss'

export default function App({
  data,
  hasConsent,
  allowTracking }) {
  return (
    <>
      <Home />
      <Watch />
      <Merch
        merch={data.merchData} />
      <Tour
        hasConsent={hasConsent}
        allowTracking={allowTracking} />
      <Contact
        contacts={data.contactData} />
      <style jsx>{styles}</style>
    </>
  );
}
