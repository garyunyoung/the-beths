
import Link from 'next/link'

import { aRealThingVideoThumbnail } from "../../utilities/cloudinary";

import Header from '../shared/Header';
import { ExternalLink } from "../shared/Links";

import scss from "../../styles/Watch.scss"

export default function Watch() {
  return (
    <section id='watch' className="watch page page--watch">
      <Header text="latest video" />
      <span className="aspect-ratio-box-outter watch__latest-video-wrapper">
        {/* <ExternalLink
          href='https://youtu.be/vd2Rps0cMdo'
          >
          <img
          className='aspect-ratio-box-inner watch__latest-video-poster'
          src={aRealThingVideoThumbnail}
          alt=''
          />
        </ExternalLink> */}
        <iframe className='aspect-ratio-box-inner watch__latest-video-poster'
          src="https://www.youtube.com/embed/1XriDeVHO8w" title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </span>
      <p className="watch__song-name">The Beths - <i>&apos;Knees Deep&apos;</i></p>
      <Link href="/videos">
        <a className="link">View All Videos</a>
      </Link>
      <style jsx>{scss}</style>
    </section>
  )
}




