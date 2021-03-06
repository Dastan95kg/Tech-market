import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import store from './redux';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <AppContainer />
            </React.StrictMode>
        </Provider>
    </Router>,
    document.getElementById('root')
);