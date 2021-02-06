import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/reducers';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const middleware = applyMiddleware(promise, thunk);  

export default createStore(rootReducer, middleware);