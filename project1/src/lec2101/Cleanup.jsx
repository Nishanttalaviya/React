import { useEffect, useState } from "react";
import { Promise } from "bluebird";
Promise.config({cancellation: true});
const fetchuser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 27,
        name: "Nishant",
      });
    }, 5000);
  });
};
const Cleanup = () => {
  const [id, setid] = useState("loading....");
  const [name, setname] = useState("loading....");
  useEffect(() => {
    const promise = fetchuser().then((var1) => {
      setid(var1.id);
      setname(var1.name);
    });
    return () => {
      promise.cancel(); // Cancel the promise when cleanup function is called
    };
  }, []);

  return (
    <div>
      <h1>User Id : {id}</h1>
      <h1>User Name : {name}</h1>
    </div>
  );
};

export default Cleanup;


//create & registration form with follwing details
//1)cricketer name (text box) minimum & characters
//2) gender (radio button)
//3) email (text box), email validation
//4) matches (checkbox) ODI,TEST, T20,Domestic
//5) password and confirm password batch password should be same
//6) contury (dropdowm)
//7) save button
// when user click on save button all above details should be displayed below form in lable format