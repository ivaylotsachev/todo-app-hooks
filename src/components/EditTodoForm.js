import React from 'react';
import useInputState from '../hooks/useInputState';
import { TextField } from '@material-ui/core';

function EditTodoForm({ id, task, editTodo, toggle }) {
    const [value, handleChange] = useInputState(task);

    return (
        <form
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
            ></TextField>
        </form>
    );
}

export default EditTodoForm;
