import React, { useState } from 'react';
import { navigationItems } from '../../data/data';
import { theBethsLogo } from '../../utilities/cloudinary'

import { ExternalLink, InternalLink } from '../partials/Links';
import Socials from './Socials';

import scss from '../../styles/Navigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className='navigation'>
        <Socials className='navigation__socials' modifier='desktop' />

        <InternalLink className='navigation__logo-wrapper' href='#'>
          <img className='navigation__logo' src={theBethsLogo} alt='' />
        </InternalLink>

        <button
          className='navigation__menu-button'
          onClick={() => toggleMenu()}
        >{isOpen ? 'CLOSE' : 'MENU'}
        </button>

        <nav className={`navigation-menu ${isOpen ? 'is-open' : ''}`}>
          <ul className='navigation-menu__nav-items'>
            {navigationItems.map((item) => (
              <li className='navigation-menu__nav-item'>{getNavLink(item)}</li>
            ))}
          </ul>
          <Socials className='navigation__socials' modifier='mobile' />
        </nav>
      </header>
      <style jsx>{scss}</style>
    </>
  );
}

function getNavLink({ href, hrefType, text }) {
  switch (hrefType) {
    case 'external':
      return <ExternalLink className='navigation-menu__nav-item-link' href={href}>{text}</ExternalLink>
    case 'internal':
      return <InternalLink className='navigation-menu__nav-item-link' href={href}>{text}</InternalLink>
    default:
      null
  }
}

