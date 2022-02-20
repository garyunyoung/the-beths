import { socials } from '../../data/data.js';

import getIcon from '../../utilities/icons';

import ExternalLink from '../partials/Links';

export default function Socials({ className, modifier = '' }) {
  return (
    <div className={`${className} ${className}--${modifier}`}>
      {socials.map(({ href, id }, index) =>
        <ExternalLink
          className={`${className}__social`}
          key={index}
          href={href}
        >{getIcon(id, 24, 24)}
        </ExternalLink>
      )}
    </div>
  )
}