import React from 'react';
import scss from '../../styles/Home.scss';

export default function Home() {
  return (
    <section className='home'>
      <div className='home__background-image-wrapper'
        style={{ backgroundImage: `url('https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1644545813/the-beths/a-real-thing/a-real-thing-background-mobile-edited_al5vua.png')` }}></div>
      <div className='home__background-image-wrapper home__background-image-wrapper--desktop'
        style={{ backgroundImage: `url('https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1644542011/the-beths/a-real-thing/a-real-thing-background-desktop-edited_wcvq0t.png')` }}></div>
      <div className='home__cta-links '>
        <a
          className='home__cta-link'
          href='https://found.ee/film_nz2020'
          target='_blank'
          rel='noopener noreferrer'
        >
          WATCH FILM
        </a>
        <a
          className='home__cta-link'
          href='https://found.ee/beths_nz2020'
          target='_blank'
          rel='noopener noreferrer'
        >
          BUY / STREAM LIVE ALBUM
        </a>
      </div>
      <style jsx>{scss}</style>
    </section >
  );
}