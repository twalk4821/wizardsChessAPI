import { UPDATE_NAMES } from '../actions';

const updateNames = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_NAMES:
			return Object.assign({}, state, {
				names: action.payload
			})
		default:
			return state
	}
}

export default updateNames