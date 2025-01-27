import React from "react";

//function base
function Person(props){
    return(
        <>
        <h1>Full Name:{props.personData.firstname+""+props.personData.lastname} </h1>
        <h2>Designation:{props.personJobData.designation} </h2>
        <h3>Experince:{props.personJobData.experince} </h3>
        
        </>
    )
}
export default Person;