import {useState ,  useEffect } from "react";
import { createContext } from "react"

export const UserContext = createContext();
const FetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 13,
        name: "RJ",
      });
    }, 5000);
  })
}
export const UserProvider = ({children}) => {
  const [user, setuser] = useState({
    id: "loading...",
    name: "loading..."
  })
  useEffect(() => {
    FetchUser()
     .then(data => setuser(data))
     .catch(err => console.error(err))
  }, [])
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}