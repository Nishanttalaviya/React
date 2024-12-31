import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hookexm1 from './lect3112/hook';
import MyCustButton from './lect3112/Purefun2';
//1. class base imlentions
//2. functional imlentions

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <MyCustButton />
    <br />
    <MyCustButton var1={true} />
    <br />
    <MyCustButton var2={"6CEB"} />
    <br />
    <MyCustButton var1={true} var2={"BTech"} />
 <Hookexm1/> 
  </StrictMode>
);

 