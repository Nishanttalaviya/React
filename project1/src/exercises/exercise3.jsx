import { useState } from "react";

const Problem3 = () => {
  const [btntxt, setBtntxt] = useState("Show Text");
  const [btnbool, setBtnbool] = useState(false);
  const [paradisp, setParadisp] = useState("none");


  return (
    <div>
      <button onClick={() => { setBtnbool(!btnbool);
          btnbool
            ? (setParadisp("none"), setBtntxt("Show Text"))
            : (setParadisp(""), setBtntxt("Hide Text"));
        }}
      >
        {btntxt}
      </button>
      <br />
      <p style={{ display: paradisp }}>This is a sample text</p>    </div>
  );
};

export default Problem3;