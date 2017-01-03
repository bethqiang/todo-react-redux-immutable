import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducer from './redux';

const logger = createLogger();
export default createStore(reducer, applyMiddleware(logger));
