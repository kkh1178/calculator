import React from 'react';
// import GridLayout from './GridLayout'



const Button = ({numbers, selected, onSelectedChange}) => {
    const gridBuild = (numbers) => {
        // interating through the numbers array and returning the button color based on value.
        const calculatorNumbers = numbers.map((number) => {
            // console.log(number)
            if (number.value > 0) {
                return (
                    <div className="one wide column">
                        <div 
                            key={number.value}
                            className="large ui inverted blue button"
                            onClick={()=>{onSelectedChange(number.value)}}
                            >
                            {number.label}
                        </div>
                    </div>
            
                    
                )
            } else {
                return (
                    <div className="three wide column">
                        <div 
                            key={number.value}
                            className="large fluid ui inverted purple button"
                            onClick={()=>{onSelectedChange(number.value)}}>
                            {number.label}
                        </div>
                    </div>
                    
                )
            }
            
        });
        return calculatorNumbers;
    }

    return (
        <div className="ui grid">
            <div className="row">
                {gridBuild(numbers.slice(0,3))}
            </div>
            <div className="row">
                {gridBuild(numbers.slice(3,6))}
            </div>
            <div className="row">
                {gridBuild(numbers.slice(6,9))}
            </div>
            <div className="row">
                {gridBuild(numbers.slice(9))}
            </div>
        </div>
    )
};

export default Button;




// <div className="ui grid">
//             <div className="row">
//                 <div className="one wide column">
//                     <div className="large ui inverted purple button">
//                         1 
//                     </div>
                    
//                 </div>
            
//                 <div className="one wide column">
//                     <div className="large ui inverted purple button">
//                         2 
//                     </div>
//                 </div>
//                 <div className="one wide column">
//                     <div className="large ui inverted purple button">
//                         3 
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="three wide column">
//                     <div className="large fluid ui inverted purple button">
//                         0 
//                     </div>
//                 </div>
//             </div>
//         </div>



// function buttonBuilder(buttons) {
//     buttons.map()
// }
// buttonsList = [{}, {}]

// return (
//     <div>
//         <div className="row">
//             {buttonBuilder(buttonsList[0:3])}
//         </div>
//         <div className="row">
//             {buttonBuilder(buttonsList[3:6])}</div>
//         <div className="row">
//             {buttonBuilder(buttonsList[6:])}</div>
//     </div>
// )