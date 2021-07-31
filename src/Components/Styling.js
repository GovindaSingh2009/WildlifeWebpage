import React from 'react';
import './Stylesheets.css';
function StylingConcept (props) {
let color1 = props.primary1 ? 'secondary' : '' ; //? is conditional operator
//color1 stores className of css file i.e primary so if it true then primary i.e orange color
//primary1 is normal name given as prop and as input it takes true or false
    return (
        <div>
        <h5 className= {color1} >Visit us Again &#128513;</h5>
        </div>
    );
}
export default StylingConcept;