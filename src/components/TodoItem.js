import React from 'react';
import useToggleState from '../hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';

function TodoItem({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);

    return (
        <ListItem>
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    editTodo={editTodo}
                    task={task}
                    fullWidth
                    toggle={toggle}
                />
            ) : (
                <>
                    <Checkbox
                        checked={completed}
                        onClick={() => toggleTodo(id)}
                    />
                    <ListItemText
                        style={{
                            color: 'black',
                            textDecoration: completed ? 'line-through' : 'none'
                        }}
                        color="black"
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            area-label="Delete"
                            onClick={() => removeTodo(id)}
                        >
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                        <IconButton area-label="Edit" onClick={toggle}>
                            <EditIcon></EditIcon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default TodoItem;
