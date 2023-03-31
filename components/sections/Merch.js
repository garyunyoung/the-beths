import React from "react";
import Image from 'next/image'
import { urlFor } from "../../lib/sanity.js";

import { nzStoreLink, auStoreLink, ukeuStoreLink, globalStoreLink, preorderLink } from "../../data/data.js";

import Header from '../shared/Header.js';
import { ExternalLink } from '../shared/Links.js';

import scss from "../../styles/Merch.scss";


export default function Merch({ merch }) {
  return (
    <section id='merch' className="merch page page--merch">
      <Header text="merch" />
      {/* <div className="merch__grid">
        {merch.map(({ name, thumbnail, isHidden, url = globalStoreLink }, index) => (
          <MerchThumbnail
            key={index}
            name={name}
            thumbnail={thumbnail}
            isHidden={isHidden}
            url={url}
          />
        ))}
      </div> */}
      <p className="merch__cta-title">Album:</p>
      <div className="merch__ctas">
        <ExternalLink
          className={'link'}
          href={preorderLink}
        >
          GLOBAL
        </ExternalLink>
      </div>

      <p className="merch__cta-title">Visit Store:</p>
      <div className="merch__ctas">
        <ExternalLink
          className={'link'}
          href={globalStoreLink}
        >
          GLOBAL
        </ExternalLink>
        <ExternalLink
          className={'link'}
          href={ukeuStoreLink}
        >
          UK/EU
        </ExternalLink>
        <ExternalLink
          className={'link'}
          href={auStoreLink}
        >
          AU
        </ExternalLink>

        <ExternalLink
          className={'link'}
          href={nzStoreLink}
        >
          NZ
        </ExternalLink>
      </div>
      <style jsx>{scss}</style>
    </section>
  );
}

function MerchThumbnail({ name, thumbnail, isHidden, url }) {
  return (
    <div className={`merch-thumbnail ${isHidden ? 'is-hidden' : ''}`}>
      <ExternalLink href={url}>
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
