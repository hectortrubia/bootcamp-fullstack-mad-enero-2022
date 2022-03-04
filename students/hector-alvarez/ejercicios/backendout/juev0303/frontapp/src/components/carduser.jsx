import React from "react"
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

function CardUser(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.username}</Card.Title>
        <Card.Text>
          {props.name}{props.lastname}{props.country}{props.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  )

}

export default CardUser;

