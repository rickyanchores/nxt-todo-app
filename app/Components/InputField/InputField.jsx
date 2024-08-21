'use client'

import React, { useState } from 'react';

const InputField = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(''); // Clear input field after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="InputField grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mt-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new todo"
        className="border p-4 rounded w-full text-black"
      />
      <button type="submit" className="bg-teal-700 hover:animate-pulse  text-white p-4 mt-2 rounded">
        +
      </button>
    </form>
  );
};

export default InputField;
