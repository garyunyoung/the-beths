import React from 'react';
import { ExternalLink } from '../shared/Links.js';

import { contactSectionRecordLabels } from '../../data/data.js';
import { carparkRecordsLogoBlack } from '../../utilities/cloudinary.js';

import Header from '../shared/Header.js';

import scss from '../../styles/Contact.scss';

export default function Contact({ contacts }) {
  return (
    <section id='contact' className='contact page page--contact'>
      <Header text="contact" />
      <span className='contact__section'>
        <h4 className='contact__header'>Management</h4>
        {contacts.map(({ email }, index) =>
          <a
            key={index}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        )}
      </span>
      <span className='contact__section'>
        <h4 className='contact__header'>Record Label</h4>
        {contactSectionRecordLabels.map(({ href, text }, index) =>
          <ExternalLink
            key={index}
            href={href}
          >
            {text}
          </ExternalLink>
        )}
      </span>
      <span className='contact__logos'>
        <img className='contact__carpark-logo' src={carparkRecordsLogoBlack} alt='' />
      </span>
      <style jsx>{scss}</style>
    </section>
  );
}