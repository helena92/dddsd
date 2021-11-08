import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers'
import { createLogger } from 'redux-logger'
import ThunkMiddleware from 'redux-thunk';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
