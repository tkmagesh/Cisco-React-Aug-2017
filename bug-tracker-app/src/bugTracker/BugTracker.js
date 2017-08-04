import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './BugTracker.style.css';

import BugStats from './BugStats';
import BugEdit from './BugEdit';
import BugList from './BugList';

import bugActionCreators from './actions';

class BugTracker extends Component{
	render(){
		let { bugs,  removeClosed, toggle, addNew } = this.props,
			list_data = {bugs, toggle, removeClosed };
		return (
			<div>
				<h1>Bug Tracker</h1>
				<div>
					<BugStats bugs={bugs}></BugStats>
					<BugEdit addNew={addNew}></BugEdit>
					<BugList {...list_data}></BugList>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		bugs : state.bugsData
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(bugActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);