import React from 'react';
import scss from '../../styles/Home.scss';

export default function Home() {
  return (
    <section className='home'>
      <div className='home__background-image-wrapper'>
        <img className='home__background-image home__background-image' src='https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1629344430/the-beths/town-hall-live-2020/Beths_Live_Amazon_Artwork_Poster_Out_Now_zsacjy.jpg' alt="The Beths playing onstage at Auckland's Town Hall" />
        {/* <img className='home__background-image home__background-image--desktop' src='https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1629343962/the-beths/town-hall-live-2020/Beths_Live_Youtube_2048x1152_1_utnqgy.jpg' alt="The Beths playing onstage at Auckland's Town Hall" /> */}
        <img className='home__background-image home__background-image--desktop' src='https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto,f_auto,q_auto:good/v1634616653/the-beths/town-hall-live-2020/Beths_Live_Youtube_2048x1152_Out_Now_tan7np.jpg' alt="The Beths playing onstage at Auckland's Town Hall" />
      </div>
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
    </section>
  );
}