import React, {useState} from 'react';
import Button from './components/ButtonsGrid';
import Display from './components/Display';

const numbers = [
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
    }
];

const specialChar = [
    {
        label: "+"
    },
    {
        label: "-"
    },
    {
        label: "/"
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
        label: "X"
    },
    {
        label: "X"
    },
    {
        label: "X"
    }

    

]


const App = () => {
    const [selected, setSelected] = useState(numbers);

    return (
        <div className="ui inverted segment">
            <Display />
            <Button 
                numbers={numbers} 
                selected ={selected}
                onSelectedChange={setSelected}
                char={specialChar}
                />
        </div>
    )
};

export default App;