import React from 'react';

function CounterButton(props) {
	return (
		<button onClick={props.callParent}>{props.title}</button>
	);
}

export default CounterButton;
