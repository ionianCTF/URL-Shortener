import React from 'react';

import Card from  'react-bootstrap/Card';

class Footer extends React.Component{
    render() {
        return (
            <Card 
                className='fixed-bottom text-center text-light shadow-lg bg-dark'
                border='primary'
            >
                <Card.Header>© 2022 url-shortener-p17 - Url shortener</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <a 
                            className='m-4 text-decoration-none'
                            href='https://github.com/Haki-Malai/url-shortener' 
                            target='_blank'
                        > GitHub </a>
                        <a 
                            className='m-4 text-decoration-none'
                            href='https://haki-malai.github.io/cv/'
                            target='_blank'> Online CV </a>
                        <a
                            className='m-4 text-decoration-none'
                            href='mailto:hakimalai@outlook.com'
                            target='_blank'> Contact Me </a>

                    </Card.Title>
                </Card.Body>
                <Card.Text>Powered by React JavaScript, Node JavaScript, Netlify, Heroku, Firebase and Bootstrap.
                </Card.Text>
            </Card>
        );
    };
}
export default Footer;
