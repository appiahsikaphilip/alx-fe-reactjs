import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  /**
   * Test 1: Initial Render Test
   * Verify that the TodoList component renders correctly
   * Ensure that the initial state (demo todos) is rendered
   */
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the component title is rendered
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
    
    // Verify that all initial demo todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master Testing')).toBeInTheDocument();
  });

  /**
   * Test 2: Test Adding Todos
   * Write a test to verify that a new todo can be added
   * Use fireEvent to simulate user input and form submission
   */
  test('allows users to add a new todo', () => {
    render(<TodoList />);
    
    // Find the input field and add button
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Simulate user typing in the input field
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    
    // Simulate form submission by clicking the button
    fireEvent.click(addButton);
    
    // Verify that the new todo appears in the list
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    
    // Verify that the input field is cleared after adding
    expect(input.value).toBe('');
  });

  /**
   * Test 3: Test Toggling Todos
   * Write a test to verify that a todo item can be toggled
   * between completed and not completed
   */
  test('allows users to toggle todo completion status', () => {
    render(<TodoList />);
    
    // Find a todo item
    const todoItem = screen.getByText('Learn React');
    
    // Initially, the todo should not be completed (no line-through)
    expect(todoItem).toHaveStyle({ textDecoration: 'none' });
    
    // Click on the todo to toggle its completion status
    fireEvent.click(todoItem);
    
    // After clicking, it should be completed (line-through)
    expect(todoItem).toHaveStyle({ textDecoration: 'line-through' });
    
    // Click again to toggle back to not completed
    fireEvent.click(todoItem);
    
    // Should be back to not completed
    expect(todoItem).toHaveStyle({ textDecoration: 'none' });
  });

  /**
   * Test 4: Test Deleting Todos
   * Write a test to verify that a todo item can be deleted
   */
  test('allows users to delete a todo', () => {
    render(<TodoList />);
    
    // Verify that the todo exists initially
    const todoText = 'Learn React';
    expect(screen.getByText(todoText)).toBeInTheDocument();
    
    // Find all delete buttons
    const deleteButtons = screen.getAllByText('Delete');
    
    // Click the first delete button
    fireEvent.click(deleteButtons[0]);
    
    // Verify that the todo no longer exists in the document
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });

  /**
   * Test 5: Prevent Adding Empty Todos
   * Verify that empty or whitespace-only todos cannot be added
   */
  test('does not add empty todos', () => {
    render(<TodoList />);
    
    // Count the initial number of todos
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;
    
    // Try to add an empty todo (only whitespace)
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Verify that the todo count remains the same
    const currentTodos = screen.getAllByRole('listitem');
    expect(currentTodos.length).toBe(initialCount);
  });

  /**
   * Test 6: Multiple Operations
   * Test adding multiple todos and deleting specific ones
   */
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
    
    // Verify both todos are added
    expect(screen.getByText('First Todo')).toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
    
    // Delete the first todo we added
    const deleteButtons = screen.getAllByText('Delete');
    // The newly added todos will be at the end of the list
    fireEvent.click(deleteButtons[deleteButtons.length - 2]);
    
    // Verify first todo is deleted and second todo remains
    expect(screen.queryByText('First Todo')).not.toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
  });

  /**
   * Test 7: Verify Initial Completed State
   * Ensure that initial todos render with correct completion status
   */
  test('renders initial todos with correct completion status', () => {
    render(<TodoList />);
    
    const masterTesting = screen.getByText('Master Testing');
    const learnReact = screen.getByText('Learn React');
    
    // 'Master Testing' is initially completed (should have line-through)
    expect(masterTesting).toHaveStyle({ textDecoration: 'line-through' });
    
    // 'Learn React' is not completed (should not have line-through)
    expect(learnReact).toHaveStyle({ textDecoration: 'none' });
  });
});