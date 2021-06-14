import { combineReducers } from 'redux';
import {  Foods ,hyderabad} from './Reducers';

export const mystore=combineReducers({
    food:Foods,
    hyd:hyderabad
})