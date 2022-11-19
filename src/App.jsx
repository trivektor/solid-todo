import Todos from "./todos";
import Context from "./context";
import { createStore } from "solid-js/store";

function App() {
  const [todos, setTodos] = createStore([]);

  return (
    <Context.Provider value={{ todos, setTodos }}>
      <Todos />
    </Context.Provider>
  );
}

export default App;
