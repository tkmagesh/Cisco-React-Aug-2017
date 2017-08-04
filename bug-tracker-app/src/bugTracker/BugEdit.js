import React, { Component } from 'react';

class BugEdit extends Component{
	onAddNewClick(){
		let bugName = this.refs.txtBugName.value;
		this.props.addNew(bugName);
	}
	render(){
		return (
			<section className="edit">
				<label htmlFor="">New Bug :</label>
				<input type="text" ref="txtBugName" />
				<input type="button" value="Add New" onClick={this.onAddNewClick.bind(this)} />
			</section>
		)
	}
}
export default BugEdit;