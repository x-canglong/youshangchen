import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import index from '@/pages/index/index';
import login from '@/pages/user/login';
import register from '@/pages/user/register';
import list from '@/pages/goods/list';
import detail from '@/pages/goods/detail';
import cart from '@/pages/cart/cart';
import xiadan from '@/pages/cart/xiadan';
import user from '@/pages/user/user';
const history = createHistory();

const RouteConfig = (
    <Router path="/" history={history}>
        <div>
            <Route path="/"  exact component={index} />
            <Route path="/login"  component={login} />
            <Route path="/register" component={register} />
            <Route path="/list" component={list} />
            <Route path="/detail/:wcode" component={detail} />
            <Route path="/cart" component={cart} />
            <Route path="/user" component={user} />
            <Route path="/xiadan" component={xiadan} />                                                                                                                                                                                                                                                                                                                                                                                                                                        
        </div>
    </Router>
);
export default RouteConfig;
