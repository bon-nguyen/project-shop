import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

// page
const Home = lazy( ()=> import('../scenes/Home/Home'));
const Products = lazy( ()=> import('../scenes/Products/Products'));
const Cart = lazy(()=> import('../scenes/Cart/Cart'));
const NotFound = lazy( ()=> import('../scenes/NotFound/NotFound'));

function BaseRouters(props) {
    return (
        <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/products"} component={Products} />
            <Route path={"/cart"} component={Cart} />
            <Route path={"*"} component={NotFound} />
        </Switch>
    );
}

export default BaseRouters;