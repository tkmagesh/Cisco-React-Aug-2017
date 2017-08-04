import React, { Component } from 'react';
import BugStats from './BugStats';
import BugEdit from './BugEdit';
import BugList from './BugList';


class BugTracker extends Component{
	render(){
		let { bugs,  removeClosed, toggle, addNew } = this.props,
			list_data = {bugs, toggle, removeClosed };
		return (
			<div>
				<BugStats bugs={bugs}></BugStats>
				<BugEdit addNew={addNew}></BugEdit>
				<BugList {...list_data}></BugList>
			</div>
		);
	}
}
export default BugTracker;