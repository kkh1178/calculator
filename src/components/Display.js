import React, {useState} from 'react';

const Display = () => {
    const [math, setMath] = useState("");

    console.log(math)
    
    return (
        <div className="ui grid">
            <div className="row">
                <div className="four wide column">
                    <div className="ui input">
                        <input 
                            type="number"
                            // pattern="[0-9]*-/+()" 
                            value={math} 
                            onChange={(event) => setMath(event.target.value)}
                            placeholder="0"></input>
                    </div>  
                </div>
            </div>
        </div>
        
    )
};

export default Display;