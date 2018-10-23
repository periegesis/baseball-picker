export const enum FavoriteTeamActionTypes {
    SetFavoriteTeam = "FavoriteTeam_Set",
}

export const enum GameFeaturesActionTypes {
    Blowouts = "GameFeature_Blowout",
    ComebackIn9 = "GameFeature_ComebackIn9"
};

export interface FavoriteTeamAction {
    type: FavoriteTeamActionTypes.SetFavoriteTeam;
    favoriteTeam: string;
}

export interface GameFeaturesAction {
    type: GameFeaturesActionTypes;
    preference: boolean;
}

export function setFavoriteTeam(favoriteTeam: string): FavoriteTeamAction {
    console.log(favoriteTeam);
    return {
        type: FavoriteTeamActionTypes.SetFavoriteTeam,
        favoriteTeam: favoriteTeam
    }
}