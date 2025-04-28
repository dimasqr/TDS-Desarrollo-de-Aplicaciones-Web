import Item from "./Item";

function ItemList() {
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
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          description={item.description}
          dueDate={item.dueDate}
        />
      ))}
    </div>
  );
}

export default ItemList;
