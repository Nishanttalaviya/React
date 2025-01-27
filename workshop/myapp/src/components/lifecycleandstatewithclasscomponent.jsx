import React, { Component } from 'react';

export default class Lifecyclewithclasscomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello World'
        };
    }

    componentWillMount() {
        alert('Component Will Mount');
    }

    componentDidMount() {
        alert('Component Did Mount');
    }

    componentWillUpdate() {
        alert('Component Will Update');
    }

    componentDidUpdate() {
        alert('Component Did Update');
    }

    componentWillUnmount() {
        alert('Component Will Unmount');
    }

    changeMessage = () => {
        this.setState({
            message: 'Hello Universe'
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Change Message</button>
                {this.props.children}
            </div>
        );
    }
}