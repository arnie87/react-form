import React from 'react';

const buttonStyle = {
  marginRight: '10px'
}

const Button = (props) => {
	return(
	<button 
		style = {buttonStyle} 
		className = {props.type==='primary'? 'btn btn-primary' : 'btn btn-secondary'}
		onClick= {props.action} > 
		{props.title} 
	</button>)
}

export default Button;