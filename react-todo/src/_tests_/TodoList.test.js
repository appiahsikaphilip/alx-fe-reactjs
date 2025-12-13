// src/_tests_/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for toBeInTheDocument matcher
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  test('renders input and button correctly', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByRole('button', { name: /add/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('adds todo item correctly', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByRole('button', { name: /add/i });

    // Add a todo
    fireEvent.change(input, { target: { value: 'Learn React' } });
    fireEvent.click(button);

    // Check if the todo appears in the list
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByRole('button', { name: /add/i });

    // Try adding empty todo
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    // Check that no empty list item is added
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });

});
