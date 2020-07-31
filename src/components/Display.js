import React from 'react';

const Display = ({calculatorExpression}) => {


    
    return (
        <div className="ui grid">
            <div className="row">
                <div className="container">
                    <div class="ui input">
                        <input type="text" value={calculatorExpression.join(" ")}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Display;