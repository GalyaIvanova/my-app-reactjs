import React, { useState } from "react";
import './InputField.css';

function Input(props) {
  
   return (
   <div>
       <input name={props.name}
          placeholder={props.placeholder}
          {...props.validation}
          onChange={props.onChange}
          required={props.required}
          />
          
   </div>
  );
}

export default Input;