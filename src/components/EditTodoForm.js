import React from 'react';
import useInputState from '../hooks/useInputState';
import { TextField } from '@material-ui/core';

function EditTodoForm({ id, task, editTodo, toggle }) {
    const [value, handleChange] = useInputState(task);

    return (
        <form
            style={{ marginLeft: '1rem', width: '100%' }}
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                toggle();
            }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            ></TextField>
        </form>
    );
}

export default EditTodoForm;
