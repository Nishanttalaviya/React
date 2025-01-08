//4. create a react pure functional component 
// that will take text input and print total number of characters

import { useState } from "react";

const Problem4 = () => {
  const [char, setchar] = useState("");

  return (
    <div>
      <input
        type="text"name="char"id="char"
        onChange={(e) => setchar(e.target.value)}
      />
      <div>
        <span>The lengthis : {char.length}</span>
      </div>
    </div>
  );
};

export default Problem4;