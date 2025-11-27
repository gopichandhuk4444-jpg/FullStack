import { useState } from "react";

interface TodoItem{
    id:number;
    task:string;
    status:"pending"|"completed";
}

const [TodoList,setTodoList]=useState<TodoItem[]>([])

const addToDo=(task:string):void=>{
    const item:TodoItem={id:Date.now(),
        task,
        status:"pending"
    }
    setTodoList([...TodoList,item])
}
const markAsComplete=(id:number):void=>{
    let item:TodoItem=TodoList.find((val:TodoItem)=>val.id===id)
    item={
        ...item,
        status:'completed'
    }

    setTodoList([...TodoList,item])
}