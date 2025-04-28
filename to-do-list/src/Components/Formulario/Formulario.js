import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulario.scss";

function Formulario({ onAddGoal }) {
  return (
    <Form className="goal-form">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <div className="button-container">
        <Button className="add-goal-btn" type="submit">
          ADD GOAL
        </Button>
      </div>
    </Form>
  );
}

export default Formulario;
