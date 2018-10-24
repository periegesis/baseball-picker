import { UserGamePrefsData } from '../reducers/userGamePrefsReducer';

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

export interface FavoriteTeamAction {
    type: FavoriteTeamActionTypes.SetFavoriteTeam;
    favoriteTeam: string;
}

export interface GameFeaturesAction {
    type: GameFeaturesActionTypes;
    preferences: UserGamePrefsData;
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