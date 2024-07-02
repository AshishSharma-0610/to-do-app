import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskItem = ({ task }) => {
    // State to control whether the task is being edited
    const [isEditing, setIsEditing] = useState(false);
    // State to hold the edited task text
    const [editedText, setEditedText] = useState(task.text);
    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Handler for saving edited task
    const handleEdit = () => {
        if (editedText.trim()) {
            // Dispatch the editTask action with the task id and new text
            dispatch(editTask(task.id, editedText));
            // Exit edit mode
            setIsEditing(false);
        }
    };

    return (
        <div className="task-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
                id={`task-${task.id}`}
            />
            {isEditing ? (
                // Render input field and save button when editing
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                // Render task text and edit button when not editing
                <>
                    <label htmlFor={`task-${task.id}`}>{task.text}</label>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    );
};

export default TaskItem;