export const SET_FAVORITE_TEAM = "SET_FAVORITE_TEAM";
export type SET_FAVORITE_TEAM = typeof SET_FAVORITE_TEAM;

export const enum GameFeaturesActionTypes {
    Blowouts = "GameFeature_Blowout",
    ComebackIn9 = "GameFeature_ComebackIn9"
};

export interface FavoriteTeamAction {
    type: SET_FAVORITE_TEAM;
    favoriteTeam: string;
}

export interface GameFeaturesAction {
    type: GameFeaturesActionTypes;
    preference: boolean;
}