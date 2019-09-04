import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';

function TodoList(props) {
    console.error('list props', props);

    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <Fragment>
                        <TodoItem {...todo} key={todo.id} />
                        <Divider />
                    </Fragment>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
