import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const initialValue = [
    { id: 1, task: 'Buy a cheese', completed: false },
    { id: 2, task: 'Wash car', completed: true },
    { id: 3, task: 'Create todo app', completed: false }
];

const TodoApp = () => {
    const [todos, setTodos] = useState(initialValue);

    const addTodo = newTodo => {
        console.error('newTodo', newTodo);
        setTodos([...todos, { ...newTodo }]);
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
                        <TodoList todos={todos} />
                    </Grid>
                </Grid>
            </AppBar>
        </Paper>
    );
};

export default TodoApp;
