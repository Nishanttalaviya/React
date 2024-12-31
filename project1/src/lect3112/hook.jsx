import { useState } from "react";

function Hookexm1(){
    const [name] = useState("hello world");
    return <h1>{name}</h1>;
}
export default Hookexm1;