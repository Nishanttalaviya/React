import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Stateexm3 from './lect3112/hook3';
//1. class base imlentions
//2. functional imlentions

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <MyCustButton />
    <br />
    <MyCustButton var1={true} />
    <br />
    <MyCustButton var2={"6CEB"} />
    <br />
    <MyCustButton var1={true} var2={"BTech"} />
  */}
 <Stateexm3/>
  </StrictMode>
);

 