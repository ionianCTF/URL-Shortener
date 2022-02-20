import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Input from './Components/input';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testMessage: null
        }
    }
 //   componentDidMount() {
 //       fetch("http://localhost:3001/")
 //           .then(response => response.json())
 //           .then(data => 
 //               this.setState({
 //                   testMessage : data.message
 //               })
 //           )
 //   }
    render() {
        return (
            <Input message = { this.state.testMessage } />
        );
    }
}

export default App;
