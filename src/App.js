import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from './pages/header/HeaderContainer';
import CategoriesContainer from './pages/categories/CategoriesContainer';
import MainContainer from './pages/home-page/MainContainer';
import DetailContainer from './pages/detail-page/DetailContainer';
import ListContainer from './pages/list-page/ListContainer';
import CartContainer from './pages/basket-page/CartContainer';
import OrderContainer from './pages/order-page/OrderContainer';
import Search from './pages/search-page/Search';
import Tracking from './pages/tracking-page/Tracking';
import AboutUsContainer from './pages/aboutUs-page/AboutUsContainer';
import DeliveryContainer from './pages/delivery-page/DeliveryContainer';
import ContactsContainer from './pages/contacts-page/ContactsContainer';
import Footer from './pages/footer/Footer';
import MobileMenuContainer from './pages/header/MobileMenuContainer';
import './App.scss';

const App = () => {
    return (
        <>
            <HeaderContainer />
            <MobileMenuContainer />
            <div className="main-container">
                <CategoriesContainer />
                <div className="content__container">
                    <Switch>
                        <Route path="/" exact component={MainContainer} />
                        <Route path="/detail/:id" component={DetailContainer} />
                        <Route path="/products/:category" component={ListContainer} />
                        <Route path="/basket" component={CartContainer} />
                        <Route path="/order" component={OrderContainer} />
                        <Route path="/search" component={Search} />
                        <Route path="/tracking" component={Tracking} />
                        <Route path="/about" component={AboutUsContainer} />
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