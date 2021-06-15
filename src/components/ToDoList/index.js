import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

const colors = ["red", "green", "blue", "purple", "yellow", "pink", "indigo"];

const ToDoList = (props) => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="flex flex-wrap justify-around">
        {todos.length === 0 && (
          <span className="m-10 font-bold text-xl">No Todos Found</span>
        )}
        {todos.length !== 0 &&
          todos.map((todo, index) => {
            const random = Math.floor(Math.random() * colors.length);
            return (
              <TodoItem
                key={index}
                id={todo.id}
                description={todo.description}
                randomColors={colors[random]}
              ></TodoItem>
            );
          })}
      </div>
    </>
  );
};

export default ToDoList;
