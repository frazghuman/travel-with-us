import React from "react"
import TodoList from "./TodoList";
// import { serverClient } from "@/app/_trpc/serverClient";

const TodosContainer: React.FC<any> = async () => {
  // const todos: any[] = []; //await serverClient.getTodos();
  return (
    <div>
      <TodoList />
    </div>
  )
};

export default TodosContainer;
