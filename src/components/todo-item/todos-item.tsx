import avatar from "../../assets/avatar.png";
import { Todos } from '../../services/models/todos'
import { generateFakeData } from './services/API/fakerjs.api'

const TodoItem = () => {
  
  return (
    <div className='todos__item'>
      <p className='todos__title'><input type="checkbox" />For the sacke of example we are a building company and we have just closed</p>
      <div className="todos__date">
        <div className="todos__date-start">Oct 12, 01:00 PM</div>
        <div className="todos__date-end">Oct 12, 01:00 PM</div>
      </div>  
      <div className="todos__description">Task description with long long long te</div>
      <div className="todos__tags">
        <div className="todos__tag">Entity title</div>
        <div className="todos__tag">Front-end</div>
      </div>
      <img className="todos__avatar" src={avatar} alt="avatar-todo" />
    </div>
  )
}

export default TodoItem