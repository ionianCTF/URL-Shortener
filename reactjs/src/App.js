import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Input from './Components/input';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testMessage: null
        }
    }
    render() {
        return (
            <Form className="text-center">
                <Form.Label className="display-1 fw-bold font-monospace">Short URL</Form.Label>
                <Input message = { this.state.testMessage } />
            </Form>
        );
    }
}

export default App;
