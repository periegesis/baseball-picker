import { GameFeaturesAction, GameFeaturesActionTypes } from '../actions/index'

export function gameFeatures(state: UserGamePrefsData, action: GameFeaturesAction): UserGamePrefsData {
    switch (action.type) {
        case GameFeaturesActionTypes.Blowouts:
            return { ...state, blowouts: action.preference };
        case GameFeaturesActionTypes.ComebackIn9:
            return { ...state, comebacksIn9: action.preference };
    }
    return state;
}

export interface UserGamePrefsData {
    favoriteTeam: string;
    blowouts: boolean;
    //comebacksIn7: boolean;
    comebacksIn9: boolean;
    //pitching: boolean;
    favoriteTeamLosing: boolean;
}