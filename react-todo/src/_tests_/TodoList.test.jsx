import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders without crashing', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByText(/add/i);
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('adds todo item correctly', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Learn React' } });
    fireEvent.click(button);

    const todoItem = screen.getByText('Learn React');
    expect(todoItem).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const button = screen.getByText(/add/i);
    fireEvent.click(button);

    const todos = screen.queryAllByRole('listitem');
    expect(todos.length).toBe(0);
  });

  test('removes todo item', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(button);

    const todoItem = screen.getByText('Learn Testing');
    expect(todoItem).toBeInTheDocument();

    const deleteButton = screen.getByText(/delete/i); // assumes each todo has a delete button
    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
