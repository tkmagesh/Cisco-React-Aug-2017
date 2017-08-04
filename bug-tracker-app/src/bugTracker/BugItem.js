import React from 'react';

let BugItem = (props) => {
	let { bug, toggle } = props;
	let bugClass = bug.isClosed ? 'bugname closed' : 'bugname';
	return (
		<li>
			<span className={bugClass} onClick={toggle} >{bug.name}</span>
			<div className="datetime">[Created At]</div>
			<i>[{bug.isClosed.toString()}]</i>
		</li>
	);
}
export default BugItem;
