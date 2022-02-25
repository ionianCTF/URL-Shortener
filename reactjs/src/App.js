import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';

import './App.css';
import Input from './Components/input.js';
import Error from './Components/urlError.js';
import Success from './Components/success.js';
import Footer from './Components/footer.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 205,
            last : {
                url : '',
                redirects : ''
            }
        };
        this.setStatus = this.setStatus.bind(this);
    }
    setStatus(code, last) {
        /*200 OK
          205 Reset Content
          404 Not Found
          406 Not Acceptable
        */
        if (last) {
            this.setState( (state, props) => ({
                status: code,
                last : { 
                    url : last.url,
                    redirects : last.redirects
                }
            }));
        } else {
            this.setState( (state, props) => ({
                status: code
            }));
          
        }
    }
    render() {
        var toRender;
        if (this.state.status == 205) {
            toRender = <Input setStatus = { this.setStatus } />;
        } else if (this.state.status == 406) {
            toRender = <Error setStatus = { this.setStatus } />;
        } else if (this.state.status == 200) {
            toRender = <Success url = { this.state.last.url } redirects = { this.state.last.redirects } setStatus = { this.setStatus } />;
        }
        return (
            <div>
            <Form className="text-center">
                <Form.Label className="display-1 fw-bold font-monospace">Short URL</Form.Label>
            </Form>
            {toRender}
            <Footer />
            </div>
        );
    }
}

export default App;
