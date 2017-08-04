import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';

let Spinner = ({value, increment, decrement }) => {
	return (
		<div>
			<input type="button" value="DECREMENT" onClick={decrement}/>
			<span>{value}</span>
			<input type="button" value="INCREMENT" onClick={increment}/>
		</div>
	)
}
function mapStateToProps(state){
	return {
		value : state.spinnerData
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(spinnerActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);