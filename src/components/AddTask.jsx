// src/components/AddTask.js
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from '../redux/todoSlice';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold text-purple-600 mb-2">Add New Task</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new task"
        className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button onClick={handleSubmit} className="bg-purple-600 text-white py-2 px-4 rounded-md w-full hover:bg-purple-700">Add Task</button>
    </div>
  );
};

export default AddTask;
