import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from '../hooks/useInputState';

function TodoForm(props) {
    const [value, setValue, resetValue] = useInputState('');

    return (
        <Paper>
            <TextField value={value} onChange={setValue} />
        </Paper>
    );
}

export default TodoForm;
