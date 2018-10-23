import { TeamPicker } from '../components/TeamPicker'
import { FavoriteTeamAction, setFavoriteTeam } from 'src/data/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(favoriteTeam: string) {
    return favoriteTeam;
}

function matchDispatchToProps(dispatch: Dispatch<FavoriteTeamAction>) {
    return {
        setFavoriteTeam: (favoriteTeam: string) => dispatch(setFavoriteTeam(favoriteTeam))
    }
}

export const TeamPickerContainer = connect(mapStateToProps, matchDispatchToProps)(TeamPicker)