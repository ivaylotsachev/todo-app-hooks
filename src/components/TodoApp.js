import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

const initialValue = [
    { id: 1, task: 'Buy a cheese', completed: false },
    { id: 2, task: 'Wash car', completed: true },
    { id: 3, task: 'Create todo app', completed: false }
];

const TodoApp = () => {
    const [todos, setTodos] = useState(initialValue);

    const addTodo = newTodo => {
        setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
    };

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );

        console.error('upda', updatedTodos);
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
                        <TodoList
                            todos={todos}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </Paper>
    );
};

export default TodoApp;
