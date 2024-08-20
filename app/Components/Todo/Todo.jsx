'use client'

import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`Todo flex justify-between items-center p-4 bg-slate-600 ${todo.completed ? 'line-through' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer">
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-1 rounded">
        Delete
      </button>
    </div>
  );
};

export default Todo;
