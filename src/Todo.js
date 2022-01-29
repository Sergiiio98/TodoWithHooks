import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Todo({task, completed, removeTodo, id, toggleTodo}){
    return(
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick = {() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton  aria-label="Edit">
                    <EditIcon></EditIcon>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;