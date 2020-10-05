import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loginStore from './auth-store';
import requestsStore from './requests-store';

let reducersBuild = combineReducers({
    login: loginStore,
    requests: requestsStore,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducersBuild, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;

