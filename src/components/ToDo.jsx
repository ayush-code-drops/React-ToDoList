import ToDoInput from "./ToDoInput";
import Button from "./Button";
function ToDo() {
  const handleAddClick = () => {
    console.log("done");
  };
  return (
    <>
      <ToDoInput />
      <Button title="Add" onClick={handleAddClick} />
    </>
  );
}

export default ToDo;
