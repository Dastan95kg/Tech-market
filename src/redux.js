import {
    combineReducers,
    createStore,
    compose,
    applyMiddleware
}
    from 'redux';
import thunkMiddleware from 'redux-thunk';
import homeReducer from './pages/home-page/reducer';
import deliveryReducer from './pages/delivery-page/reducer';
import contactsReducer from './pages/contacts-page/reducer';
import categoriesReducer from './pages/categories/reducer';
import sliderReducer from './pages/slider/reducer';
import listReducer from './pages/list-page/reducer';
import cartReducer from './pages/basket-page/reducer';
import orderReducer from './pages/order-page/reducer';
import aboutUsReducer from './pages/aboutUs-page/reducer';
import detailReducer from './pages/detail-page/reducer';
import searchReducer from './pages/search-page/reducer';
import filtersReducer from './pages/filter/reducer';

const reducers = combineReducers({
    home: homeReducer,
    delivery: deliveryReducer,
    contacts: contactsReducer,
    categories: categoriesReducer,
    slider: sliderReducer,
    list: listReducer,
    cart: cartReducer,
    order: orderReducer,
    aboutUs: aboutUsReducer,
    detail: detailReducer,
    search: searchReducer,
    filters: filtersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;