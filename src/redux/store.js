import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from "./reducer/rootReducer";

const middleware = [thunk, logger]; // Define middleware including thunk and logger

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
