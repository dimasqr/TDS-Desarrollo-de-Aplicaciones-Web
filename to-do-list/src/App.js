import logo from "./logo.svg";
import "./App.scss";
import Item from "./Components/Item/Item";
import Menu from "./Components/Menu/Menu";
import Formulario from "./Components/Formulario/Formulario";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  const items = [
    {
      name: "Proyecto de Curso de desarrollo web",
      description:
        "Elaborar una aplicación web responsive en la que se pueda llevar control de mis metas y tareas personales",
      dueDate: "31/05/2024",
    },
    {
      name: "Terminar de leer libro",
      description: "Finalizar mi libro de react.",
      dueDate: "31/05/2024",
    },
    {
      name: "Subit actividad 1",
      description:
        "Responder el test en el GES correspondiente a la actividad 1",
      dueDate: "31/05/2024",
    },
  ];

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col>
            <Formulario />
          </Col>
          <Col>
            {items.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                description={item.description}
                dueDate={item.dueDate}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
