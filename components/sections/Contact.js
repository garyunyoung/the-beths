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
          href='https://www.lookoutkid.com/'
        >
          Look Out Kid
        </ExternalLink>
        <ExternalLink

          href={`mailto:info@lookoutkid.com`}
        >
          info@lookoutkid.com
        </ExternalLink>
        {/* {contacts.map(({ email }, index) =>
          <ExternalLink
            key={index}
            href={`mailto:${email}`}
          >
            {email}
          </ExternalLink>
        )} */}
      </span>
      <span className='contact__section'>
        <h4 className='contact__header'>Bookings</h4>
        <ExternalLink
          href='https://tbaagency.com/'
        >
          TBA Agency (US/CA)
        </ExternalLink>
        <ExternalLink

          href={`mailto:mbetts@tbaagency.com`}
        >
          mbetts@tbaagency.com
        </ExternalLink>

        <br />
        <ExternalLink
          href='https://atc-live.com/'
        >
          ATC Live (UK/EU)
        </ExternalLink>
        <ExternalLink

          href={`mailto:alex@atc-live.com`}
        >
          alex@atc-live.com
        </ExternalLink>

        <br />
        <ExternalLink
          href='https://selectmusic.com.au/'
        >
          Select Music (AU)
        </ExternalLink>
        <ExternalLink

          href={`mailto:casey@selectmusic.com.au`}
        >
          casey@selectmusic.com.au
        </ExternalLink>

        <br />
        <ExternalLink
          href='https://onehundredpercent.nz/'
        >
          100% GOOD (NZ)
        </ExternalLink>
        <ExternalLink

          href={`mailto:anthony@onehundredpercent.nz`}
        >
          anthony@onehundredpercent.nz
        </ExternalLink>

      </span>
      <span className='contact__section'>
        <h4 className='contact__header'>Label</h4>
        {contactSectionRecordLabels.map(({ href, text }, index) =>
          <ExternalLink
            key={index}
            href={href}
          >
            {text}
          </ExternalLink>
        )}
      </span>
      {/* <span className='contact__section'>
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
      </span> */}

      <style jsx>{scss}</style>
    </section >
  );
}