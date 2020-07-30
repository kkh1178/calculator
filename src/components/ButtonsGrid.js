import React, {useState, useEffect} from 'react';

const ButtonsGrid = ({numbers, selected, onSelectedChange, char}) => {

    console.log(char)

    const gridBuild = (numbers) => {
        // interating through the numbers array and returning the button color based on value.
        const calculator = numbers.map((number) => {
            // console.log(number)
            if (number.value > 0) {
                return (
                    <div key={number.value} className="one wide column">
                        <div 
                            className="large fluid ui inverted blue button"
                            onClick={()=>{onSelectedChange(number.value)}}
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
                            onClick={()=>{onSelectedChange(number.value)}}>
                            {number.label}
                        </div>
                    </div>
                    
                )
            } else {
                return(
                    <div className="one wide column">
                        <div 
                            className="large fluid ui inverted green button"
                            onClick={()=>{onSelectedChange(number.value)}}
                            >
                            {number.label}
                        </div>
                    </div>
                )
            }
            
        });
        return calculator;
    }
    // console.log(gridBuild(char.slice(0)))

    return (
        <div className="ui grid">
            <div className="row">
                {gridBuild(char.slice(6, 9))}
                {gridBuild(char.slice(2, 3))}
            </div>
            <div className="row">
                {gridBuild(numbers.slice(0,3))}
                {gridBuild(char.slice(3,4))}
                
            </div>
            <div className="row">
                {gridBuild(numbers.slice(3,6))}
                {gridBuild(char.slice(0, 1))}
                
            </div>
            <div className="row">
                {gridBuild(numbers.slice(6,9))}
                {gridBuild(char.slice(1, 2))}
                
            </div>
            <div className="row">
                {gridBuild(numbers.slice(9))}
                {gridBuild(char.slice(5, 6))}
                {gridBuild(char.slice(4, 5))}
            </div>
        </div>
    )
};

export default ButtonsGrid;