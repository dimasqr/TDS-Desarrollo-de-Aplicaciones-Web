import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.scss";
import { useDispatch } from "react-redux";
import { deleteTaskAsync } from "../../features/tasks/tasksSlice";
import { deleteGoalAsync } from "../../features/goals/goalsSlice";

function Item({ name, description, dueDate, index, isTask }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (isTask) {
      dispatch(deleteTaskAsync(index));
    } else {
      dispatch(deleteGoalAsync(index));
    }
  };

  return (
    <Card className="custom-card">
      <Card.Body>
        <div className="content">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
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
