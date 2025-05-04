import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulario.scss";
import { useDispatch } from "react-redux";
import { addGoal } from "../../features/goals/goalsSlice";
import { addTask } from "../../features/tasks/tasksSlice";
import { useState } from "react";

function Formulario({ type }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, description, dueDate };

    if (type === "goal") dispatch(addGoal(newItem));
    else dispatch(addTask(newItem));

    // Limpiar formulario
    setName("");
    setDescription("");
    setDueDate("");
  };

  return (
    <Form className="goal-form mb-4" onSubmit={handleSubmit}>
      <h3>{type === "goal" ? "Agregar Goal" : "Agregar Task"}</h3>
      <Form.Group className="mb-3" controlId={`formName-${type}`}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={`formDescription-${type}`}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={`formDueDate-${type}`}>
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>
      <div className="button-container">
        <Button className="add-goal-btn" type="submit">
          {type === "goal" ? "ADD GOAL" : "ADD TASK"}
        </Button>
      </div>
    </Form>
  );
}

export default Formulario;
