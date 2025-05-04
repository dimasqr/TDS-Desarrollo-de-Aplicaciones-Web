import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function SelectorView() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h2>¿Qué deseas agregar?</h2>
      <div className="d-flex justify-content-center gap-4 mt-4">
        <Button variant="primary" onClick={() => navigate("/add-goal")}>
          Agregar Goal
        </Button>
        <Button variant="success" onClick={() => navigate("/add-task")}>
          Agregar Task
        </Button>
      </div>
    </Container>
  );
}

export default SelectorView;
