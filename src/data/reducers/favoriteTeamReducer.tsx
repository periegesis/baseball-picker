import { FavoriteTeamAction, SET_FAVORITE_TEAM } from '../actions';

export function favoriteTeam(state: string, action: FavoriteTeamAction): string {
    switch (action.type) {
        case SET_FAVORITE_TEAM:
            return action.favoriteTeam;
    }
    return state;
}