"use client";

import React from "react";

interface InputProps {
  name: string
  placeholder: string
  errorMessage?: string
};

const Input: React.FC<InputProps> = ({ name, placeholder, errorMessage }) => {
  return (
    <div className="w-full">
      <input
        className="w-full border rounded-l-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        type="text"
        placeholder={placeholder}
        name={name}
      />
      {errorMessage && (
        <div className="mt-1 text-red-400">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
