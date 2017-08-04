var SM = (function(){
	function createStore(reducer){
		let INIT_ACTION = { type : '@@INIT_ACTION'};

		let _reducer = reducer;

		let _state = _reducer(undefined, INIT_ACTION) ;

		let _callbacks = [];

		function getState(){
			return _state;
		}

		function subscribe(callback){
			if (typeof callback === 'function')
				_callbacks.push(callback);
		}

		function trigger(){
			_callbacks.forEach(callback => callback());
		}

		function dispatch(action){
			let newState = _reducer(_state, action);
			if (newState !== _state){
				_state = newState;
				trigger();
			}
		}
		return {
			getState : getState,
			dispatch : dispatch,
			subscribe : subscribe
		}
	}
	return {
		createStore : createStore
	}
})();