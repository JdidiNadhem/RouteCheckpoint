import React from "react";
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import "./card.css";

const card = ({image, rating, name, type, description, Link}) => {
  return (
    <div>
      <Card style={{width: "27rem", marginBottom: "5%"}}>
        <Card.Img
          className="c-img"
          variant="top"
          src={image}
          alt="Movie image"
        />
        <Card.Body className="c-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{type}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default card;
