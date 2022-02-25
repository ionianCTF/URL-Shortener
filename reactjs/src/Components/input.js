import React from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            link : '',
            loading : false
        };
        this.addUrl = this.addUrl.bind(this);
    }
    addUrl() {
        this.setState({
            loading : true
        });
        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);

        if (this.state.link.match(regex)) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ url : this.state.link })
            };
            fetch('https://url-shortener-p17.herokuapp.com/new', requestOptions)
                .then(response => response.json())
                .then(data => {
                    const last = {
                        url : data.url,
                        redirects : this.state.link
                    }
                    this.props.setStatus(200, last);
                });
        } else {
            this.props.setStatus(406);
        }
    }
    render() {
        var spinner;
        if (this.state.loading) {
            spinner = <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true'/> 
        } else {
            spinner = null
        }
        
        return (
            <Container className="text-center bg-dark p-4 rounded shadow-lg">
                <Form.Label htmlFor="basic-url" className="display-6 text-light" value={this.state.link}>Paste the URL to be shortened</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl 
                        placeholder="Enter the link here" 
                        aria-label="Enter the link here" 
                        aria-describedby="basic-describedby"
                        value={this.state.val}
                        onChange={e => this.setState({ link: e.target.value })}
 />
                    <Button onClick={this.addUrl} variant="primary">Shorten URL
                        { spinner }
                    </Button>
                </InputGroup>
            </Container>
        );
    }
}
export default Input;
