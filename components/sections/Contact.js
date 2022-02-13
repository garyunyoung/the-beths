import React from 'react';
import ExternalLink from '../partials/ExternalLink.js';

import { cpB } from '../utilities/cloudinary.js';

import scss from '../../styles/Contact.scss';

const recordLabels = [
  {
    href: 'http://carparkrecords.com/',
    text: 'Carpark Records'

  },
  {
    href: 'https://ivyleague.com.au/',
    text: 'Ivy League Records'
  }
]

export default function Contact({ contacts }) {
  return (
    <section className='contact'>
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
        {recordLabels.map(({ href, text }, index) =>
          <ExternalLink
            key={index}
            href={href}
            text={text} />
        )}
      </span>
      <span className='contact__logos'>
        <img className='contact__carpark-logo' src={cpB} alt='carpark records logo' />
      </span>
      <style jsx>{scss}</style>
    </section>
  );
}
