import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

function TodoApp(){

    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(()=>{
        const saveTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(saveTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false};
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo=>todo.id === id ? {...todo, completed: !todo.completed}: todo));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo=> todo.id !== id));
    };

    const filteredTodos = todos.filter(todo=>{
        if(filter === 'completed') return todo.completed;
        if(filter === 'pending') return !todo.completed;
        return true;
    });

    return (
        <>
        <div>
            <h1>Todo App</h1>
            <AddTodo addTodo={addTodo}></AddTodo>
            <Filter setFilter={setFilter}></Filter>
            <TodoList
                todos={filteredTodos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            ></TodoList>
        </div>
        </>
    )
}

export default TodoApp;