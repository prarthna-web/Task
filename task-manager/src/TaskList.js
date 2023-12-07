// TaskList.js
import React, { useState } from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    // Add more tasks as needed
  ]);

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, title: newTitle } : task))
    );
  };

  return (
    
    <div className="taskList">
      <h1>Task Manager</h1>
      <div className="  ">
        <input type="text" placeholder="New task title" />
        <button onClick={() => addTask(/* get the value from the input */)}>Add Task</button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
    
  );
};

export default TaskList;
