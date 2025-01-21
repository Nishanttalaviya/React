import React, { useState } from 'react'
import Cleanup from './Cleanup'

const Showuser= ({ var3 })=>(var3?<Cleanup/>:null);

const CustomCom=()=>{

    const[show,setshow]=useState(false);
    return (
        <>
        <button type='button' onClick={()=>setshow(!show)}>
         {show ? "hide user":"show user"}
        </button>
        <Showuser var3={show}/>
        </>
       )
}
    
export default CustomCom;