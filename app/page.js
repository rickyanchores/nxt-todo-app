'use client'

import InputField from '@/app/Components/InputField/InputField';
import Todos from '@/app/Components/Todos/Todos';
import Link from 'next/link';
import React, { useState } from 'react';
import Banner from './Components/Banner/Banner';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="Home min-h-screen grid items-center">
      <div className="TodoApp mx-auto">
      <h1 className='text-4xl font-bold uppercase'>nxt-todo-app</h1>
      <p>By Ricky A 2025</p>
        <InputField addTodo={addTodo} />
        <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Home;
