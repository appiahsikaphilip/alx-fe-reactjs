import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (!inputValue.trim()) return; // Prevent empty todos
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add todo"      
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button> 
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
