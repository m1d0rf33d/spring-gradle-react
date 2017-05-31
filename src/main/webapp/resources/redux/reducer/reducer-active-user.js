/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state, action) {
	if (state == undefined) {
		state = null;
	} 
    switch (action.type) {
        case 'ACTIVATE_USER':
        	return action.payload;
        	break;
		case 'UPDATE_LOGIN_STATE':
			return action.payload;
			break;
    }
    return state;
}
