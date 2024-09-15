import React, { useState } from 'react';
import TaskList from './Components/TaskList/TaskList';
import AddTask from './Components/AddTask/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const toggleCompleted = (index) => {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
