import { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // this will prevent loading
    if (todo) {
      //we will first check if we have any todo
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
     
     
    }
  };

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">taskfy</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
