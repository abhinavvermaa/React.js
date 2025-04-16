import React, { createContext, useContext, useState } from "react";

// Create the context
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
});

// Custom hook to use the context
export const useTodo = () => {
  return useContext(TodoContext);
};

// TodoProvider component
export const Todoprovider = ({ children }) => {
  // State to manage todos
  const [todos, setTodos] = useState([
    { id: 1, todo: "Sample todo message" },
  ]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), todo: newTodo },
    ]);
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Provide the state and functions to children
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
