function bugsReducer(currentState = [], action){
	let { type : actionType, payload } = action;
	if (actionType === 'INIT_DATA'){
		return [...payload];
	}
	if (actionType === 'ADD_NEW'){
		let newBug = {
			name : payload,
			isClosed : false
		}
		return [...currentState, newBug];
	}
	if (actionType === 'TOGGLE'){
		let bugToToggle = payload,
			toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return currentState.map(bug => 
			bug === bugToToggle ? toggledBug : bug);
	}
	if (actionType === 'REMOVE_CLOSED'){
		return currentState.filter(bug => !bug.isClosed);
	}
	return currentState;
}

export default bugsReducer;