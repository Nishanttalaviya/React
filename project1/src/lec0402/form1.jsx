//create: stage form with following elelments
//page1: ask user to enter principle (10,000)
//page2: ask user to enter rate of interest (7)
//page3: ask user to enter duration (1 year)
//page4: show total amount including interest
import { useState } from "react"
import { createContext } from "react";

export const UserContext = createContext();

export const Page1 = ({children}) => {
    const [principle, setprinciple] = useState(10000);
    const [intrest, setintrest] = useState(7);
    const [year, setyear] = useState(1);
    const total = (principle * intrest * year) / 100;
  return (
   <UserContext.Provider value={{ principle,setprinciple, intrest ,setintrest, year,setyear , total }}>
         {children}
       </UserContext.Provider>
  )
}
