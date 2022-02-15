import React from 'react';
import ExternalLink from '../partials/Links';

import scss from '../../styles/Home.scss';

const cloudinaryModifiers = 'w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good'

const aRealThingSingleArt = `https://res.cloudinary.com/garyou/image/upload/${cloudinaryModifiers}/v1644812004/the-beths/a-real-thing/CAKD80_TheBeths_ARealThing_pnebmg.tiff`
const aRealThingText = `https://res.cloudinary.com/garyou/image/upload/${cloudinaryModifiers}/v1644812002/the-beths/a-real-thing/273789478_497108051784897_8220480832551824496_n_pjw2id.tiff`
const recordLabelLogos = `https://res.cloudinary.com/garyou/image/upload/${cloudinaryModifiers}/v1644812002/the-beths/a-real-thing/273700222_497313995097636_5507975374637040254_n_d2xt6p.tiff`

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