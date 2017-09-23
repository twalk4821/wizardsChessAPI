export const UPDATE_NAMES = "UPDATE_NAMES";

export function updateNames(names = {white: "Harry", black: "Draco"}) {
	return {
		type: UPDATE_NAMES,
		payload: names
	}
} 