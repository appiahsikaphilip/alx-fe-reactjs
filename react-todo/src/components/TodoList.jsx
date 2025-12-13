import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add todo" 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}
