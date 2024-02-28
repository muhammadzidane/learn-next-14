"use server";

import { z } from "zod";

import { createTodo } from "@/request";
import { extractInitialData } from "@/helper";

export const createTodoAction = async (_: any, formData: FormData) => {
  const schema = z.object({
    todo: z
      .string()
      .min(1, { message: "Todo content must be at least 1 character long." }),
  });

  const validatedFields = schema.safeParse({
    todo: formData.get("todo"),
  });

  console.log(formData);

  if (!validatedFields.success) {
    return extractInitialData(validatedFields.error.flatten().fieldErrors);
  }

  const todo = formData.get("todo");
  const res = await createTodo({ todo });

  console.log("Successfull create todo!", res);
};