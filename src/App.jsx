import { useState } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  const [filter, setFilter] = useState(null); // null for all tasks, true for done, false for not done

  return (
    <div className="App">
      <AddTask />
      <div className="flex justify-center space-x-4 my-4">
        <button onClick={() => setFilter(null)}  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">All</button>
        <button onClick={() => setFilter(false)} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Not Done</button>
        <button onClick={() => setFilter(true)} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Done</button>
      </div>
      <ListTask filter={filter} />
    </div>
  );
}

export default App;
