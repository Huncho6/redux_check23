import { useState } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import CountDown from './components/Countdown';

function App() {
  const [filter, setFilter] = useState(null); // null for all tasks, true for done, false for not done

  return (
    <div className="App bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Task Manager with Countdown</h1>
        <AddTask />
        <div className="flex justify-center space-x-4 my-4">
          <button
            onClick={() => setFilter(null)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            All
          </button>
          <button
            onClick={() => setFilter(false)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Not Done
          </button>
          <button
            onClick={() => setFilter(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Done
          </button>
        </div>
        <ListTask filter={filter} />
        <div className="mt-8">
          <CountDown />
        </div>
      </div>
    </div>
  );
}

export default App;
