import { h, app } from "./lib/hyper-app/index"
import { TodoList } from "./component/todo-list/todo-list"
import  "../src/assets/todo-list.scss"
/** @jsx h */
// const item = TodoItem;
const FilterInfo = { All: 0, Todo: 1, Done: 2 }

const state = {
  todos: [],
  filter: FilterInfo.All,
  input: "",
  placeholder: "Do that thing..."
}

const actions = {
  add: () => state => ({
    input: "",
    todos: state.todos.concat({
      done: false,
      value: state.input,
      id: state.todos.length + 1
    })
  }),
  toggle: ({ id, value }) => state => ({
    todos: state.todos.map(
      t => (id === t.id ? Object.assign({}, t, { done: !value }) : t)
    )
  }),
  input: ({ value }) => ({ input: value }),
  filter: ({ value }) => ({ filter: value })
}

const view = (state, actions) => (
  <div>
    <h1>Todo</h1>
    <p>
      {Object.keys(FilterInfo)
        .filter(key => FilterInfo[key] !== state.filter)
        .map(key => (
          <span>
            <a
              href="#"
              onclick={() =>
                actions.filter({
                  value: FilterInfo[key]
                })
              }
            >
              {key}
            </a>{" "}
          </span>
        ))}
    </p>

    <div class="flex">
      <input
        type="text"
        onkeyup={e => (e.keyCode === 13 ? actions.add() : "")}
        oninput={e => actions.input({ value: e.target.value })}
        value={state.input}
        placeholder={state.placeholder}
      />
      <button onclick={actions.add}>＋</button>
    </div>

    <p>
        <TodoList 
            todos={
                state.todos
                    .filter(
                        t =>
                        state.filter === FilterInfo.Done
                            ? t.done
                            : state.filter === FilterInfo.Todo
                            ? !t.done
                            : state.filter === FilterInfo.All
                    )
            }
            toggle={actions.toggle} 
        /> 
    </p>
  </div>
)

app(state, actions, view, document.getElementById("container"))