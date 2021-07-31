import React,{useState} from 'react';
const initialcount = 0;
function RespOfButton() {
const[lions ,countLion] = useState(initialcount); 

   const IncrementCount = () => {
       countLion(lions + 1);
    }
    return (
        <div> 
            Click button to add Lions count : 
            <button onClick ={(IncrementCount)}>Lion + </button>
            <button onClick = {() => countLion(lions -1)}>Lion - </button>
            <button onClick = { ()=> countLion(initialcount)}>Reset</button>
            <button>{lions}</button>
        </div>
    )

}
export default RespOfButton;