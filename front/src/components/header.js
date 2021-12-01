import shcart from '../images/shopping-cart.png';
import search from '../images/search.png';
import login from '../images/login.png';

import React from "react";
import {Link} from "react-router-dom";
import {BASKET_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, DISTILLERS_ROUTE, RELATED_ROUTE, ACCESSORIES_ROUTE, NEW_ROUTE, DELIVERY_ROUTE, CONTACTS_ROUTE} from "../utils/consts.js";

const Header = () => {
  return (
    <div className="header-box">
        <nav className="menu">
          <div className="panel-header">
            <Link to={MAIN_ROUTE} className="logo">Беловежская дымка</Link>
            <div className="search">
              <a href="/search" className="search-icon"><img src={search} className="shadow" alt="search"/></a>
            </div>
          </div>
          <ul>
            <li><Link to={DISTILLERS_ROUTE}>Дистилляторы</Link></li>
            <li><Link to={RELATED_ROUTE}>Сопутствующие товары</Link></li>
            <li><Link to={ACCESSORIES_ROUTE}>Комплектующие</Link></li>
            <li><Link to={NEW_ROUTE}>Новое</Link></li>
            <li><Link to={DELIVERY_ROUTE}>Доставка</Link></li>
            <li><Link to={CONTACTS_ROUTE}>Контакты</Link></li>
          </ul>
          <div className="shopping-cart">
            <div className="shopping-cart-number"><span>0</span></div>
            <Link to={BASKET_ROUTE} className="shopping-cart-icon"><img src={shcart} className="shadow" alt="basket"/></Link>
          </div>
          <div className="login">
            <Link to={LOGIN_ROUTE} className="login-icon"><img src={login} className="shadow" alt="login"/></Link>
          </div>
        </nav>
    </div>
  );
}

export default Header;