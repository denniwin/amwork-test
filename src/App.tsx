import {useState, useEffect} from "react";
import TodoHeader from "./components/todo-header/todos-header";
import TodoItem from "./components/todo-item/todos-item";
import {GetTodos} from "./services/API/todos.api";
import useDebouncedFunction from "./services/helpers/debounced";
import {Todos} from "./services/models/todos";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [fetching, setFetching] = useState<boolean>(false);

  const scrollHandler = (e: Event) => {
    if (
      e.target instanceof Document &&
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100
    ) {
      setFetching(true);
    }
  };

  const debouncedScrollHandler = useDebouncedFunction(scrollHandler, 300);

  useEffect(() => {
    GetTodos().then((td) => setTodos(td));
  }, []);

  useEffect(() => {
    if (fetching) {
      GetTodos({_limit: 10, _page: currentPage})
        .then((td) => {
          setTodos((prev) => [...prev, ...td]);
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", debouncedScrollHandler);
    return () => {
      document.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, []);

  return (
    <>
      <div className="todos">
        <TodoHeader />
        {todos && todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      </div>
    </>
  );
}

export default App;
