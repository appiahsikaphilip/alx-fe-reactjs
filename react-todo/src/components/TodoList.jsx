import React, { useState } from "react";

// Single Todo Item
function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => toggleTodo(todo.id)}
      data-testid="todo-item"
    >
      {todo.text}
      <button
        onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}
        data-testid="delete-btn"
      >
        Delete
      </button>
    </li>
  );
}

// Form to add a new todo
function AddTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-btn">Add</button>
    </form>
  );
}

// Main TodoList Component
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
