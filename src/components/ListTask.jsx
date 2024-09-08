import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => state.todos.tasks);

  const filteredTasks = filter
    ? tasks.filter((task) => task.isDone === filter)
    : tasks;

  return (
    <div  className="bg-white p-4 shadow-lg rounded-lg max-w-lg mx-auto mt-4">
       <h2 className="text-xl font-semibold text-purple-600 mb-4">Tasks List</h2>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
       <p className="text-gray-500">No tasks available</p>
    </div>
  );
};

export default ListTask;
