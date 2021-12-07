import ToDoInput from "./ToDoInput";
import { useState } from "react";
function ToDo() {
  const [todos, setTodos] = useState([]);
  const handleTaskCreate = (title) => {
    //console.log(title,"in Todo")
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    console.log(payload);
    setTodos([...todos, payload]);
  };

  console.log(todos);
  return (
    <>
      <ToDoInput onTaskCreate={handleTaskCreate} />
    </>
  );
}

export default ToDo;
