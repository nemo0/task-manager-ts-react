import React, { useState, ReactElement } from 'react';
import { Task } from '../types';

export const TaskContext = React.createContext<{
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  changeStatus: (id: number, status: string) => void;
}>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
});

export const TaskProvider = ({ children }: { children: ReactElement }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id: number, status: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          task.status = status;
        }
        return task;
      })
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, changeStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
