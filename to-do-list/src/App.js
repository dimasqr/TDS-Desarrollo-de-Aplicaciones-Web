import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Item from "./Components/Item/Item";
import Formulario from "./Components/Formulario/Formulario";
import Menu from "./Components/Menu/Menu";

function App() {
  const tasks = useSelector((state) => state.tasks.items);
  const goals = useSelector((state) => state.goals.items);

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col md={4}>
            <Formulario type="goal" />
            <Formulario type="task" />
          </Col>
          <Col md={8}>
            <h4>Goals</h4>
            {goals.map((goal, index) => (
              <Item
                key={`goal-${index}`}
                index={index}
                name={goal.name}
                description={goal.description}
                dueDate={goal.dueDate}
                isTask={false}
              />
            ))}

            <h4 className="mt-4">Tasks</h4>
            {tasks.map((task, index) => (
              <Item
                key={`task-${index}`}
                index={index}
                name={task.name}
                description={task.description}
                dueDate={task.dueDate}
                isTask={true}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
