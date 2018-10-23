import { UserGamePrefsData, gameFeatures } from './reducers/userGamePrefsReducer';
import { combineReducers } from 'redux';
import { favoriteTeam } from './reducers/favoriteTeamReducer';

export interface DataState {
    userGamePrefs: UserGamePrefsData
    favoriteTeam: string;
}

export const dataReducers = combineReducers<DataState>({
    userGamePrefs: gameFeatures,
    favoriteTeam: favoriteTeam
});