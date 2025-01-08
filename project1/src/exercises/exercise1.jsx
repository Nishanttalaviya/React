//1.create a react pure functional  component that will take 2 number and print add,su,multi,div
import { useState } from "react";

const Problem1 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />
      <input
        type="number"
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />
      <div>
        <span>Addition: {num1 + num2}</span>
        <br />
        <span>Subtraction: {num1 - num2}</span>
        <br />
        <span>Multiplication: {num1 * num2}</span>
        <br />
        <span>
          Division:{" "}
          {num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero"}
        </span>
      </div>
    </div>
  );
};

export default Problem1;