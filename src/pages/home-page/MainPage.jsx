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
import AboutUs from '../aboutUs-page/AboutUs';
import Delivery from '../delivery-page/Delivery';
import Contacts from '../contacts-page/Contacts';
import Categories from './Categories';
import './Main.scss';

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="main-container">
                <Categories />
                <div className="content__container">
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/detail" component={Detail} />
                        <Route path="/list" component={List} />
                        <Route path="/basket" component={Basket} />
                        <Route path="/order" component={Order} />
                        <Route path="/search" component={Search} />
                        <Route path="/tracking" component={Tracking} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/delivery" component={Delivery} />
                        <Route path="/contacts" component={Contacts} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainPage;