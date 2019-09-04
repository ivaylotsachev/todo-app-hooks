import { useState } from 'react';
import uuid from 'uuid/v4';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);

    return {
        todos,
        addTodo: newTodo => {
            setTodos([
                ...todos,
                { id: uuid(), task: newTodo, completed: false }
            ]);
            localStorage.setItem('todos-with-hooks', JSON.stringify(todos));
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            console.error('edit', todoId, newTask);

            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            );

            setTodos(updatedTodos);
        }
    };
};
