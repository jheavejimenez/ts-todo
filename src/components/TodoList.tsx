import React from "react";
import Todo from "../models/Todo";

interface Props  {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;


}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="todos">
            {todos.map((item) =>
                <li>{item.title}</li>
            )}
        </div>
    )
}

export default TodoList;