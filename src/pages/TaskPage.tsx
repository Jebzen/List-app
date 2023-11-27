import TaskList from '../components/TaskList';
import TaskProps from '../util/ITaskProps';
import { useEffect, useState } from 'react';
import tasksData from '../util/tasksData.json';

export default function TaskPage() {
  const [tasks, setTasks] = useState<TaskProps[] | []>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [intId, setIntId] = useState<number>(0);

  useEffect(() => {
    // Simulate an API call
    const fetchTasks = async () => {
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const tmpTasks: TaskProps[] = tasksData.tasks as TaskProps[];
      setTasks(tmpTasks);
      setIntId(tmpTasks.length);
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    console.log(intId);
  }, [intId]);

  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({
      text: newTask,
      id: 0,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    setTasks(newTasks);
    setNewTask('');
    setIntId(intId + 1);
  }

  function handleDeleteTask(id: number) {
    const newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
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
        {(tasks && tasks.length !== 0 && <TaskList tasks={tasks} />) || (
          <p>No tasks found. Add a task to get started!</p>
        )}
      </section>
    </main>
  );
}
