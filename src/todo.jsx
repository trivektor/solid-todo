import Fa from "solid-fa";
import db from "./db";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Context from "./context";
import { useContext } from "solid-js";

const Todo = ({ todo: { description, id, done } }) => {
  const { setTodos } = useContext(Context);
  const onDelete = async () => {
    await db.todos.where("id").equals(id).delete();
    setTodos(await db.todos.toArray());
  };
  const onToggleDone = async (event) => {
    await db.todos
      .update(id, { done: event.target.checked })
      .then((updated) => {
        console.log({ updated });
      });
    setTodos(await db.todos.toArray());
  };

  return (
    <div>
      <input type="checkbox" checked={done} onClick={onToggleDone} />{" "}
      <span style={{ "text-decoration": done ? "line-through" : "" }}>
        {description}
      </span>{" "}
      <a onClick={onDelete}>
        <Fa icon={faTrash} />
      </a>
    </div>
  );
};

export default Todo;
