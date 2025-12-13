import React from 'react'; // needed
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for toBeInTheDocument
import TodoList from '../components/TodoList'; // path to your component

test('adds todo item correctly', () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/add todo/i); // find input
  const button = screen.getByText(/add/i); // find button

  // type a todo
  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(button); // click add

  // check if the todo appears in the list
  const todoItem = screen.getByText('Learn React');
  expect(todoItem).toBeInTheDocument();
});
