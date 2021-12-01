import React from 'react';
import deviceImage from '../images/sirius-20.jpg';
import shcart from '../images/shopping-cart.png';
import {Link} from "react-router-dom";

const DevicePage = () => {
    return (
        <div className="device-page">
            <div className="container">
                <div className="device">
                    <img src={deviceImage} className="device-img" alt="device"/>
                    <div className="container-device">
                        <h1>Сириус 20 л.</h1>
                        <div className="price">
                            <h2>570 руб.</h2> 
                            <Link to="/add-to-basket" className="shopping-cart-icon"><img src={shcart} className="shadow" alt="basket"/></Link>
                        </div>
                        <h3>Техническое описание:</h3>
                        <ul>
                            <li>Объем бака: 12 л</li>
                            <li>Диаметр бака: 26 см</li>
                            <li>Высота бака: 24 см</li>
                            <li>Высота в сборе: 28 см</li>
                            <li>Производительность: 0. 5 - 1 л/ч </li>
                            <li>Толщина дна бака: 2 мм</li>
                            <li>Толщина стенок бака: 1. 5 мм</li>
                            <li>Типы плит: газ, электро, индукция</li>
                            <li>Марка стали: AISI 430</li>
                            <li>Вес: 3. 3 кг</li>
                        </ul>
                        <h3>Гарантия: сервисное обслуживание 1 год</h3>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default DevicePage;