import React from "react";
import Button from "./Button";

export default function AddTaskGroup({ onAddGroup }) {
  
  const [newGroupName, setNewGroupName] = React.useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGroup(newGroupName);
    setNewGroupName("");
  };


  return (
    <form className="margin-top">
      <h2>Add an Task group</h2>
      <input type="text" placeholder="Enter a task group" 
        onChange={(e) => setNewGroupName(e.target.value)}
        value={newGroupName}
      />
      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}
