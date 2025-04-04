import TodoList from "./TodoList";

function TodoApp() {
    const tasks= ["buy milk", "do homework", "Call mommy"];
    return (
        <div>
            <h1>Todo App </h1>
            <h2>Todo List:</h2>
           <TodoList items={tasks}/>
        </div>

    )
}
export default TodoApp;