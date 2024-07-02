// Define action types as constants for consistency and to avoid typos
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// Action creators - functions that return action objects
// These make it easier to dispatch actions with the correct structure
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const editTask = (id, text) => ({ type: EDIT_TASK, payload: { id, text } });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });