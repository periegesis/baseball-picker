import { connect } from 'react-redux';
import { StoreState } from 'src/reducers';
import { GameData } from 'src/data/reducers/selectedGameReducer';
import { GameDisplayer, Props } from 'src/components/GameDisplayer';
import { Dispatch } from 'redux';
import { GameSelectionAction, setSelectedGame } from 'src/data/actions';

function mapStateToProps(state: StoreState): Props {
    const gameState = state;
    return { 
        gamePreferences: gameState.dataState.userGamePrefs,
        selectedGame: gameState.dataState.selectedGame
    };
}

function matchDispatchToProps(dispatch: Dispatch<GameSelectionAction>) {
    return {
        setSelectedGame: (selectedGame: GameData) => dispatch(setSelectedGame(selectedGame))
    }
}

export const GameDisplayerContainer = connect(mapStateToProps, matchDispatchToProps)(GameDisplayer)