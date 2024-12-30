import React from 'react';
class StateXYZ extends React.Component {
    state = {
        first: false,
        second:3.14,
        third: 'hello world',
        fourth:"red",
        fifth:"green",
    };
    constructor(){
        super();
        setInterval(() => {
         this.setState({
            first:true,
            second:4.18,
            third:"world",
            fourth:"blue",
            fifth:"purple",   
        });
    },3000);
    }

    render() {
        const {first, second, third, fourth, fifth} = this.state;
        return (
            <div>
                <button disabled={first}>my button</button>
                <p style={{color:fourth}}>value of float variable is<strong>{second}</strong></p>
                <p style={{color:fifth}}>value of float variable is<strong>{third}</strong></p>
            </div>
        );
    }

}
export default StateXYZ;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import StateXYZ from './lec2412/statement';

// //1. class base imlentions
// //2. functional imlentions

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StateXYZ/>
//   </StrictMode>
// );
