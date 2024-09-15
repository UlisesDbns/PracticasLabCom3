import React from 'react';

function TaskList({ tasks, toggleCompleted, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.completed ? <strike>{task.text}</strike> : task.text}
          <button className="button" onClick={() => toggleCompleted(index)}>
            Marcar como completada
          </button>
          <button className="button" onClick={() => deleteTask(index)}>
            Borrar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;