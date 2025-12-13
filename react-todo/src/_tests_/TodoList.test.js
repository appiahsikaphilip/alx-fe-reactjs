import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render Test
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the title is rendered
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  // Test 2: Adding a New Todo
  test('allows users to add a new todo', () => {
    render(<TodoList />);
    
    // Find the input and button
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Simulate user typing
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    
    // Simulate form submission
    fireEvent.click(addButton);
    
    // Check if the new todo appears in the list
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Check if input is cleared after adding
    expect(input.value).toBe('');
  });

  // Test 3: Toggling Todo Completion
  test('allows users to toggle todo completion status', () => {
    render(<TodoList />);
    
    // Find a todo item
    const todoItem = screen.getByText('Learn React');
    
    // Initially, it should not be completed (no line-through)
    expect(todoItem).toHaveStyle({ textDecoration: 'none' });
    
    // Click to toggle
    fireEvent.click(todoItem);
    
    // After clicking, it should be completed (line-through)
    expect(todoItem).toHaveStyle({ textDecoration: 'line-through' });
    
    // Click again to toggle back
    fireEvent.click(todoItem);
    
    // Should be back to not completed
    expect(todoItem).toHaveStyle({ textDecoration: 'none' });
  });

  // Test 4: Deleting a Todo
  test('allows users to delete a todo', () => {
    render(<TodoList />);
    
    // Find a todo item
    const todoText = 'Learn React';
    expect(screen.getByText(todoText)).toBeInTheDocument();
    
    // Find all delete buttons
    const deleteButtons = screen.getAllByText('Delete');
    
    // Click the first delete button
    fireEvent.click(deleteButtons[0]);
    
    // The todo should no longer be in the document
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });

  // Test 5: Prevents Adding Empty Todos
  test('does not add empty todos', () => {
    render(<TodoList />);
    
    // Count initial todos
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Try to add empty todo
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Count should remain the same
    const currentTodos = screen.getAllByRole('listitem');
    expect(currentTodos.length).toBe(initialCount);
  });

  // Test 6: Multiple Operations
  test('handles multiple add and delete operations', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add first todo
    fireEvent.change(input, { target: { value: 'First Todo' } });
    fireEvent.click(addButton);
    
    // Add second todo
    fireEvent.change(input, { target: { value: 'Second Todo' } });
    fireEvent.click(addButton);
    
    // Verify both are added
    expect(screen.getByText('First Todo')).toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
    
    // Delete the first one we added
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[deleteButtons.length - 2]);
    
    // First should be gone, second should remain
    expect(screen.queryByText('First Todo')).not.toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
  });

  // Test 7: Verify Initial Completed State
  test('renders initial todos with correct completion status', () => {
    render(<TodoList />);
    
    const masterTesting = screen.getByText('Master Testing');
    const learnReact = screen.getByText('Learn React');
    
    // Master Testing should be completed (line-through)
    expect(masterTesting).toHaveStyle({ textDecoration: 'line-through' });
    
    // Learn React should not be completed
    expect(learnReact).toHaveStyle({ textDecoration: 'none' });
  });
});