import React from 'react';

function CounterButton(props) {

	let title = props.title;
	let parentCallback= props.parentCallback
	return (
		<button onClick={ () => {
			if(title === "Click to Vote"){
				console.log(title)
				parentCallback(1)
			}
			else if(title === "Click to Unvote")
			{
				console.log(title)
				parentCallback(-1)}}
			}
				>{title}</button>
	);
}

export default CounterButton;
