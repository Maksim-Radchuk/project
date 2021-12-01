import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {createDeviceAsync} from '../app/deviceSlice.js'

const Admin = () => {
    return (
        <div className="admin-page">
            <div className="container">
                <div className="admin">
                <Router>
                    <h1>Admin page</h1>
                    <Link to="/admin/add-brand" className="button">Добавить бренд</Link>
                    <Link to="/admin/add-device" className="button">Добавить устройство</Link>
                    <hr/>
                    <Switch>
                        <Route path="/admin/add-brand" component={AddBrand}/>
                        <Route path="/admin/add-device" component={AddDevice}/>
                    </Switch>
                </Router>
                </div>
            </div>
        </div>
    );
};

const AddBrand = () => {
    return (
        <div className="brand">
            <form>
                <h2>Brand</h2>
                <input className="brand-input" type="text" name="brand" placeholder="Введите название бренда"></input>
                <button className="brand-btn" type="submit">Добавить бренд</button>
            </form>
        </div>
    );
};

const AddDevice = () => {
    const dispatch = useDispatch();
    const data = {};
    function onSubmit(event){
        event.preventDefault()
        data.name = event.target.name.value;
        data.email = event.target.price.value;
        dispatch(createDeviceAsync(data));
    };

    const [info, setInfo] = useState([]);
    const addInfo = (event) => {
        event.preventDefault()
        setInfo([...info,{title: '', description: '', number: Date.now()}])
    };
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    };
    return (
        <div className="device">
            <form onSubmit={onSubmit}>
                <h2>Device</h2>
                <div>
                    <select>
                        <option>Brand</option>
                        <option>Brand1</option>
                        <option>Brand2</option>
                        <option>Brand3</option>
                        <option>Brand4</option>
                    </select>
                    <input className="brand-input" type="text" name="name" placeholder="Введите название устройства"></input>
                    <input className="brand-input" type="number" name="price" placeholder="Введите стоимость устройства"></input>
                    <input className="brand-input" type="file" name="brand"></input>
                    <button 
                        className="device-info-btn"
                        onClick={addInfo}
                    >Добавить характеристики</button>
                    {info.map(i =>
                            <ul key={i.number}>
                                <li><input className="brand-input" type="text" name="brand" placeholder="Введите название свойства"></input></li>
                                <li><input className="brand-input" type="text" name="brand" placeholder="Введите описание"></input></li>
                                <li><button className="device-btn" onClick={() => removeInfo(i.number)}>Удалить</button></li>
                            </ul>
                        )}
                    <button className="brand-btn" type={"submit"}>Добавить устройство</button>
                </div>
            </form>
        </div>
    );
};

export default Admin;