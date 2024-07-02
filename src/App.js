import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    // Wrap the entire app with the Redux Provider
    <Provider store={store}>
      <div className="App">
        <h1>To Do Application</h1>
        {/* Component for adding new tasks */}
        <TaskInput />
        {/* Component for displaying the list of tasks */}
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;