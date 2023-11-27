import TaskProps from '../util/ITaskProps';

export default function Task(props: TaskProps) {
  const handleDelete = () => {
    // Handle delete logic here
  };

  return (
    <div>
      <p>{props.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
