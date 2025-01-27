import React,{useState} from "react";

function UseStateFun(){
    const [count, setCount] = useState(0);

    return (
        <div>
           <p>You click {count}</p>
           <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );

}
export default UseStateFun;