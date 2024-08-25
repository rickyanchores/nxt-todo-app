'use client'

import React from 'react';
import { IoTrashBin } from "react-icons/io5";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`Todo grid  gap-4 grid-cols-2 text-2xl  items-center p-4 shadow-gray-700 shadow rounded-md ${todo.completed ? 'line-through' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer">
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className=" text-red-600 text-2xl p-2 text-center rounded">
        <IoTrashBin />
      </button>
    </div>
  );
};

export default Todo;
