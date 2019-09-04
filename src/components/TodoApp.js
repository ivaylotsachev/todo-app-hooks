import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from '../hooks/useTodoState';

const TodoApp = () => {
    const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const { todos, addTodo, toggleTodo, editTodo, removeTodo } = useTodoState(
        initialTodos
    );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
