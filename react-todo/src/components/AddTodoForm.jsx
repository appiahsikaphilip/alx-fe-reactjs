import { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  // State to manage input value
  const [inputValue, setInputValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation - check that field is not empty
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;