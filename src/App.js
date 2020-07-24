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
import MobileMenuContainer from './pages/header/MobileMenuContainer';
import './App.scss';

const App = () => {
    return (
        <>
            <Header />
            <MobileMenuContainer />
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