import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputSatate from './InputSatate';

const TodoForm = ({ saveTodo }) => {
    const { value, reset, onChange } = InputSatate();

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                saveTodo(value);
                reset();
            }}
        >
            <TextField
                placeholder="Add todo"
                margin="small"
                fullWidth
                variant="outlined"
                label="Add Your Wish"
                onChange={onChange}
                value={value}
            />
        </form>
    );
};

export default TodoForm;