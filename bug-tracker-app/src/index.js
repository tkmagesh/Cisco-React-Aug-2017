import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

import { combineReducers, createStore } from 'redux';
import bugsReducer from './reducers/bugsReducer';
import spinnerReducer from './reducers/spinnerReducer';

let combinedReducers = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let store = createStore(combinedReducers);

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>, document.getElementById('root'));

