type Prop = {
    items: string[]
}
function TodoList({ items }: Prop) {
    return (
        <div>
            <ul>
                {items.map((task, index) => (
                    <li key={index}>
                        i have to {task}
                    </li>

                ))}
            </ul>
        </div>

    )
}
export default TodoList;