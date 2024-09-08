import { useDispatch } from 'react-redux';
import { toggleTaskStatus, editTask } from '../redux/todoSlice';
import { useState } from 'react';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: newDescription }));
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg mb-4">
      <div className="flex items-center space-x-4">
        {editMode ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ) : (
          <span
            className={`text-lg ${task.isDone ? 'line-through text-gray-500' : 'text-black'}`}
          >
            {task.description}
          </span>
        )}
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => dispatch(toggleTaskStatus(task.id))}
          className={`py-1 px-3 rounded-md ${
            task.isDone
              ? 'bg-gray-300 text-gray-600 hover:bg-gray-400'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {task.isDone ? 'Undo' : 'Complete'}
        </button>

        {editMode ? (
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
