import TaskProps from '../util/ITaskProps';
import Task from './Task';

interface TaskListProps {
  tasks: TaskProps[];
  deleteTask: (id: number) => void;
}

export default function TaskList(props: TaskListProps) {
  return (
    <section id="taskList">
      <h2>Task List</h2>
      <ul>
        {props.tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            id={task.id}
            completed={false}
            createdAt={task.createdAt}
            deleteEvent={props.deleteTask}
          />
        ))}
      </ul>
    </section>
  );
}
