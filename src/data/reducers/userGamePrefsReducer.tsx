import { GameFeaturesAction, GameFeaturesActionTypes } from '../actions/index'

export function gameFeatures(state: UserGamePrefsData = { blowouts: false, comebacksIn9: false, favoriteTeamLosing: false }, action: GameFeaturesAction): UserGamePrefsData {
    switch (action.type) {
        case GameFeaturesActionTypes.Blowouts:
            return { ...state, blowouts: action.preference };
        case GameFeaturesActionTypes.ComebackIn9:
            return { ...state, comebacksIn9: action.preference };
    }
    return state;
}

export interface UserGamePrefsData {
    blowouts: boolean;
    //comebacksIn7: boolean;
    comebacksIn9: boolean;
    //pitching: boolean;
    favoriteTeamLosing: boolean;
}