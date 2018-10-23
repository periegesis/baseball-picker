import { FavoriteTeamAction, FavoriteTeamActionTypes } from '../actions';

export function favoriteTeam(state: string = "NONE", action: FavoriteTeamAction): string {
    switch (action.type) {
        case FavoriteTeamActionTypes.SetFavoriteTeam:
            return action.favoriteTeam;
    }
    return state;
}