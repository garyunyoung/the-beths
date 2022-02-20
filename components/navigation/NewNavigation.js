import React, { useState } from 'react';
import { theBethsLogo } from '../../utilities/cloudinary'
import scss from '../../styles/NewNavigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className='navigation'>
        <a className='navigation__logo-wrapper' href='#'>
          <img className='navigation__logo' src={theBethsLogo} alt='' />
        </a>
        <MenuButton text={isOpen ? 'CLOSE' : 'MENU'} className='navigation__menu-button' onClick={toggleMenu} />
        <nav className={`navigation-menu ${isOpen ? 'is-open' : ''}`}>
          <ul className='navigation-menu__nav-items'>
            <InternalNavItem text='watch' link='/#videos' />
            <InternalNavItem text='merch' link='/#merch' />
            <InternalNavItem text='tour' link='/#tour' />
            <ExternalNavItem text='blog' link='https://found.ee/thebeths_bensblog' />
            <ExternalNavItem text='patreon' link='https://www.patreon.com/thebeths' />
            <InternalNavItem text='contact' link='/#contact' />
            <InternalNavItem text='👀' link='/game' />
          </ul>
        </nav>
      </header>
      <style jsx>{scss}</style>
    </>
  );
}

function ExternalNavItem({ link, text }) {
  return (
    <li className='navigation-menu__nav-item'>
      <a
        className='navigation-menu__nav-item-link'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {text}
      </a>
    </li>
  );
}

function InternalNavItem({ link, text }) {
  return (
    <li className='navigation-menu__nav-item'>
      <a
        className='navigation-menu__nav-item-link'
        href={link}
      >
        {text}
      </a>
    </li>
  );
}

function MenuButton({ className, onClick, text }) {
  return (
    <button
      className={className}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}