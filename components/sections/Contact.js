import React from 'react';

import { contactSectionRecordLabels } from '../../data/data.js';
import { carparkRecordsLogoBlack } from '../../utilities/cloudinary.js';

import Header from '../shared/Header.js';
import { ExternalLink } from '../shared/Links.js';

import scss from '../../styles/Contact.scss';

export default function Contact({ contacts }) {
  return (
    <section id='contact' className='contact page page--contact'>
      <Header text="contact" />
      <span className='contact__section'>
        <h4 className='contact__header'>Management</h4>
        <ExternalLink
          href='http://www.mam.land/'
        >
          Monster Artist Management (Global)
        </ExternalLink>
        {contacts.map(({ email }, index) =>
          <ExternalLink
            key={index}
            href={`mailto:${email}`}
          >
            {email}
          </ExternalLink>
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
      <span className='contact__section'>
        <h4 className='contact__header'>Booking</h4>
        <ExternalLink
          href='https://tbaagency.com/'
        >
          TBA Agency (US/CA)
        </ExternalLink>
        <ExternalLink
          href='https://hometown-talent.com/'
        >
          Hometown Talent Agency (UK/EU)
        </ExternalLink>
        <ExternalLink
          href='https://selectmusic.com.au/'
        >
          Select Music (AU)
        </ExternalLink>
        <ExternalLink
          href='https://onehundredpercent.nz/'
        >
          100% GOOD (NZ)
        </ExternalLink>
      </span>

      <style jsx>{scss}</style>
    </section>
  );
}