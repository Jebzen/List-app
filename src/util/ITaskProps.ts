export default interface ITaskProps {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  deleteEvent?: (id: number) => void;
}
