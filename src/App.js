import React from 'react';
import ButtonsGrid from './components/ButtonsGrid';

const numbersAndChar = [
    {
        label: "1",
        value: 1
    },
    {
        label: "2",
        value: 2
    },
    {
        label: "3",
        value: 3
    },
    {
        label: "4",
        value: 4
    },
    {
        label: "5",
        value: 5
    },
    {
        label: "6",
        value: 6
    },
    {
        label: "7",
        value: 7
    },
    {
        label: "8",
        value: 8
    },
    {
        label: "9",
        value: 9
    },
    {
        label: "0",
        value: 0
    },
    {
        label: "+"
    },
    {
        label: "-"
    },
    {
        // label: "÷"
        label: '/'
    },
    {
        label: "*"
    },
    {
        label:"="
    },
    {
        label:"."
    },
    {
        label:"AC"
    },
    {
        label: "("
    },
    {
        label: ")"
    },
    {
        label: "X"
    }

    

]


const App = () => {

    return (
        <div className="ui inverted segment">
            <ButtonsGrid 
                numbers={numbersAndChar} 
                >
                    {/* <Button></Button> */}
                </ButtonsGrid>
        </div>
    )
};

export default App;