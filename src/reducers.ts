import { combineReducers } from 'redux';
import { DataState, dataReducers } from './data/dataState';

export const reducers = combineReducers<StoreState>({
    dataState: dataReducers
})

// const store = createStore<StoreState, any, any, any>(reducers);

export interface StoreState {
    dataState: DataState
}