import React from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

let PageHeader = () => {
  return (
    <header className="page-header">
      <Container>
        <div class="page-header__logo-container">
          <Logo />
        </div>
        
        <ul className="page-header__menu">
          <li class="page-header__menu-item">
            <NavLink exact activeClassName="page-header__menu-item__link--active" className="page-header__menu-item__link" to="/">Home</NavLink>
          </li>
          <li class="page-header__menu-item">
            <NavLink exact activeClassName="page-header__menu-item__link--active" className="page-header__menu-item__link" to="/top">Top</NavLink>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default PageHeader;
