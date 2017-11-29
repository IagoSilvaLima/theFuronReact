import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './index.css';

import PlacesScreen from './containers/PlacesScreen';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import placeSaga from './store/places/saga'

import  reducers from './store/reducers';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(placeSaga);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={PlacesScreen} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
);

registerServiceWorker();
