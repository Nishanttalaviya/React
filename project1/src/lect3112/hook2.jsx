import { useState } from "react";

function Stateexm2() {
    const [name, setName] = useState("rku");
    const [age, setAge] = useState("23");

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <h1>{age}</h1>
                <input 
                    type="text" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Stateexm2;
