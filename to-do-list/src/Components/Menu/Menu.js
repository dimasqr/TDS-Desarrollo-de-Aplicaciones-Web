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

  const handleShow = () => setShowModal(true);
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
              <Nav.Link href="#tasks">Tasks</Nav.Link>
              <Nav.Link onClick={handleShow}>Goals</Nav.Link>{" "}
              {/* Click abre modal */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formulario */}
          <Formulario />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Menu;
