import AddTaskGroup from "./AddTaskGroup";
import Button from "./Button";
import deletePng from "../assets/delete.png";
import folderPng from "../assets/folder.png"

export default function LeftSidebar({
  items,
  handleSelectedGroup,
  selectedItem,
  handleAddGroup,
  handleDeleteGroup,
}) {
  return (
    <div className="left-sidebar">
      <h2 className="margin-bottom">Task Groups</h2>
      <ul>
        {items.map((item) => (
          <Item
            key={item.groupId}
            item={item}
            handleSelectedGroup={handleSelectedGroup}
            selectedItem={selectedItem}
            handleDeleteGroup = {handleDeleteGroup}
          />
        ))}
        {/* <Item item={{ text: "Personal", completed: true }} />
        <Item item={{ text: "Work", completed: false }} /> */}
      </ul>
    </div>
  );
}

function Item({ item, handleSelectedGroup, selectedItem, handleDeleteGroup }) {
  return (
    <li
      className={`nav-item ${
        item.groupId === selectedItem.groupId ? "selected" : ""
      }`}
    >
      <label onClick={() => handleSelectedGroup(item)}>
        <span className="icon"><img src ={folderPng} alt = "Folder" className="folder-icon"/></span>
        {item.groupName}
      </label>
      <img className="delete-icon" 
        src={deletePng} 
        alt="trash" 
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteGroup(item.groupId);
        }}
      
      />
    </li>
  );
}
