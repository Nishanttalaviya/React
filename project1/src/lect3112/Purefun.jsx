import * as React from "react";
export default ({ var1, var2 }) => <button disabled={var1}>{var2}</button>;

//  import { StrictMode } from 'react'
//  import { createRoot } from 'react-dom/client'
//  import './index.css'
//  import Purefun from './lect3112/Purefun';
 
//  //1. class base imlentions
//  //2. functional imlentions
 
//  createRoot(document.getElementById('root')).render(
//    <StrictMode>
//      {/* <MyCustom/> */}
//      <Purefun var1={true} var2={'hello'}/>
//      <Purefun var1={false} var2={'how are you'}/>
//    </StrictMode>
//  );
 