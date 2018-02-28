import { h } from "../../lib/hyper-app/index";

export const TodoItem = ({ id, value, done, toggle }) => (
    <li
      class={done && "done"}
      onclick={e =>
        toggle({
          value: done,
          id: id
        })
      }
    >
      {value}
    </li>
  );
