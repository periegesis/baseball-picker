import { combineReducers, createStore } from 'redux';
import { DataState, dataReducers } from './data/dataState';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const reducers = combineReducers<StoreState>({
    dataState: dataReducers
})

export const store = createStore<StoreState, any, any, any>(
    reducers, devToolsEnhancer({})
);

export interface StoreState {
    dataState: DataState
}