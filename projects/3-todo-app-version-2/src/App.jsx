import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import "./App.css";

function App() {
  const todoItems = [{
    name: 'Buy Milk',
    dueDate: "7/7/2024",
  },
  {
    name: 'Goto college',
    dueDate: "7/7/2024",
  },
  {
    name: 'practice Aptitude',
    dueDate: "7/7/2024",
  },
];
  return (
    <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
        
    </center>
  );
}

export default App;
