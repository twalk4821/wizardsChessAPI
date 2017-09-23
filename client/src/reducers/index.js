import { combineReducers } from 'redux';
import updateNames from './updateNames.js'

const rootReducer = combineReducers({
	playerNames: updateNames
});

export default rootReducer;