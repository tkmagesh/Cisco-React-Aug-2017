import React from 'react';

let Spinner = ({value, increment, decrement }) => {
	return (
		<div>
			<input type="button" value="DECREMENT" onClick={decrement}/>
			<span>{value}</span>
			<input type="button" value="INCREMENT" onClick={increment}/>
		</div>
	)
}
export default Spinner;