'use client'

import React from 'react';
import { IoTrashBin } from "react-icons/io5";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`Todo flex flex-col md:flex-row hover:bg-slate-900 flex-wrap text-2xl items-center p-4  shadow rounded-md ${todo.completed ? 'line-through' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer">
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className=" text-red-600 text-2xl p-2 text-center rounded hover:animate-pulse">
        <IoTrashBin />
      </button>
    </div>
  );
};

export default Todo;
