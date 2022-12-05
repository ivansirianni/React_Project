import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import './Cards.css'



export default function CardList({name,price, id, image}) {
    return(
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Text>
                   <span>Price: $ {price}</span>                   
                </Card.Text>
                <Card.Text>
                    <span>ID de Compra: {id}</span>
                </Card.Text>
                <Button variant="warning">More Info</Button>
        </Card.Body>
    </Card>
    )
}