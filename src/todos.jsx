import { createSignal, For, onMount, useContext } from "solid-js";
import db from "./db";
import Todo from "./todo";
import Context from "./context";

const Todos = () => {
  const [description, setDescription] = createSignal("");
  const { todos, setTodos } = useContext(Context);

  const onSubmit = async (event) => {
    event.preventDefault();

    await db.todos.add({
      description: description(),
    });

    setTodos(await db.todos.toArray());
    setDescription("");
  };

  onMount(async () => {
    setTodos(await db.todos.toArray());
  });

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Add new todo"
          value={description()}
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <For each={todos}>
        {(todo) => {
          return <Todo todo={todo} />;
        }}
      </For>
    </div>
  );
};

export default Todos;
