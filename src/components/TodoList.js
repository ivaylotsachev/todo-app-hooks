import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    console.error('list props', todos);

    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
