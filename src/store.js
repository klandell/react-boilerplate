import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

// push middleware to the middleware array as needed
const middleware = [logger, thunk];

export default createStore(reducer, applyMiddleware(...middleware));
