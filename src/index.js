import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

// FONT AWESOME PRO IMPORT
import './assets/fontawesome/css/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// REDUX DEV-TOOLS EXTENSION PLUGIN
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCER
import RootReducer from './store/reducers/index';

// REDUX THUNK FOR ASYNC ACTIONS
import thunk from 'redux-thunk';

// CUSTOM ASYNC MIDDLEWARE ( KINDA REDUX THUNK )
/* 
const CustomAsyncMiddleware = store => {

    return next => {

        return action => {

            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            }

            return next(action);
        }
    }
}

 */
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<BrowserRouter> <Provider store={store}> <App /> </Provider> </BrowserRouter> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
