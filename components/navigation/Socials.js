import { useState } from 'react';

import { socials } from '../../data/data.js';
import getIcon from '../../utilities/icons';

import { ExternalLink } from '../shared/Links';


export function DesktopSocials({ className }) {
  const iconSize = 18

  return (
    <div className={className}>
      {socials.map(({ href, id }, index) =>
        <ExternalLink
          key={index}
          className={`${className}__social`}
          href={href}
        >
          {getIcon(id, iconSize, iconSize)}
        </ExternalLink>
      )}
    </div>
  )
}

export function MobileSocials({ className }) {
  const [isOpen, setIsOpen] = useState(true)

  const topSocials = socials.slice(0, 6)
  const bottomSocials = socials.slice(6)

  function iconSize(id) {
    switch (id) {
      case 'youtube':
        return 20
      case 'patreon':
        return 14;
      default:
        return 17
    }
  }

  return (
    <div className={`${className} ${isOpen ? 'is-open' : ''}`}>
      <div className={`${className}__content`}>
        {topSocials.map(({ href, id }, index) =>
          <ExternalLink
            key={index}
            className={`${className}__social`}
            href={href}
          >
            {getIcon(id, iconSize(id), iconSize(id))}
          </ExternalLink>
        )}
        <button
          className={`${className}__arrow`}
          onClick={() => setIsOpen(!isOpen)}
        >
          →
        </button>
      </div>

      <div className={`${className}__content ${className}__extra-socials`}>
        {bottomSocials.map(({ href, id }, index) =>
          <ExternalLink
            key={index}
            className={`${className}__social ${className}__social--${id}`}
            href={href}
          >
            {getIcon(id, iconSize(id), iconSize(id))}
          </ExternalLink>
        )}
      </div>
    </div >
  )
}
