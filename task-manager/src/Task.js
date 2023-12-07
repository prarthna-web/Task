import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(task.id, editedTitle);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTitle(task.title);
    setEditing(false);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        className="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            className="editInput"
            value={editedTitle}
            onChange={handleTitleChange}
          />
          <div className="buttons">
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <span className="title">{task.title}</span>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
          </div>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
