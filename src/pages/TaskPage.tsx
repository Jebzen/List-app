import TaskList from '../components/TaskList';
import TaskProps from '../util/ITaskProps';
import { useEffect, useState } from 'react';
import tasksData from '../util/tasksData.json';

export default function TaskPage() {
  const [tasks, setTasks] = useState<TaskProps[] | []>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [intId, setIntId] = useState<number>(0);

  // Fetch tasks from localStorage if they exist, else fetch from tasksData.json
  useEffect(() => {
    const fetchTasks = async () => {
      const jsonParse = localStorage.getItem('tasks');
      if (jsonParse !== null) {
        console.log('here');
        const savedTasks = JSON.parse(jsonParse);
        const tmpTasks: TaskProps[] = savedTasks as TaskProps[];
        setTasks(tmpTasks);
        if (tmpTasks.length !== 0) {
          setIntId(tmpTasks[tmpTasks.length - 1].id + 1);
        }
      } else {
        // Simulated delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const tmpTasks: TaskProps[] = tasksData.tasks as TaskProps[];
        setTasks(tmpTasks);
        if (tmpTasks.length !== 0) {
          setIntId(tmpTasks[tmpTasks.length - 1].id + 1);
        }
      }
    };

    fetchTasks();
  }, []);

  // This is just to set newTask to value of input
  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  //This adds a task to the list, increses the id, and resets the input
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTasks = [...tasks];
    setIntId(intId + 1);
    newTasks.push({
      text: newTask,
      id: intId,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    setTasks(newTasks);
    setNewTask('');
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  //This removes a task from the list based on id
  function handleDeleteTask(id: number) {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === id);
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <main>
      <section id="content">
        <section id="title">
          <h1>Taskmaster</h1>
        </section>
        <section id="addTask">
          <form action="" onSubmit={handleAddTask}>
            <input
              type="text"
              placeholder="Enter task"
              value={newTask}
              onChange={handleTaskChange}
            />
            <button type="submit">Add</button>
          </form>
        </section>
        {(tasks && tasks.length !== 0 && (
          <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
        )) || <p>No tasks found. Add a task to get started!</p>}
      </section>
    </main>
  );
}
