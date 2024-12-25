import React from "react";

class Htmlcomponent extends React.Component {
    render() {
        return (
            <div>
            <label>textbox</label>
            <input type="text" />
            <br />
            <label>checkbox</label>
            <input type="checkbox" />
            <br />
            <label>radio</label>
            <input type="radio" />
            <br />
            <input type="file" />
            <br />
            <input type="submit" />
            <br />
            </div>
        );

    }
};
export default  Htmlcomponent;