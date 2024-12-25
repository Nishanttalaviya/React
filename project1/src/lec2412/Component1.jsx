import React from "react";

class Component2 extends React.Component {
    render() {
        return(
            <div>
                <h1>components2</h1>
                <h2>hello</h2>
            </div>
        );
    }
}


class Component1 extends React.Component {
    render() {
        return(
            <div>
                <h1>components1</h1>
                <h2>components</h2>
                <Component2/>
            </div>
        );
    }
};

export default Component1;