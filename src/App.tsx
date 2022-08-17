import { useContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Todo from "./components/Todo/Todo";
import { StoreContext } from "./StoreContext";

function App() {
  const context: any = useContext(StoreContext);

  return (
    <div className="app">
      <div className="main-container">
        <NavBar />
        <div className="todo_list">
          <Todo />
        </div>
        {context.store?.news && <News />}
      </div>
    </div>
  );
}

export default App;
