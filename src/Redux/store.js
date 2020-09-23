import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loginStore from './auth-store';
import situationStore from './situation-store';

let reducersBuild = combineReducers({
    login: loginStore,
    situation: situationStore,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducersBuild, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;

