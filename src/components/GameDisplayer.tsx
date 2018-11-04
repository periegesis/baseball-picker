import * as React from 'react';
import YouTube from 'react-youtube';
import { GameData } from 'src/data/reducers/selectedGameReducer';
import { fetchGameData } from 'src/common/fetchGameData';
import { UserGamePrefsData } from 'src/data/reducers/userGamePrefsReducer';

export interface Props {
    setSelectedGame?: (selectedGame: GameData) => void;
    gamePreferences: UserGamePrefsData;
    selectedGame: GameData;
}

export interface State {
}

export class GameDisplayer extends React.Component<Props, State> {
    public render() {
        const gameData = fetchGameData(this.props.gamePreferences);
        if (this.props !== null && this.props.selectedGame !== null && this.props.selectedGame.awayTeam !== "NONE") {
            return (
                <div>
                    <button style={{ backgroundColor: "black" }} onClick={() => this.props.setSelectedGame != null && this.props.setSelectedGame(gameData)}>See a new game!</button>
                    <YouTube
                        videoId={ this.props.selectedGame.viewingData.fullGame.youtubeId } />
                </div>
            );
        } else {
            return (<button style={{ backgroundColor: "black" }} onClick={() => this.props.setSelectedGame != null && this.props.setSelectedGame(gameData)}>See your game!</button>)
        }
    }
}