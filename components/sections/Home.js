import React from 'react';

import scss from '../../styles/Home.scss';

export default function Home() {
  return (
    <section className='home'>
      <div className='home__single-art'
        style={{
          backgroundImage: `url('https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1644812004/the-beths/a-real-thing/CAKD80_TheBeths_ARealThing_pnebmg.tiff')`
        }}></div>
      <div className='home__cta-links '>
        <a
          className='home__cta-link'
          href='https://youtu.be/vd2Rps0cMdo'
          target='_blank'
          rel='noopener noreferrer'
        >
          WATCH VIDEO
        </a>
        <a
          className='home__cta-link'
          href='https://found.ee/beths_arealthing'
          target='_blank'
          rel='noopener noreferrer'
        >
          BUY / STREAM SINGLE
        </a>
      </div>
      <style jsx>{scss}</style>
    </section >
  );
}