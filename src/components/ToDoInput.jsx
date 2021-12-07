import { useState } from "react";

function ToDoInput() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="add something"
      value={text}
      onChange={handleChange}
    />
  );
}

export default ToDoInput;
