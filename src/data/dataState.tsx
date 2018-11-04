import { UserGamePrefsData, gameFeatures } from './reducers/userGamePrefsReducer';
import { combineReducers } from 'redux';
import { favoriteTeam } from './reducers/favoriteTeamReducer';
import { GameData, selectedGame } from './reducers/selectedGameReducer';

export interface DataState {
    userGamePrefs: UserGamePrefsData
    favoriteTeam: string;
    selectedGame: GameData;
}

export const dataReducers = combineReducers<DataState>({
    userGamePrefs: gameFeatures,
    favoriteTeam: favoriteTeam,
    selectedGame: selectedGame
});