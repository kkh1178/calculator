import React, {useState} from 'react';
import Display from './Display'


const Button = ({buttonValue}) => {

    // console.log(typeof(buttonValue))
    // setting our piece of state (buttonValue) to null; setButtonValue is the function that will change our piece of state.
    const [button, setButton] = useState(null)

    // rerenders the state
    const onButtonClick = (value) => {
        setButton(value);
        console.log(`Clicked on me ${value}`)
    }
    
    // console.log("This is what you are getting from ButtonGrid", button)
    // const[firstNum, setFirst] = setState("");
    // const[secondNum, setSecond] = setState("")

    // console.log(`BUTTON IS ${button}`)
    return (
        
        <div onClick={()=>console.log("IS THIS WORKING")}>

        </div>
        
    )
}

export default Button;