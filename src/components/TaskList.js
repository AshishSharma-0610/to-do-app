import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
    // Select the tasks array from the Redux store
    const tasks = useSelector(state => state.tasks);

    return (
        // Outer container to create the "coming out" effect
        <div id="checklist-container">
            {/* Inner container for the actual checklist */}
            <div id="checklist">
                {/* Map over the tasks array and render a TaskItem for each task */}
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;