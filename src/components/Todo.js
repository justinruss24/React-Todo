import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div onClick={() => props.toggleCompleted(props.todo.id)} className={`todo ${props.todo.completed ? "done" : ""}`}>
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;