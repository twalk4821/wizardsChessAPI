import { combineReducers } from 'redux';
import updateNames from './updateNames.js'
import updateGameMode from './updateGameMode.js'
import updateGameState from './updateGameState.js'

const rootReducer = combineReducers({
	playerNames: updateNames,
	gameMode: updateGameMode,
	gameState: updateGameState
});

export default rootReducer;