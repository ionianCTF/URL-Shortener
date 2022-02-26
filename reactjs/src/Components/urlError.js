import React from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

class Error extends React.Component{
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.setStatus(205); 
    }
    render() {
        return (
            <Container className="p-5 bg-dark p-4 rounded shadow-lg">
                <Form.Label htmlFor="basic-url" className="display-6 text-light">An error occurred to generate the URL</Form.Label>
                <Form.Text>
                    <h2 className='font-weight-bold'>The URL is not valid,</h2>
                <h4 className='mb-4'>make sure the url tou tried to shorten is correct.</h4> <h4>Possible errors:</h4></Form.Text>
                    <ListGroup className='text-right' as='ol' numbered>
                        <ListGroup.Item as='li' >Check if the domain is correct</ListGroup.Item>
                        <ListGroup.Item as='li' >Check if the site is online</ListGroup.Item>
                        <ListGroup.Item as='li' >Check the length of the url is not too small</ListGroup.Item>
                        <ListGroup.Item as='li' >Check the addressbars and punctuation</ListGroup.Item>
                        <ListGroup.Item as='li' >The URL may have been blocked</ListGroup.Item>
                        <ListGroup.Item as='li' >The URL may have been reported</ListGroup.Item>
                        <ListGroup.Item as='li' >Make sure the url does not contain spam</ListGroup.Item>
                    </ListGroup>
                <Button className='mt-3 p-3' onClick={ this.goBack } variant="primary">Go back and try again</Button>
            </Container>
        );
    }
}
export default Error;
