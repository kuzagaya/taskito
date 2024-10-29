import AddItemForm from "./AddItemForm";
import AddTaskGroup from "./AddTaskGroup";
import ButtonGroup from "./ButtonGroup";

export default function RightSidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetAllItems,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleAddGroup, // Add this prop
}) {
  return (
    <div className="right-sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <AddTaskGroup onAddGroup={handleAddGroup} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetAllItems={handleResetAllItems}
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllIncomplete={handleMarkAllIncomplete}
      />
    </div>
  );
}