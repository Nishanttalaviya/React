import { useEffect, useState } from "react";

const Effect1 = () => {
  const [count, setCount] = useState(5); 
  const [showList, setShowList] = useState(false);
  const items = ["a", "b", "c", "d", "d"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer); 
          setShowList(true);   }
        return prevCount > 0 ? prevCount - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Countdown: {count}</h1>
      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Effect1;