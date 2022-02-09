import React, { useState } from 'react';
import SocialsDesktop from '../partials/SocialsDesktop';
import scss from '../../styles/Navigation.scss';

export default function NavigationDesktop(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleGame = () => {
    props.toggleGame()
  }

  return (
    <React.Fragment>
      <header className={`desktop-navigation ${isOpen ? 'is-open' : ''}`}>
        <div className='desktop-navigation__content'>
          <SocialsDesktop className='desktop-navigation-socials' width='18' color={'black'} />
          <nav className='desktop-navigation-menu'>
            <ul className='desktop-navigation-menu__nav-items'>
              <InternalNavItem text='Film' link='#' />
              <InternalNavItem text='Videos' link='/videos' />
              <InternalNavItem text='Merch' link='#merch' />
              <InternalNavItem text='Tour' link='#tour' />
              <ExternalNavItem text='Blog' link='https://found.ee/thebeths_bensblog' />
              <ExternalNavItem text='Patreon' link='https://www.patreon.com/thebeths' />
              <InternalNavItem text='Contact' link='#contact' />
              <GameNavItem text='???' onClick={toggleGame} link='#game' />
            </ul>
            <MenuButton text={isOpen ? 'X CLOSE' : '☰ MENU'} className='desktop-navigation__menu-button' onClick={toggleMenu} />
          </nav>
        </div>
      </header>
      <style jsx>{scss}</style>
    </React.Fragment>
  );
}

function ExternalNavItem(props) {
  return (
    <li className='desktop-navigation-menu__nav-item'>
      <a
        className='desktop-navigation-menu__nav-item-link'
        href={`${props.link}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.text}
      </a>
    </li>
  );
}

function InternalNavItem(props) {
  return (
    <li className='desktop-navigation-menu__nav-item'>
      <a
        className='desktop-navigation-menu__nav-item-link'
        href={`${props.link}`}
      >
        {props.text}
      </a>
    </li>
  );
}

function GameNavItem(props) {
  return (
    <li className='desktop-navigation-menu__nav-item'>
      <a
        className='desktop-navigation-menu__nav-item-link'
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