// src/App.jsx
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };

    setTasks([...tasks, newTask]);
  };

  // Toggle task status (completed / not completed)
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My React To-Do List</h1>

      <TaskForm addTask={addTask} />

      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;