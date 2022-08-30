import React, { useReducer } from "react";
import { initialState, reducer } from "../../reducers/todo.reducer";
import Todo from "./Todo.js";
import "./Todo.css"
import AddTodo from "./Addtodo";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<div className="Todo-box">
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
     clear={text => dispatch({type: "clear", text:text})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
        edit={text => dispatch({type: "edit", id: t.id, text: text})}
      />
    ))}
  </div>);
}
export default TodoApp;