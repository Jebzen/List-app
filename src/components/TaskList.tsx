import TaskProps from '../util/ITaskProps';
import Task from './Task';

interface TaskListProps {
  tasks: TaskProps[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <section id="taskList">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            id={0}
            completed={false}
            createdAt={task.createdAt}
          />
        ))}
      </ul>
    </section>
  );
}
