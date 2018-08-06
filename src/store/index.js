import {createStore, combineReducers} from 'redux';
import * as reducer from '@/store/Reducer';

export default createStore(
    combineReducers(reducer)
);
