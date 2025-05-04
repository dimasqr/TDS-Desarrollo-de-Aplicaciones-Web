import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Formulario from "../Formulario/Formulario";
import "./Menu.scss";

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("Goal");

  const handleShow = (type) => {
    setType(type);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleShow("Task")}>Tasks</Nav.Link>
              <Nav.Link onClick={() => handleShow("Goal")}>Goals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add {type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulario type={type} onClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Menu;
