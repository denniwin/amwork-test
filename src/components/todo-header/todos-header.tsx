import add from "../../assets/add.svg";
import { Todos } from "../../services/models/todos";

const TodoHeader = ({ todos }: { todos: Todos[] }) => {
  
  return (
    <div className="todos__header">
      <div className="todos__header-title">Today</div>
      <div className="todos__actions">
        <img className="todos__actions-add" src={add} alt="add-todo" />
        <div className="todos__actions-count"><span>{todos.length}</span></div>
      </div>
    </div>
  );
};

export default TodoHeader;
