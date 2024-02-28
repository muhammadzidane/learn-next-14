"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const Button = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "..." : children}
    </button>
  );
};

export default Button;
