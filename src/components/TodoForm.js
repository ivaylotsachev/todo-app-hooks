import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from '../hooks/useInputState';

import uuid from 'uuid';

function TodoForm(props) {
    const [value, handleChange, resetValue] = useInputState('');

    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    props.addTodo({
                        id: uuid(),
                        task: value,
                        completed: false
                    });
                    resetValue();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add new todo"
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default TodoForm;
