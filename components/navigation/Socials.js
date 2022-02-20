import { socials } from '../../data/data.js';

import getIcon from '../../utilities/icons';

import { ExternalLink } from '../shared/Links';

export default function Socials({ className, modifier = '' }) {
  return (
    <div className={`${className} ${className}--${modifier}`}>
      {socials.map(({ href, id }, index) =>
        <ExternalLink
          key={index}
          className={`${className}__social`}
          href={href}
        >{getIcon(id, 24, 24)}
        </ExternalLink>
      )}
    </div>
  )
}