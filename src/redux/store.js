import { createStore } from 'redux';
import rootReducer from './reducers';

// Function to load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Function to save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // Ignore write errors
    }
};

// Load the persisted state
const persistedState = loadState();

// Create the Redux store with the root reducer and persisted state
const store = createStore(rootReducer, persistedState);

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
    saveState(store.getState());
});

export default store;