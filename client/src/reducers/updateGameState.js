import { UPDATE_GAME_STATE } from '../actions';

const updateGameState = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_GAME_STATE:
			return Object.assign({}, state, action.payload)
		default:
			return state
	}
}

export default updateGameState