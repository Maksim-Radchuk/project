import './css/App.scss';
import Footer from './components/footer';
import Header from './components/header';
import {authRoutes, publicRoutes} from './routes.js';
import { MAIN_ROUTE } from './utils/consts.js';

import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
  const isAuth = false;
  return (
    <div className="App">
       <Router>
      <Header />
        <Switch>
          {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
          )}
          {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
          )}
          <Redirect to={MAIN_ROUTE}/>
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
