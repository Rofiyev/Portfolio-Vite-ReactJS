import React, { useState } from 'react';
import { navbarLinks } from '../../Data';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='nav'>
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className="nav__list">
          {navbarLinks.map(({ icon, id, title, path }) => (
            <li className="nav__item" key={id}>
              <NavLink
                onClick={() => setShowMenu(prev => !prev)}
                to={path}
                className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}
              >
                <FontAwesomeIcon className='nav__icon' icon={icon} />
                <h3 className='nav__name'>{title}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__toggle" onClick={() => setShowMenu(prev => !prev)}>
        <FontAwesomeIcon icon={!showMenu ? faBars : faXmark} className='icon' />
      </div>
    </nav>
  )
}

export default Navbar