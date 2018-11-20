import React from 'react';


const Checkbox = (props) => {
	return( <div className="form-group">
        <label htmlFor={props.name} className="form-label">{props.title}</label>
        <div className="checkbox">
        {props.options.map(option => {
            return (
                <div key={option} className="form-check">
                <label key={option} className="form-check-label">
                    <input
                        id = {props.name}
                        name={props.name}
                        onChange={props.handlechange}
                        value={option}
                        checked={props.selectedoptions.indexOf(option) > -1}
                        type="checkbox"
                        className="form-check-input"
                    /> {option}
                </label>
                </div>
            );
        })}
        <span className="errorMessage">{props.errorMessage}</span>
        </div>
    </div>
    );

}

export default Checkbox;