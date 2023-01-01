import { Task } from '../types';
import { BsTrash } from 'react-icons/bs';

interface TaskCardProps {
  task: Task;
  onTaskDelete?: (id: number) => void;
  onTaskStatusChange?: (id: number, status: string) => void;
}

const TaskCard = ({
  task,
  onTaskDelete,
  onTaskStatusChange,
}: TaskCardProps) => {
  return (
    <div className='px-4 py-5 border-b rounded-t sm:px-6'>
      <div className='overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md'>
        <ul className='divide-y divide-gray-200'>
          <li>
            <div className='block hover:bg-gray-50 dark:hover:bg-gray-900'>
              <div className='px-4 py-4 sm:px-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-700 text-md dark:text-white md:truncate'>
                      {task?.title}
                    </p>
                    <p className='mt-2 text-gray-500 text-md dark:text-gray-300'>
                      {task?.description}
                    </p>
                  </div>
                  <div className=''>
                    <div className='flex flex-shrink-0 ml-2 justify-end'>
                      <button
                        className='p-1 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500'
                        onClick={() => {
                          onTaskDelete?.(task.id);
                        }}
                      >
                        <BsTrash />
                      </button>
                      <p
                        className={
                          'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full' +
                          (task.status === 'todo'
                            ? ' bg-red-100 text-red-800'
                            : '')
                        }
                      >
                        {task?.status}
                      </p>
                    </div>
                    {task.status === 'todo' && (
                      <button
                        className='p-1 ml-2 px-4 py-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500'
                        onClick={() => {
                          onTaskStatusChange?.(task.id, 'done');
                        }}
                      >
                        Change Status to done
                      </button>
                    )}
                  </div>
                </div>
                <div className='mt-2 sm:flex sm:justify-between'>
                  <div className='sm:flex'>
                    <p className='flex items-center font-light text-gray-500 text-md dark:text-gray-300'>
                      {new Date(task?.dueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;
