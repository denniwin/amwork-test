import {useEffect, useState} from "react";
import avatar from "../../assets/avatar.png";
import {generateFakeData} from "../../services/API/fakerjs.api";
import {formatDate} from "../../services/helpers/formatDate";
import {FakerJs} from "../../services/models/fakerjs";
import {Todos} from "../../services/models/todos";

const TodoItem = ({ todo }: {todo: Todos}) => {
  const [fakeData, setFakeData] = useState<FakerJs>();

  useEffect(() => {
    setFakeData(generateFakeData());
  }, []);

  return (
    <div className="todos__item">
      {fakeData && (
        <>
          <p className="todos__title">
            <input type="checkbox" defaultChecked={todo.completed}/>
            {todo.title}
          </p>
          <div className="todos__date">
            <div className="todos__date-start">
              {formatDate(fakeData.startDate)}
            </div>
            <div className="todos__date-end">
              {formatDate(fakeData.endDate)}
            </div>
          </div>
          <div className="todos__description">{fakeData.descr}</div>
          <div className="todos__tags">
            <div className="todos__tag">{fakeData.tags[0]}</div>
            <div className="todos__tag">{fakeData.tags[1]}</div>
          </div>
          <img className="todos__avatar" src={avatar} alt="avatar-todo" />
        </>
      )}
    </div>
  );
};

export default TodoItem;
