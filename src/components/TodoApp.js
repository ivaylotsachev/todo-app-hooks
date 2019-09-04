import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

const initialValue = JSON.parse(localStorage.getItem('todos')) || [];

const TodoApp = () => {
    const [todos, setTodos] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = newTodo => {
        setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
        localStorage.setItem('todos-with-hooks', JSON.stringify(todos));
    };

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedTodos);
    };

    const editTodo = (todoId, newTask) => {
        console.error('edit', todoId, newTask);

        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        );

        setTodos(updatedTodos);
    };

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
        >
            <AppBar
                color="primary"
                position="static"
                style={{ height: '64px' }}
            >
                <Toolbar>
                    <Typography color="inherit">Todos with Hooks :)</Typography>
                </Toolbar>
                <Grid container justify="center" style={{ marginTop: '1rem' }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo} />
                        {todos.length && (
                            <TodoList
                                todos={todos}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                        )}
                    </Grid>
                </Grid>
            </AppBar>
        </Paper>
    );
};

export default TodoApp;
