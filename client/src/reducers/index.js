import { combineReducers } from 'redux';
import updateNames from './updateNames.js'
import updateGameMode from './updateGameMode.js'

const rootReducer = combineReducers({
	playerNames: updateNames,
	gameMode: updateGameMode
});

export default rootReducer;