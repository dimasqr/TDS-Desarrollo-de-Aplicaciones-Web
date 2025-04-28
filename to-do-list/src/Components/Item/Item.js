import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.scss";

function Item({ name, description, dueDate }) {
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
        <Button className="remove-btn">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
