import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from './Main';
import Footer from '../footer/Footer';
import Detail from '../detail/Detail';

const MainPage = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/detail" component={Detail} />
            </Switch>
            <Footer />
        </>
    );
};

export default MainPage;