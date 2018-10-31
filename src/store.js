import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

// push middleware to the middleware array as needed
const middleware = [logger];

export default createStore(reducer, applyMiddleware(...middleware));
