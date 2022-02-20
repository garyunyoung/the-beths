import React from "react";
import Image from 'next/image'
import { urlFor } from "../../lib/sanity.js";

import Header from '../shared/Header.js';
import { ExternalLink } from '../shared/Links.js';

import scss from "../../styles/Merch.scss";

const storeLink = 'https://found.ee/thebeths_merch'

export default function Merch({ merch }) {
  return (
    <section id='merch' className="merch page page--merch">
      <Header text="featured merch" />
      <div className="merch__grid">
        {merch.map(({ name, thumbnail, isHidden }, index) => (
          <MerchThumbnail
            key={index}
            name={name}
            thumbnail={thumbnail}
            isHidden={isHidden}
          />
        ))}
      </div>
      <ExternalLink
        className={'link'}
        href={storeLink}
      >
        Visit Store
      </ExternalLink>
      <style jsx>{scss}</style>
    </section>
  );
}

function MerchThumbnail({ name, thumbnail, isHidden }) {
  return (
    <div className={`merch-thumbnail ${isHidden ? 'is-hidden' : ''}`}>
      <ExternalLink href={storeLink}>
        <Image
          className="merch-thumbnail__image"
          src={urlFor(thumbnail).url()}
          alt={`${name} thumbnail`}

          objectFit="contain"
          width={120}
          height={120}
        />
        <p className="merch-thumbnail__text">{name}</p>
      </ExternalLink>
    </div>
  );
}
