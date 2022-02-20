import React from 'react';

import {
  aRealThingSingleArt,
  aRealThingText,
  recordLabelLogos
} from '../../utilities/cloudinary.js'
import { homeSectionCallToActions } from '../../data/data.js';

import { ExternalLink } from '../shared/Links';

import scss from '../../styles/Home.scss';

export default function Home() {
  return (
    <section className='home page page--home'>
      <span className='home__top'>
        <span className='home__left'>
          <span className='home__single-art-wrapper'>
            <img
              className='home__single-art'
              src={aRealThingSingleArt}
              alt="Pink squiggles on an yellow orb designed by Phillipa Emery"
            />
          </span>
        </span>
        <span className='home__right'>
          <img
            className='home__text-image'
            src={aRealThingText}
            alt="The Beths 'A Real Thing' out now via Carpark Records and Ivy League Records"
          />
          <img
            className='home__record-label-logos'
            src={recordLabelLogos}
            alt=""
          />
        </span>
      </span>
      <div className='home__cta-links'>
        {homeSectionCallToActions.map(({ href, text }, index) => (
          <ExternalLink
            key={index}
            className='home__cta-link'
            href={href}
          >
            {text}
          </ExternalLink>
        ))}
      </div>
      <style jsx>{scss}</style>
    </section >
  );
}
