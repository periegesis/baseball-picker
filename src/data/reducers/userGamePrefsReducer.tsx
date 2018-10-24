import { GameFeaturesAction, GameFeaturesActionTypes } from '../actions/index'

export function gameFeatures(state: UserGamePrefsData = { blowouts: false, highScoring: false, comebacksIn9: false, pitching: false, favoriteTeamLosing: false }, action: GameFeaturesAction): UserGamePrefsData {
    switch (action.type) {
        case GameFeaturesActionTypes.AllPreferences:
            return action.preferences;
    }
    return state;
}

export interface UserGamePrefsData {
    blowouts: boolean;
    highScoring: boolean;
    comebacksIn9: boolean;
    pitching: boolean;
    favoriteTeamLosing: boolean;
}