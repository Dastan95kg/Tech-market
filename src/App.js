import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './pages/header/Header';
import CategoriesContainer from './pages/categories/CategoriesContainer';
import Main from './pages/home-page/Main';
import Detail from './pages/detail-page/Detail';
import List from './pages/list-page/List';
import Cart from './pages/basket-page/Cart';
import Order from './pages/order-page/Order';
import Search from './pages/search-page/Search';
import Tracking from './pages/tracking-page/Tracking';
import AboutUs from './pages/aboutUs-page/AboutUs';
import DeliveryContainer from './pages/delivery-page/DeliveryContainer';
import ContactsContainer from './pages/contacts-page/ContactsContainer';
import Footer from './pages/footer/Footer';
import './App.scss';
import cartImage from './assets/images/supermarket.png';

const App = () => {
    return (
        <>
            <Header />
            <div className="header-menu">
                <button type="button">
                    <svg viewBox="0 -53 384 384">
                        <path fill="#1D97F0" d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                        <path fill="#1D97F0" d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                        <path fill="#1D97F0" d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    </svg>
                </button>
                <button type="button">
                    <img src={cartImage} alt="cart" />
                </button>
            </div>
            <div className="main-container">
                <CategoriesContainer />
                <div className="content__container">
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="/products/:category" component={List} />
                        <Route path="/basket" component={Cart} />
                        <Route path="/order" component={Order} />
                        <Route path="/search" component={Search} />
                        <Route path="/tracking" component={Tracking} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/delivery" component={DeliveryContainer} />
                        <Route path="/contacts" component={ContactsContainer} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;