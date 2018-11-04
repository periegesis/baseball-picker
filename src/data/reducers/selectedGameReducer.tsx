import { GameSelectionAction, GameSelectionActionTypes } from '../actions';

const defaultGameData = {
    date: new Date(),
    homeTeam: "NONE",
    awayTeam: "NONE",
    viewingData: {
        fullGame: {
            title: "",
            url: ""
        }
    }
}

export function selectedGame(state: GameData = defaultGameData, action: GameSelectionAction): GameData {
    switch (action.type) {
        case GameSelectionActionTypes.GameSelectionReturned:
            return action.gameInfo !== null && action.gameInfo !== undefined ? action.gameInfo : state;
    }
    return state;
}

export interface GameData {
    date: Date;
    homeTeam: string;
    awayTeam: string;
    viewingData: GameViewingData;
}

export interface GameViewingData {
    fullGame: GameViewingOption;
    condensedGame?: GameViewingOption;
    highlights?: GameViewingOption[];
}

export interface GameViewingOption {
    title: string;
    url: string;
    youtubeId?: string;
}