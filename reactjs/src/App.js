import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testMessage: null
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/")
            .then(response => response.json())
            .then(data => 
                this.setState({
                    testMessage : data.message
                })
            )
    }
    render() {
        return (
            <h1> { this.state.testMessage } </h1>
        );
    }
}

export default App;
