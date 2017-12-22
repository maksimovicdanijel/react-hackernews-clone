import React from 'react';
import Container from './Container';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

let PageHeader = () => {
  return (
    <header className="page-header">
      <Container>
        <div className="page-header__logo-container">
          <Logo />
        </div>
        
        <ul className="page-header__menu">
          <li className="page-header__menu-item">
            <NavLink to="/" exact activeClassName="page-header__menu-item__link--active" className="page-header__menu-item__link">Home</NavLink>
          </li>
          <li className="page-header__menu-item">
            <NavLink to="/top" exact activeClassName="page-header__menu-item__link--active" className="page-header__menu-item__link">Top</NavLink>
          </li>
          <li className="page-header__menu-item">
            <NavLink to="/recent" exact activeClassName="page-header__menu-item__link--active" className="page-header__menu-item__link">Recent</NavLink>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default PageHeader;
