import React from 'react';
import deviceImage from '../images/sirius-20.jpg';
import shcart from '../images/shopping-cart.png';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = () => {
    const history = useHistory()
    return (
        <div className="device-item">
            <div className="device-card" onClick={()=> history.push(DEVICE_ROUTE + '/:id')}>
                <h2>Сириус 20 л.</h2>
                <img src={deviceImage} className="shadow" alt="device"/>
                <div className="container-card">
                    <h2>570 руб.</h2> 
                    <Link to="/add-to-basket" className="shopping-cart-icon"><img src={shcart} className="shadow" alt="basket"/></Link> 
                </div>
            </div>
        </div>
    );
};

export default DeviceItem;