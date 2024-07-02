import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
    // State to hold the current input value
    const [task, setTask] = useState('');
    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            // Dispatch the addTask action with the current task text
            dispatch(addTask(task));
            // Clear the input field after adding the task
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-input">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskInput;