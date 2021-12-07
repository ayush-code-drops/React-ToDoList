import ToDoInput from "./ToDoInput";
import { useState } from "react";
import ToDoItem from "./ToDoItem";
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
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedTodos);
  };
  console.log(todos);
  return (
    <>
      <ToDoInput onTaskCreate={handleTaskCreate} />
      {todos.map((todo) => {
        return (
          <ToDoItem
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </>
  );
}

export default ToDo;
