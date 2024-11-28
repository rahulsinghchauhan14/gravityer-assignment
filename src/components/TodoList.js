import TodoItem from "./TodoItem";

function TodoList({todos, toggleComplete, deleteTodo}){
    return (
        <>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    ></TodoItem>
                ))}
            </ul>
        </>
    )
}

export default TodoList;