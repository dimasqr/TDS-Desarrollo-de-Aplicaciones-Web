import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.scss";
import { useDispatch } from "react-redux";
import { removeTask } from "../../features/tasks/tasksSlice";
import { removeGoal } from "../../features/goals/goalsSlice";

function Item({ name, description, dueDate, index, isTask }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (isTask) {
      dispatch(removeTask(index));
    } else {
      dispatch(removeGoal(index));
    }
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <div className="content">
          <p>
            <strong>Name</strong>
          </p>
          <p>{name}</p>
          <p>
            <strong>Description</strong>
          </p>
          <p>{description}</p>
          <p>
            <strong>Due Date:</strong> {dueDate}
          </p>
        </div>
        <Button className="remove-btn" onClick={handleRemove}>
          Remover
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
