import React from 'react';
import ExternalLink from '../partials/Links';

import scss from '../../styles/Home.scss';

const aRealThingSingleArt = 'https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1644812004/the-beths/a-real-thing/CAKD80_TheBeths_ARealThing_pnebmg.tiff'

const callToActions = [
  {
    href: 'https://youtu.be/vd2Rps0cMdo',
    text: 'WATCH VIDEO'
  },
  {

    href: 'https://found.ee/beths_arealthing',
    text: 'BUY / STREAM SINGLE'
  }
]

export default function Home() {
  return (
    <section className='home'>
      <span className='home__single-art-wrapper'>
        <img
          className='home__single-art'
          src={aRealThingSingleArt}
          alt="Pink squiggles on an yellow orb designed by Phillipa Emery"
        />
      </span>

      <div className='home__cta-links '>
        {callToActions.map(({ href, text }, index) => (
          <ExternalLink
            className='home__cta-link'
            key={index}
            href={href}>
            {text}
          </ExternalLink>
        ))}
      </div>
      <style jsx>{scss}</style>
    </section >
  );
}