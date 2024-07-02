import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

// Initial state of the application
const initialState = {
    tasks: []
};

// Root reducer function
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            // Add a new task to the state
            // Create a new task object with a unique id, the task text, and set it as not completed
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]
            };
        case DELETE_TASK:
            // Remove a task from the state by filtering out the task with the matching id
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case EDIT_TASK:
            // Update the text of a task with the matching id
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, text: action.payload.text } : task
                )
            };
        case TOGGLE_TASK:
            // Toggle the completed status of a task with the matching id
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        default:
            // Return the current state for any unhandled action types
            return state;
    }
};

export default rootReducer;