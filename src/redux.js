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

const reducers = combineReducers({
    home: homeReducer,
    delivery: deliveryReducer,
    contacts: contactsReducer,
    categories: categoriesReducer,
    slider: sliderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;