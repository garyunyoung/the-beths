import React, { useState } from 'react';
import SocialsMobile from '../navigation/SocialsMobile';
import scss from '../../styles/Navigation.scss';

export default function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className='mobile-navigation'>
        <div className='mobile-navigation__content'>
          <MenuButton text={isOpen ? 'X CLOSE' : '☰ MENU'} className='mobile-navigation-menu__menu-button' onClick={toggleMenu} />
          <SocialsMobile className='mobile-navigation-socials' width='18' color={'black'} />
        </div>
      </header>

      <nav className={`mobile-navigation-menu  ${isOpen ? 'is-open' : ''}`} >
        <ul className='mobile-navigation-menu__nav-items'>
          <ExternalNavItem text='Film' onClick={closeMenu} link='https://found.ee/film_nz2020' />
          <InternalNavItem text='Videos' onClick={closeMenu} link='/#videos' />
          <InternalNavItem text='Merch' onClick={closeMenu} link='/#merch' />
          <InternalNavItem text='Tour' onClick={closeMenu} link='/#tour' />
          <ExternalNavItem text='Blog' onClick={closeMenu} link='https://found.ee/thebeths_bensblog' />
          <ExternalNavItem text='Patreon' onClick={closeMenu} link='https://www.patreon.com/thebeths' />
          <InternalNavItem text='Game' onClick={closeMenu} link='/Game' />
          <InternalNavItem text='Contact' onClick={closeMenu} link='/#contact' />
        </ul>
      </nav>
      <style jsx>{scss}</style>
    </>
  );
}

function ExternalNavItem(props) {
  return (
    <li className='mobile-navigation-menu__nav-item'>
      <a
        className='mobile-navigation-menu__nav-item-link'
        href={`${props.link}`}
        target='_blank'
        rel='noopener noreferrer'
        onClick={() => props.onClick()}
      >
        {props.text}
      </a>
    </li>
  );
}

function InternalNavItem(props) {
  return (
    <li className='mobile-navigation-menu__nav-item'>
      <a
        className='mobile-navigation-menu__nav-item-link'
        href={`${props.link}`}
        onClick={() => props.onClick()}
      >
        {props.text}
      </a>
    </li>
  );
}

function MenuButton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  );
}