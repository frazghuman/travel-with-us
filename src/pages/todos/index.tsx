import Provider from "@/app/_trpc/Provider";
import RootLayout from "@/app/components/layout";
import TodoList from "@/app/components/todo/TodoList";
import React from "react"

type TodosProps = {
//Define your props here
}

const Todos: React.FC<TodosProps> = (props) => {
  const {} = props;
  return (
    <RootLayout>
        <Provider>
            <TodoList />
        </Provider>
    </RootLayout>
  )
};

export default Todos;
