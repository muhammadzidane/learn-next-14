import React from "react";

import { TodoForm } from "@/components";

const ServerAction = () => {
  return (
    <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm />
      <ul>
        <li className="flex justify-between items-center border-b py-2">
          <span>Example task</span>
          <button className="text-red-500 hover:text-red-600 focus:outline-none focus:ring focus:border-blue-300">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ServerAction;
