import { UserGamePrefsData } from '../reducers/userGamePrefsReducer';
import { GameData } from '../reducers/selectedGameReducer';

// TODO: refactor action boilerplate

export const enum FavoriteTeamActionTypes {
    SetFavoriteTeam = "FavoriteTeam_Set",
}

export const enum GameFeaturesActionTypes {
    AllPreferences = "GameFeature_AllPreferences",
    Blowouts = "GameFeature_Blowout",
    HighScoring = "GameFeatures_HighScoring",
    ComebackIn9 = "GameFeature_ComebackIn9",
    Pitching = "GameFeature_Pitching",
    FavoriteTeamLosing = "GameFeature_FavoriteTeamLosing"
};

export const enum GameSelectionActionTypes {
    GameSelectionRequested = "GameSelection_Requested",
    GameSelectionReturned = "GameSelection_Returned"
}

export interface FavoriteTeamAction {
    type: FavoriteTeamActionTypes.SetFavoriteTeam;
    favoriteTeam: string;
}

export interface GameFeaturesAction {
    type: GameFeaturesActionTypes;
    preferences: UserGamePrefsData;
}

export interface GameSelectionAction {
    type: GameSelectionActionTypes;
    error?: string;
    gameInfo?: GameData;
}

export function setFavoriteTeam(favoriteTeam: string): FavoriteTeamAction {
    return {
        type: FavoriteTeamActionTypes.SetFavoriteTeam,
        favoriteTeam: favoriteTeam
    }
}

export function setGamePreferences(preferences: UserGamePrefsData): GameFeaturesAction {
    return {
        type: GameFeaturesActionTypes.AllPreferences,
        preferences: preferences
    }
}

export function setSelectedGame(selectedGame: GameData): GameSelectionAction {
    return {
        type: GameSelectionActionTypes.GameSelectionReturned,
        gameInfo: selectedGame
    }
}