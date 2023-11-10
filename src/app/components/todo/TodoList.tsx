"use client";

import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";
import { useState } from "react";

export default function TodoList() {
    const getTodos = trpc.getTodos.useQuery();
    const removeTodo = trpc.removeTodo.useMutation({
        onSettled: () => {
            getTodos.refetch();
        }
    });
    const addTodo = trpc.addTodo.useMutation({
        onSettled: () => {
            getTodos.refetch();
        }
    });

    const setDone = trpc.setDone.useMutation({
        onSettled: () => {
            getTodos.refetch();
        }
    });

    const [content, setContent] = useState("");

    return (
        <>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input 
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-black"
                                onClick={async () => {
                                    if (content.length) {
                                        addTodo.mutate(content);
                                        setContent("");
                                    }
                                }} 
                            >Add</button>
                        </div>
                    </div>
                    <div>
                        {
                            getTodos?.data?.map(todo => (
                                <div key={todo.id} className="flex mb-4 items-center">
                                    <input
                                        id={`check-${todo.id}`}
                                        type="checkbox"
                                        checked={!!todo.done}
                                        style={{zoom: 1.5, marginRight: '1rem'}}
                                        onChange={async () => {
                                            setDone.mutate({
                                                id: todo.id,
                                                done: todo.done ? 0 : 1,
                                            })
                                        }}
                                    />
                                    <p className="w-full text-grey-darkest">{todo.content}</p>
                                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-black"
                                    onClick={async () => {
                                        removeTodo.mutate(todo.id)
                                    }}
                                    >Remove</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
