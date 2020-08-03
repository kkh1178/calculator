import React, {useState} from 'react';
import Display from './Display';
import {evaluate} from 'mathjs';

const ButtonsGrid = ({numbers}) => {

    // setting the state to a blank array
    const [calculatorExpression, updateCalculatorExpression] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    // rerenders the state
    const onTitleClick = (value) => {
        setErrorMessage(null);
        // Using the equal button to run the math
        if (value === "=") {
            try {
                // creating the mathematical expression
                // console.log(calculatorExpression.join(""));
                updateCalculatorExpression([evaluate(calculatorExpression.join(""))]);
            } catch (error) {
                // if the user enters something incorrectly, show an error message and then 
                // reset the state to blank
                setErrorMessage(`${calculatorExpression.join(" ")} is not a valid expression`)
                updateCalculatorExpression([]);
            }
            // delete the expression
        } else if (value==="AC") {
            updateCalculatorExpression([])
        } else {
            updateCalculatorExpression([...calculatorExpression, value]);
        }
        // console.log(`Clicked on me ${value}`, calculatorExpression)
    }

    const gridBuild = (numbers) => {

        // interating through the numbers array and returning the button color based on value.
        const calculator = numbers.map((number) => {
            if (number.value > 0) {
                return (
                    <div key={number.value} className="one wide column">
                        <div 
                            className="large fluid ui inverted blue button"
                            onClick={()=>onTitleClick(number.label)}
                            >
                            {number.label}
                        </div>
                    </div>
            
                    
                )
            } else if (number.value===0) {
                return (
                    <div key={number.value} className="two wide column">
                        <div 
                            className="large fluid ui inverted purple button"
                            onClick={()=>onTitleClick(number.label)}
                            >
                            {number.label}
                        </div>
                    </div>
                    
                )
            } else {
                return(
                    <div className="one wide column">
                        <div 
                            className="large fluid ui inverted green button"
                            onClick={()=>onTitleClick(number.label)}
                            >
                            {number.label}
                        </div>
                    </div>
                )
            }
            
        });
        return calculator;
    }

    return (
        <div className="ui grid">
            <Display calculatorExpression={calculatorExpression}></Display>
            {errorMessage ? errorMessage: ""}
            <div className="row">
                {gridBuild(numbers.slice(16, 19))}
                {gridBuild(numbers.slice(12, 13))}
            </div>
            <div className="row">
                {gridBuild(numbers.slice(0, 3))}
                {gridBuild(numbers.slice(13, 14))}
                
            </div>
            <div className="row">
                {gridBuild(numbers.slice(3,6))}
                {gridBuild(numbers.slice(10, 11))}
                
            </div>
            <div className="row">
                {gridBuild(numbers.slice(6, 9))}
                {gridBuild(numbers.slice(11, 12))}
                
            </div>
            <div className="row">
                {gridBuild(numbers.slice(9, 10))}
                {gridBuild(numbers.slice(15, 16))}
                {gridBuild(numbers.slice(14, 15))}
            </div>
            
        </div>
    )
};

export default ButtonsGrid;