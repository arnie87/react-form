import React from 'react';

const Textarea = (props) => (  
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <textarea
      className={props.className}
      id={props.name}
      name={props.name}
      rows={props.rows}
      cols = {props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
    />
    <span className="errorMessage">{props.errorMessage}</span>
  </div>
);

export default Textarea;