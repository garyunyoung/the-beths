import React from "react";
import { urlFor } from "../../lib/sanity.js";
import Image from 'next/image'

import ExternalLink from '../partials/Links.js';

import scss from "../../styles/Merch.scss";

export default function Merch({ merch }) {
  return (
    <section className="merch">
      <div className="merch__grid">
        {merch.map(({ name, thumbnail, link }, index) => (
          <MerchThumbnail
            key={index}
            name={name}
            thumbnail={thumbnail}
            link={link}
          />
        ))}
      </div>
      <ExternalLink
        className={'link'}
        href={"https://found.ee/thebeths_merch"}>
        Visit Store
      </ExternalLink>
      <style jsx>{scss}</style>
    </section>
  );
}


function MerchThumbnail({ name, thumbnail, link }) {
  return (
    <div className="merch-thumbnail">
      <ExternalLink href={link}>
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
