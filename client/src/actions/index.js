export const UPDATE_NAMES = "UPDATE_NAMES";

export function updateNames(names = {white: "Harry", black: "Draco"}) {
	return {
		type: UPDATE_NAMES,
		payload: names
	}
} 

export const UPDATE_GAME_MODE = "UPDATE_GAME_MODE";

export function updateGameMode(mode = "single") {
	return {
		type: UPDATE_GAME_MODE,
		payload: mode
	}
}

export const UPDATE_GAME_STATE = "UPDATE_GAME_STATE";

export function updateGameState(state = {board: null, turn: "white", lastMove: null, turnCount: 1}) {
	return {
		type: UPDATE_GAME_STATE,
		payload: state
	}
}