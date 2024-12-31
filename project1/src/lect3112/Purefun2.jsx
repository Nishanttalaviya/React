import * as React from "react";
const MyCustButton = ({ var1, var2 }) => (
  <button disabled={var1}>{var2}</button>
);

MyCustButton.defaultProps = {
  var1: false,
  var2: "Default Button Text",
};
export default MyCustButton;
//code run mate niche main.jsx

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// //import Hookexm1 from './lect3112/hook';
// import MyCustButton from './lect3112/Purefun2';
// //1. class base imlentions
// //2. functional imlentions

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <MyCustButton />
//     <br />
//     <MyCustButton var1={true} />
//     <br />
//     <MyCustButton var2={"6CEB"} />
//     <br />
//     <MyCustButton var1={true} var2={"BTech"} />
// {/* <Hookexm1/> */}
//   </StrictMode>
// );
