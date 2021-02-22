import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import MovieList from "../Movielist/MovieList";
import ReactStars from "react-rating-stars-component";

const Add = ({handleMovie, setMovielist, movielist}) => {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [type, settype] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState(1);
  const [trailer, settrailer] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addmovie = () => {
    handleMovie({name, image, type, description, rating, trailer});
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Movie Name:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setname(e.target.value)}
            />
            <Form.Label>Movie Banner:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setimage(e.target.value)}
            />
            <Form.Label>Movie Type:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => settype(e.target.value)}
            />
            <Form.Label>Movie Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setdescription(e.target.value)}
            />
            <Form.Label>Trailer:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => settrailer(e.target.value)}
            />
            <Form.Label>Movie Rating:</Form.Label>
            <ReactStars
              count={5}
              onChange={(v) => setrating(v)}
              size={24}
              activeColor="#ffd700"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addmovie();
              setMovielist([
                ...movielist,
                {
                  id: Math.random(),
                  name: name,
                  image: image,
                  type: type,
                  description: description,
                  rating: Number(rating),
                  trailer: trailer,
                },
              ]);
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
