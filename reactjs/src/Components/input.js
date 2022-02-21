import React from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Input extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className="vertical-center bg-dark p-4 rounded shadow-lg">
                <Form.Label htmlFor="basic-url" className="display-6 text-light">Paste the URL to be shortened</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Enter the link here" aria-label="Enter the link here" aria-describedby="basic-describedby" />
                    <Button variant="outline-secondary">Shorten URL</Button>
                </InputGroup>
            </Container>
        );
    }
}
export default Input;
