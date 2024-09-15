import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Agregar tarea"
      />
      <button type="submit" disabled={!newTask}>Agregar</button>
    </form>
  );
}

export default AddTask;