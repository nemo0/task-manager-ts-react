import React from 'react';
import { TaskContext } from '../context/task';
import TaskCard from './TaskCard';
import AddTask from './AddTask';

const TaskList = () => {
  const { tasks, deleteTask, changeStatus } = React.useContext(TaskContext);
  const [showTaskForm, setShowTaskForm] = React.useState<Boolean>(false);

  const tasksToDo = tasks.filter((task) => task.status === 'todo');
  const tasksDone = tasks.filter((task) => task.status === 'done');

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-end'>
        <button
          className='px-6 py-2 mt-4 text-white bg-blue-500 rounded-sm'
          onClick={() => {
            setShowTaskForm(!showTaskForm);
          }}
        >
          {showTaskForm ? 'Hide Form' : 'Show Form'}
        </button>
      </div>
      {showTaskForm && <AddTask />}
      <h2 className='mt-4 text-xl font-bold px-4'>To Do</h2>
      {tasksToDo.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onTaskDelete={deleteTask}
          onTaskStatusChange={changeStatus}
        />
      ))}
      <h2 className='mt-4 text-xl font-bold px-4'>Done</h2>
      {tasksDone.map((task) => (
        <TaskCard key={task.id} task={task} onTaskDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
