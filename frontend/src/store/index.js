//import {combineReducers} from 'redux';
import {createStore ,applyMiddleware} from 'redux';
//import { configureStore } from '@reduxjs/toolkit'


import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
export default store;
