import React from 'react';
import BugItem from './BugItem';

let BugList = ({bugs, removeClosed, toggle }) => {
	let bugItems = bugs.map((bug, index) => (
		<BugItem key={index} bug={bug} toggle={toggle.bind(this, bug)}></BugItem>
	));
	return (
		<section className="list">
			<ol>
				{bugItems}
			</ol>
			<input type="button" value="Remove Closed" onClick={removeClosed}/>
		</section>
	)
}
export default BugList;