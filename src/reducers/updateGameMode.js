import {UPDATE_GAME_MODE} from '../actions';

const updateGameMode = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_GAME_MODE:
			return Object.assign({}, state, {
				mode: action.payload
			})
		default:
			return state
	}
}

export default updateGameMode