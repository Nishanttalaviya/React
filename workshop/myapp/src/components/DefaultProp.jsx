import React from "react";

const PersonDefaultDemo = ({ name, gender, designation }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Designation: {designation}</p>
        </div>
    );
};

PersonDefaultDemo.defaultProps = {
    name: "ABCXYZ",
    gender: "Male",
    designation: "Director",
};

export default PersonDefaultDemo;
