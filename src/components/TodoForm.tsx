"use client";

import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { createTodoAction } from "@/actions/todoFormActions";
import { Button, Input } from ".";

const TodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, formAction] = useFormState(createTodoAction, { todo: "" });

  useEffect(() => {
    if (!error) {
      formRef.current?.reset();
    }
  }, [error]);

  return (
    <form ref={formRef} action={formAction}>
      <div className="flex">
        <Input
          name="todo"
          placeholder="Add a new task..."
          errorMessage={error?.todo}
        />
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default TodoForm;
