import { useContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Todo from "./components/Todo/Todo";
import { StoreContext } from "./StoreContext";

function App() {
  const context = useContext(StoreContext);
  const { store } = context;

  return (
    <div className="app">
      <div className="main-container">
        <NavBar />
        <div className="todo_list">
          {store.todos.map((todo, i: number) => (
            <Todo key={i} todo={todo} />
          ))}
        </div>
        {store?.news && <News />}
      </div>
    </div>
  );
}

export default App;
