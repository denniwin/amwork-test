import {useState, useEffect, useRef} from "react";
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
  const divRef = useRef<HTMLDivElement | null>(null);

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
    const container = document.querySelector(".todos");
    container && container.addEventListener("scroll", debouncedScrollHandler);
      return () => {
      container && container.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, []);


  const scrollHandler = () => {
    const divElement = divRef.current;

    if (divElement) {
      if (
        (divElement as HTMLElement).scrollTop + 300  > window.innerHeight
      ) {
        setFetching(true);
      }
}
  };

  const debouncedScrollHandler = useDebouncedFunction(scrollHandler, 300);

  return (
    <>
      <div className="todos" ref={divRef}>
        <TodoHeader todos={todos}/>
        {todos && todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      </div>
    </>
  );
}

export default App;
