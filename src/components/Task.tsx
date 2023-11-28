import ITaskProps from '../util/ITaskProps';

export default function Task(props: ITaskProps) {
  function handleDelete() {
    if (props.deleteEvent) {
      props.deleteEvent(props.id);
    }
  }

  return (
    <div id={props.id.toString()}>
      <p>
        {props.text} {props.id.toString()}
      </p>
      {props.deleteEvent && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}
