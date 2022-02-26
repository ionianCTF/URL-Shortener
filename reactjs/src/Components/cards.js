import React from 'react';

import CardGroup from  'react-bootstrap/CardGroup';
import Card from  'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';

class Cards extends React.Component{
    render() {
        const aClassName = 'bg-primary m-3 rounded';
        return (
            <CardGroup
                border='primary'
                className='m-5 w-75 text-light text-center shadow-lg bg-dark rounded'
            >
                <Card className = { aClassName }>
                    <Card.Title>React JavaScript</Card.Title>
                    <Card.Text>
                        <Icon.Facebook />
                    </Card.Text>
                </Card>
                <Card className = { aClassName }>
                    <Card.Title>Firebase</Card.Title>
                    <Card.Text>
                        <Icon.Google />
                    </Card.Text>
                </Card>
                <Card className = { aClassName }>
                    <Card.Title>Heroku</Card.Title>
                    <Card.Text>
                        <Icon.Gear />
                    </Card.Text>
                </Card>
                <Card className = { aClassName }>
                    <Card.Title>Netlify</Card.Title>
                    <Card.Text>
                        <Icon.GearFill />
                    </Card.Text>
                </Card>
                <Card className = { aClassName }>
                    <Card.Title>Netlify</Card.Title>
                    <Card.Text>
                        <Icon.GearFill />
                    </Card.Text>
                </Card> 
            </CardGroup>
        );
    };
}
export default Cards;
