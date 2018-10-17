import { StoreState } from './store'
import { FavoriteTeamAction, SET_FAVORITE_TEAM } from '../actions/index'

export function favoriteTeam(state: StoreState, action: FavoriteTeamAction): StoreState {
    switch (action.type) {
        case SET_FAVORITE_TEAM:
            return { ...state, favoriteTeam: action.favoriteTeam };
    }
    return state;
}