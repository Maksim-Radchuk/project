import React, {useState} from 'react';
import {Link, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE} from "../utils/consts.js";
import {login, registration} from "../http/userApi.js";
import {useSelector} from 'react-redux';
import {selectUser} from '../app/userSlice.js';

const Auth = () => {
    const user = useSelector(selectUser);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.isAuth[0] = true;
            history.push(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    };

    return (
        <div className="auth">
            <form className="auth-form" onSubmit={onSubmit}>
                <h1>{isLogin ? "Авторизация" : "Регистрация"}</h1>
                <label className="auth-label">
                    <p>Email</p>
                    <input className="auth-input" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Введите адресс электронной почты"/>
                </label>
                <label className="auth-label">
                    <p>Password</p>
                    <input className="auth-input" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Введите пороль"/>
                </label>
                <div className="auth-footer">
                    {isLogin ?
                    <div>
                    Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</Link>
                    </div>
                    :
                    <div>
                        Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите!</Link>
                    </div>
                    }
                <button className="btn-auth" type={"submit"}>
                    {isLogin ? "Войти" : "Регистрация"}
                </button>
                    
                </div>
            </form> 
        </div>
    );
};

export default Auth;