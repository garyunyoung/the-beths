import React, { useState } from 'react';

import { navigationItems } from '../../data/data';

import { MobileSocials, DesktopSocials } from './Socials';
import { ExternalLink, InternalLink } from '../shared/Links';

import scss from '../../styles/Navigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className='navigation'>
        <MobileSocials className='navigation-socials-mobile' />
        <DesktopSocials className='navigation-socials-desktop' />

        <button
          className='navigation__menu-button'
          onClick={() => toggleMenu()}
        >
          {isOpen ? 'X CLOSE' : '☰ MENU'}
        </button>

        <nav className={`navigation-menu ${isOpen ? 'is-open' : ''}`}>
          <ul>
            {navigationItems.map((item, index) => (
              <li key={index}>
                {getNavLink(item)}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <style jsx>{scss}</style>
    </>
  );
}

function getNavLink({ href, hrefType, text }) {
  switch (hrefType) {
    case 'external':
      return <ExternalLink
        className='navigation-menu__nav-item'
        href={href}
      >
        {text}
      </ExternalLink>
    case 'internal':
      return <InternalLink
        className='navigation-menu__nav-item'
        href={href}
      >
        {text}
      </InternalLink>
    default:
      null
  }
}

