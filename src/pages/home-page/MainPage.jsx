import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from './Main';
import Footer from '../footer/Footer';
import Detail from '../detail-page/Detail';
import List from '../list-page/List';
import Basket from '../basket-page/Basket';
import Order from '../order-page/Order';

const MainPage = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/detail" component={Detail} />
                <Route path="/list" component={List} />
                <Route path="/basket" component={Basket} />
                <Route path="/order" component={Order} />
            </Switch>
            <Footer />
        </>
    );
};

export default MainPage;