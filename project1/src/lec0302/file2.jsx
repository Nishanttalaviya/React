import { useContext } from "react";
import { UserContext } from "./file1";

export const ProvideUserDetails = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <p>
            Usenname :- {user.name} <br />
            id : {user.id}
        </p>
    </div>
  )
}

export const Page1 = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <ProvideUserDetails />
        </div>
    )
}

export const page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <ProvideUserDetails />
    </div>
  );
};

export const page3 = () => {
  return (
    <div>
      <h1>Page 3</h1>
      <ProvideUserDetails />
  </div>
);
};