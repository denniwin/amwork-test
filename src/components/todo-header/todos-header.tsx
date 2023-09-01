import add from "../../assets/add.svg";
import count from "../../assets/count.svg";

const TodoHeader = () => {
  return (
    <div className="todos__header">
      <div className="todos__header-title">Today</div>
      <div className="todos__actions">
        <img className="todos__actions-img" src={add} alt="add-todo" />
        <img className="todos__actions-img" src={count} alt="count-todo" />
      </div>
    </div>
  );
};

export default TodoHeader;
