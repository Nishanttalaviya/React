import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Problem1 from './exercises/exercise1';
import Problem2 from './exercises/exercise2';
import Problem3 from './exercises/exercise3';
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
 <Problem3/>
  </StrictMode>
);

 