import { combineReducers } from 'redux';
import updatePlayerNames from './updatePlayerNames.js'
import updateGameMode from './updateGameMode.js'
import updateGameState from './updateGameState.js'

const rootReducer = combineReducers({
	playerNames: updatePlayerNames,
	gameMode: updateGameMode,
	gameState: updateGameState
});

export default rootReducer;