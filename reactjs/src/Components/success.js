import React from 'react';

import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Success extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url : 'url-shortener-p17.herokuapp.com/' + this.props.url,
            redirects : this.props.redirects
        }
        this.copyUrl = this.copyUrl.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    copyUrl() {
        navigator.clipboard.writeText(this.state.url);
    }
    goBack() {
        this.props.setStatus(205); 
    }
    render() {
        return (
            <Container className="p-5 bg-dark p-4 rounded shadow-lg">
                <Form.Label htmlFor="basic-url" className="display-6 text-light">Your shortened URL</Form.Label>

                <InputGroup className="mb-3">
                    <FormControl value={ this.state.url }/>
                <Button onClick={ this.copyUrl } variant="primary">Copy URL</Button>
                </InputGroup>
                <h6 className='text-white'>Long URL:
                    <a className='link-primary text-decoration-none' role='button' href={ '//' + this.state.redirects.replace("https://", '').replace("http://", '') } target='_blank'> {this.state.redirects}</a>.</h6>
                <h6 className='text-white'>Create other
                    <a className='link-primary text-decoration-none' role='button' onClick={ this.goBack }> shortened URL</a>.
                </h6>
            </Container>
        );
    }
}
export default Success;
