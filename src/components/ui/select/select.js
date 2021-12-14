import React, { useState } from "react";
import './select.css';

function Select(props) {
   return (
   <div>
       <select name={props.name}
          {...props.validation}
          defaultValue="">
              {props.children}
          </select>        
   </div>
  );
}

export default Select;