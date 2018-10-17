import { createStore } from 'redux';
import { StoreState } from 'src/state/store';
import { favoriteTeam } from 'src/state/pickerDataReducer'

const store = createStore<StoreState>(favoriteTeam, {
    favoriteTeam: 'NONE'
})