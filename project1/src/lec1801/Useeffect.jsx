import * as React from "react";

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ x: "R.k ", y: 1 });
    }, 500);
  });
}

function Useeffect() {
  const [name, setName] = React.useState("loading...");
  const [id, setId] = React.useState("loading...");
  const [mm, setMM] = React.useState(5); 
  const [ss, setSS] = React.useState(0); 
  React.useEffect(() => {
    let timer;

    fetchUserData().then((data) => {
      setName(data.x);
      setId(data.y);
    });

    timer = setInterval(() => {
      setSS((prevSS) => {
        if (prevSS === 0) {
          setMM((prevMM) => {
            if (prevMM === 0) {
              clearInterval(timer); // Stop the timer when it reaches 00:00
              return 0; // Prevent negative minutes
            }
            return prevMM - 1;
          });
          return 59;
        }
        return prevSS - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []); // Empty dependency array means this runs only once on mount

  const formattedMM = String(mm).padStart(2, '0');
  const formattedSS = String(ss).padStart(2, '0');

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>ID: {id}</h2>
      <h2>Time: {formattedMM}:{formattedSS}</h2>
    </div>
  );
}

export default Useeffect;

//implement image changer with useeffect
//create list of images change images at interval of seconds

