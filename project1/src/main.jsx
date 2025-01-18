import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Problem1 from './exercises/exercise1';
import Problem2 from './exercises/exercise2';
import Problem3 from './exercises/exercise3';
import Items from './lec1801/useeffectex02';
import Useeffect from './lec1801/useeffect';
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
 <Useeffect/>
  </StrictMode>
);

 