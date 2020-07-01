import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from './Main';
import Footer from '../footer/Footer';
import Detail from '../detail-page/Detail';
import List from '../list-page/List';
import Basket from '../basket-page/Basket';
import Order from '../order-page/Order';
import Search from '../search-page/Search';
import Tracking from '../tracking-page/Tracking';

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
                <Route path="/search" component={Search} />
                <Route path="/tracking" component={Tracking} />
            </Switch>
            <Footer />
        </>
    );
};

export default MainPage;