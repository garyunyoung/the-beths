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
        <span className='navigation__content'>
          <MobileSocials className='navigation-socials-mobile' />
          <DesktopSocials className='navigation-socials-desktop' />
          <nav className={`navigation-menu ${isOpen ? 'is-open' : ''}`}>
            <span className='navigation-menu__content'>
              <ul className='navigation-menu__nav-items'>
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    {getNavLink(item)}
                  </li>
                ))}
              </ul>
            </span>

            <button
              className='navigation-menu__menu-button'
              onClick={() => toggleMenu()}
            >
              {isOpen ? 'X CLOSE' : '☰ MENU'}
            </button>
          </nav>
        </span>
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

