import Item from "./Item";
import { useSelector } from "react-redux";

function ItemList() {
  const tasks = useSelector((state) => state.tasks.items);
  const goals = useSelector((state) => state.goals.items);

  const combined = [...goals, ...tasks];

  return (
    <div>
      {combined.map((item, index) => (
        <Item
          key={index}
          index={index}
          name={item.name}
          description={item.description}
          dueDate={item.dueDate}
        />
      ))}
    </div>
  );
}

export default ItemList;
