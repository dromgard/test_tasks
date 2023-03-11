import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SocialLinks from "../SocialLinks/SocialLinks";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <Link className="link logo" to="/" aria-label="Перейти на главную страницу" />
        <Navigation />
        <div className="header__contacts">
          <p className="header__text">+7 555 555-55-55</p>
          <ul className="header__social">
            <SocialLinks />
          </ul>
        </div>
      </div>
      <p className="header__description">крупный интегратор CRM в Росcии и ещё 8 странах</p>
    </div>
  );
}

export default Header;