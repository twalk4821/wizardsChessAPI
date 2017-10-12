import {UPDATE_PLAYER_COLOR} from '../actions';

const updatePlayerColor = (state = "white", action) => {
	switch (action.type) {
		case UPDATE_PLAYER_COLOR:
			return action.payload
		default:
			return state
	}
}

export default updatePlayerColor