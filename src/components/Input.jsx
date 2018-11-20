import React from 'react';

const Input = (props) => {
	//console.log(props.value);
	return (  
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input
                className={props.className}
                id={props.name}
                name={props.name}
                type={props.inputtype}
                value={props.value}
                onChange={props.handlechange}
                placeholder={props.placeholder}  
            />
            <span className="errorMessage">{props.errorMessage}</span>
        </div>
    )
}

export default Input;