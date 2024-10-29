import React from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [task, setTask] = React.useState("");
  const inputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert("Please enter a task");
      inputRef.current.focus();
      return;
    }
    onAddItem(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Task</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button>Add task</Button>
    </form>
  );
}
