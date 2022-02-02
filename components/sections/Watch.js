import React, { useState } from "react";
import scss from "../../styles/Watch.scss";
import { urlFor } from "../../lib/sanity.js";


export default function Watch({ data }) {
  const jumpRopeGazersData = data.filter(video => video.album.name === 'Jump Rope Gazers')

  const [currentData, setCurrentData] = useState(jumpRopeGazersData);

  return (
    <section className="watch">
      <h2 className="watch-section__text">{currentData[0].album.name ?? 'misc'}</h2>
      <WatchSection videos={currentData} />
      <style jsx>{scss}</style>
    </section>
  );
}

function WatchSection({ videos }) {

  return (
    <div className="watch-section watch-section--is-open">
      <div className="watch-section__wrapper">
        {videos.map(({ name, thumbnail, url }, index) => (
          <Thumbnail
            key={index}
            name={name}
            thumbnail={thumbnail}
            url={url}
          />
        ))}
      </div>
    </div>
  );
}

function Thumbnail({
  name,
  thumbnail,
  url
}) {
  return (
    <div className="thumbnail">
      <div className="thumbnail__container">
        <a
          className="thumbnail__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="thumbnail__image"
            src={urlFor(thumbnail).url()}
            alt=""
          />
          <p className="thumbnail__text">
            {name}
          </p>
        </a>
      </div>
    </div>
  );
}
