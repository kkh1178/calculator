import React from 'react';

const Display = ({calculatorExpression}) => {


    
    return (
        <div className="ui grid">
            <div className="row">
                <div className="display">
                        {/* <input type="text" placeholder="0" value={calculatorExpression.join(" ")}/> */}
                    <div placeholder="0">{calculatorExpression.join(" ")}</div>
                </div>
            </div>
        </div>
        
    )
};

export default Display;