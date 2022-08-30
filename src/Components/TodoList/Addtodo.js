
import React, { useState} from "react";

const AddTodo = ({add ,clear}) => {
  const [text, setText] = useState("");

  return (
    <div className="AddTodo">
      <input value={text} onChange={e => setText(e.target.value)} className="AddTodoInput" />
      <button className="AddTodoButton" onClick={() => {add(text); setText("")}}>Add</button>
      <button className="ClearAllbutton" onClick={() => clear(text)} >Clear All</button>
    </div>
  );
}

export default AddTodo;