import { GameAttributesPicker } from '../components/GameAttributesPicker'
import { GameFeaturesAction, setGamePreferences } from 'src/data/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { UserGamePrefsData } from 'src/data/reducers/userGamePrefsReducer';

function mapStateToProps({ blowouts, highScoring, comebacksIn9, pitching, favoriteTeamLosing }: UserGamePrefsData) {
    return {
        blowouts,
        highScoring,
        comebacksIn9,
        pitching,
        favoriteTeamLosing
    }
}

function matchDispatchToProps(dispatch: Dispatch<GameFeaturesAction>) {
    return {
        setGamePreferences: (preferences: UserGamePrefsData) => dispatch(setGamePreferences(preferences))
    }
}

export const GameAttributesPickerContainer = connect(mapStateToProps, matchDispatchToProps)(GameAttributesPicker)