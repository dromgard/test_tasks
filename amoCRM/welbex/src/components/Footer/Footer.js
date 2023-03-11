import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">О компании</h3>
        <ul className="footer__list">
          <li><Link className="link footer__link" to="/" >Партнёрская программа</Link></li>
          <li><Link className="link footer__link" to="/" >Вакансии</Link></li>
        </ul>
      </div>
      <div className="footer__container">
        <h3 className="footer__title">Меню</h3>
        <nav className="footer__navigation">
          <ul className="footer__list">
            <li><Link className="link footer__link" to="/" >Расчёт стоимости</Link></li>
            <li><Link className="link footer__link" to="/" >Услуги</Link></li>
            <li><Link className="link footer__link" to="/" >Виджеты</Link></li>
            <li><Link className="link footer__link" to="/" >Интеграции</Link></li>
            <li><Link className="link footer__link" to="/" >Наши клиенты</Link></li>
          </ul>
          <ul className="footer__list">
            <li><Link className="link footer__link" to="/" >Кейсы</Link></li>
            <li><Link className="link footer__link" to="/" >Благодарственные письма</Link></li>
            <li><Link className="link footer__link" to="/" >Сертификаты</Link></li>
            <li><Link className="link footer__link" to="/" >Блог на Youtube</Link></li>
            <li><Link className="link footer__link" to="/" >Вопрос / Ответ</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer__container">
        <h3 className="footer__title">Контакты</h3>
        <ul className="footer__list">
          <li><p className="footer__text">+7 555 555-55-55</p></li>
          <li>
            <ul className="footer__social">
              <SocialLinks />
            </ul>
          </li>
          <li><p className="footer__link">Москва, Путевой проезд 3с1, к 902</p></li>
        </ul>
        <div className="footer__info">
          <p className="footer__info-text">©WELBEX 2022. Все права защищены.</p>
          <Link className="link footer__info-text" to="/" >Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;