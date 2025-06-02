import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulario.scss";
import { useDispatch } from "react-redux";
import { addGoalAsync } from "../../features/goals/goalsSlice";
import { addTaskAsync } from "../../features/tasks/tasksSlice";
import { useState } from "react";

function Formulario({ type, onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, description, dueDate };

    if (type.toLowerCase() === "goal") dispatch(addGoalAsync(newItem));
    else dispatch(addTaskAsync(newItem));

    setName("");
    setDescription("");
    setDueDate("");
    if (onClose) onClose();
  };

  return (
    <Form className="goal-form mb-4" onSubmit={handleSubmit}>
      <h3>{type === "goal" ? "Agregar Goal" : "Agregar Task"}</h3>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>
      <Button className="add-goal-btn" type="submit">
        {type === "goal" ? "ADD GOAL" : "ADD TASK"}
      </Button>
    </Form>
  );
}

export default Formulario;
