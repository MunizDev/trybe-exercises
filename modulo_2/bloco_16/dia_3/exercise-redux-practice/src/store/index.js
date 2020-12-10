import { createStore, combineReducers } from 'redux';
import loggedInReducer from '../reducers/loggedInReducer';
import AddClientReducer from '../reducers/AddClientReducer';

const rootReducer = combineReducers({ loggedInReducer, AddClientReducer });

const store = createStore(rootReducer);

export default store;
