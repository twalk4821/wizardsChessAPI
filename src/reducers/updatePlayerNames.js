import { UPDATE_PLAYER_NAMES } from '../actions';

const updatePlayerNames = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_PLAYER_NAMES:
			return action.payload
		default:
			return state
	}
}

export default updatePlayerNames