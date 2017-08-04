import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { combineReducers, createStore, bindActionCreators } from 'redux';
import bugsReducer from './reducers/bugsReducer';
import spinnerReducer from './reducers/spinnerReducer';

import BugTracker from './bugTracker/BugTracker';
import Spinner from './spinner/Spinner';

import bugActionCreators from './bugTracker/actions';
import spinnerActionCreators from './spinner/actions';


let combinedReducers = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let store = createStore(combinedReducers);
let bugActions = bindActionCreators(bugActionCreators, store.dispatch);
let spinnerActions = bindActionCreators(spinnerActionCreators, store.dispatch);

function renderApp(){
	let state = store.getState();
	ReactDOM.render(
	<div>
		<BugTracker bugs={state.bugsData} {...bugActions} ></BugTracker>
		<hr/>
		<Spinner value={state.spinnerData} {...spinnerActions}></Spinner>
	</div>,
		document.getElementById('root'));
}
renderApp();
store.subscribe(renderApp);

