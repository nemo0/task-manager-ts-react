import { TaskProvider } from './context/task';

import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className='container max-w-7xl mx-auto'>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
