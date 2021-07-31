import React from 'react';
import './Stylesheets.css';

function ClickButton(props) {
  
    return (
        <div>
            <h3 className = 'primary'>Enjoy below activity &#128519;</h3> Click button to add {props.animal} count : 
            <button>Tiger</button>
            <button>{props.result}</button>
            
        </div>
  
    )
}
export default ClickButton;