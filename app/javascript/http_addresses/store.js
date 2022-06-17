import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

import httpAddressesReducer from './reducers/http_addresses_reducer';

const reducers = combineReducers({
  http_addresses: httpAddressesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
const store = createStore(reducers, middlewares);

export { store };
