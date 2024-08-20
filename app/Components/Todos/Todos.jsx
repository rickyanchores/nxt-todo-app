'use client'

import React from 'react';
import Todo from '@/app/Components/Todo/Todo';

const Todos = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="Todos grid justify-center items-center gap-4 mt-2 p-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>No todos available. Add some tasks!</p>
      )}
    </div>
  );
};

export default Todos;
