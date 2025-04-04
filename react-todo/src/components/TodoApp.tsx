import { useState } from "react";
import TodoList from "./TodoList";

function TodoApp() {
    // const tasks= ["buy milk", "do homework", "Call mommy"];
    const[tasks, setTasks]=useState<string[]>(["eat chipotle",]);
    const[taskInput, setTaskInput]=useState<string>('');
    return (
        <div>
            <h1>Todo List:</h1>
            <input
           value={taskInput}
           onChange= {(e)=>setTaskInput(e.target.value)

           } />
           <TodoList items={tasks}/>
        </div>

    )
}
export default TodoApp;