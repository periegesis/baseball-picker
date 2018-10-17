export const SET_FAVORITE_TEAM = "SET_FAVORITE_TEAM";
export type SET_FAVORITE_TEAM = typeof SET_FAVORITE_TEAM;

export interface FavoriteTeamAction {
    type: SET_FAVORITE_TEAM;
    favoriteTeam: string;
}