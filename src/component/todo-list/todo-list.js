import { h } from "../../lib/hyper-app/index";
import { TodoItem } from "./todo-item"

export const TodoList = ({ todos, toggle }) => (
  <ul>
    {
      todos.map(t => (
        <TodoItem
          id={t.id}
          value={t.value}
          done={t.done}
          toggle={toggle}
        />
      ))
    }  
  </ul>
);
