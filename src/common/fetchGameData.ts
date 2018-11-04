import { UserGamePrefsData } from 'src/data/reducers/userGamePrefsReducer';
import { GameData } from 'src/data/reducers/selectedGameReducer';

export function fetchGameData(data: UserGamePrefsData): GameData {
    // TODO: return calculated game data
    console.log(JSON.stringify(data));
    return {
        date: new Date("2018-06-22"),
        homeTeam: "BOS",
        awayTeam: "SEA",
        viewingData: {
            fullGame: {
                title: "SEA@BOS - 6/22/18",
                url: "https://www.youtube.com/watch?v=fFGGVs2yoZk",
                youtubeId: "fFGGVs2yoZk"
            }
        }
    }
}