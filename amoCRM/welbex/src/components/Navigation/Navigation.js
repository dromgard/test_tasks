import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li><Link className="link header__text" to="/" >Услуги</Link></li>
        <li><Link className="link header__text" to="/" >Виджеты</Link></li>
        <li><Link className="link header__text" to="/" >Интеграции</Link></li>
        <li><Link className="link header__text" to="/" >Кейсы</Link></li>
        <li><Link className="link header__text" to="/" >Сертификаты</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;