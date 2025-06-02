import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoals } from "./features/goals/goalsSlice";
import { fetchTasks } from "./features/tasks/tasksSlice";
import Formulario from "./Components/Formulario/Formulario";
import Menu from "./Components/Menu/Menu";
import Item from "./Components/Item/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
    dispatch(fetchTasks());
  }, [dispatch]);

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
                key={`goal-${goal.id || index}`}
                index={goal.id}
                name={goal.name}
                description={goal.description}
                dueDate={goal.dueDate}
                isTask={false}
              />
            ))}

            <h4 className="mt-4">Tasks</h4>
            {tasks.map((task, index) => (
              <Item
                key={`task-${task.id || index}`}
                index={task.id}
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
