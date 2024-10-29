import deletePng from "../assets/delete.png";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
  selectedItem,
}) {
  return (
    <ul>
      {items
        .filter((item) => item.groupId === selectedItem.groupId)
        .map((item) => (
          <ul key={item.id}>
            {item.tasks.map((task) => (
              <Item
                key={task.id}
                item={task}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
              />
            ))}
          </ul>
        ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            onToggleItem(item.id);
          }}
          checked={item.completed}
          type="checkbox"
        />
        {item.text}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        <img className="delete-icon" src={deletePng}alt="trash" />
      </button>
    </li>
  );
}
