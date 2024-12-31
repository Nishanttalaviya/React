import React from "react";
import MyButton from "./propsexm"; // Ensure this path is correct
import MyList from "./propsexm2"; // Ensure this path is correct

class MyCustom extends React.Component {
    constructor() {
        super();
        this.state = {
            var1: true,
            var2: "btn",
            var3: ["a", "b", "c", "d", "e", "f"],
        };
        setTimeout(() => {
            this.setState({
                var1: false,
                var2: "btn2",
                var3: ["a", "b", "c"],
            });
        }, 3000);
    }

    render() {
        const { var1, var2, var3 } = this.state;
        return (
            <div>
                <MyButton prop1={var1} xyz={var2} />
                <MyList itms={var3} />
            </div>
        );
    }
}

export default MyCustom;
