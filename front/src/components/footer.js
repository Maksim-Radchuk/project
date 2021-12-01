import inst from '../images/inst.png';
import vk from '../images/vk.png';
import telegram from '../images/telegram.png';
import viber from '../images/viber.png';

import {Link} from "react-router-dom";
import {MAIN_ROUTE, DISTILLERS_ROUTE, RELATED_ROUTE, ACCESSORIES_ROUTE, NEW_ROUTE, DELIVERY_ROUTE, CONTACTS_ROUTE} from "../utils/consts.js";

function Footer() {
  return (
    <div className="footer-box">
      <div className="container">
        <div className="question-box">
          <label className="text-field-label">У вас возникли вопросы?<br/> Мы с удовольствием ответим!</label>
          <input className="text-field-input" type="tel" name="question-number" id="question-number" placeholder="Оставьте свой номер и мы позвоним Вам!"/>
        </div>
        <div className="footer">
          <div className="panel-footer">
            <Link to={MAIN_ROUTE}>Беловежская дымка</Link>
            <ul>
              <li>г.Брест, ул.Московская, д.267</li>
              <li>aaa@gmail.com</li>
              <li>Тел. +375 (29) 000 00 00</li>
            </ul>
          </div>
          <div className="footer-list">
              <ul>
                <li><Link to={DISTILLERS_ROUTE}>Дистилляторы</Link></li>
                <li><Link to={RELATED_ROUTE}>Сопутствующие товары</Link></li>
                <li><Link to={ACCESSORIES_ROUTE}>Комплектующие</Link></li>
                <li><Link to={NEW_ROUTE}>Новое</Link></li>
                <li><Link to={DELIVERY_ROUTE}>Доставка</Link></li>
                <li><Link to={CONTACTS_ROUTE}>Контакты</Link></li>
              </ul>
            </div>
            <div className="footer-list">
              <ul>
                <li><a href="/bestsellers">Хиты продаж</a></li>
                <li><a href="/promotions">Акции</a></li>
                <li><a href="/reviews">Отзывы</a></li>
              </ul>
            </div>
            <div className="footer-icons">
              <ul>
                <li><a href="/inst"><img src={inst} className="shadow" alt="inst"/></a></li>
                <li><a href="/vk"><img src={vk} className="shadow" alt="vk"/></a></li>
                <li><a href="/telega"><img src={telegram} className="shadow" alt="telegram"/></a></li>
                <li><a href="/viber"><img src={viber} className="shadow" alt="vider"/></a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;