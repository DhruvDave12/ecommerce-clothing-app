import { createStore, applyMiddleware } from 'redux';
// redux persist allows to cache or store the data so that on refresh we dont loose the data i.e., cart and other items.
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [];

if(process.env.NODE_ENV === "development"){
    middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store, persistor }; 