import React from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import initialItems from "./lib/constants";
import MobileDevice from "./components/MobileDevice";
import { useMobileDetect } from "./hooks/useMobile";
import { Analytics } from '@vercel/analytics/react';

export default function App() {

  const isMobile = useMobileDetect();


  const [items, setItems] = React.useState(() => {
    const savedItems = localStorage.getItem('todoItems');
    return savedItems ? JSON.parse(savedItems) : initialItems;
  });

  const [selectedItem, setSelectedItem] = React.useState(() => {
    const savedSelectedItem = localStorage.getItem('selectedItem');
    return savedSelectedItem ? JSON.parse(savedSelectedItem) : initialItems[0];
  });

  React.useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  React.useEffect(() => {
    localStorage.setItem('selectedItem', JSON.stringify(selectedItem));
  }, [selectedItem]);



  const handleSelectedGroup = (item) => {
    setSelectedItem(item);
    console.log(item.groupId);
  };

  const handleAddItem = (newItemText) => {
    const newTask = {
      id: new Date().getTime(),
      text: newItemText,
      completed: false,
    };

    const newItems = items.map(group => {
      if (group.groupId === selectedItem.groupId) {
        return {
          ...group,
          tasks: [...group.tasks, newTask]
        };
      }
      return group;
    });
    setItems(newItems);
  };

  const handleDeleteItem = (taskId) => {
    const newItems = items.map(group => {
      if (group.groupId === selectedItem.groupId) {
        return {
          ...group,
          tasks: group.tasks.filter(task => task.id !== taskId)
        };
      }
      return group;
    });
    setItems(newItems);
  };

  const handleToggleItem = (taskId) => {
    const newItems = items.map(group => {
      if (group.groupId === selectedItem.groupId) {
        return {
          ...group,
          tasks: group.tasks.map(task =>
            task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          )
        };
      }
      return group;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    const newItems = items.map(group => {
      if (group.groupId === selectedItem.groupId) {
        return {
          ...group,
          tasks: []
        };
      }
      return group;
    });
    setItems(newItems);
  };

  const handleResetAllItems = () => {
    const initialGroup = initialItems.find(
      group => group.groupId === selectedItem.groupId
    );

    const newItems = items.map(group => {
      if (group.groupId === selectedItem.groupId) {
        return {
          ...group,
          tasks: [...initialGroup.tasks]
        };
      }
      return group;
    });
    setItems(newItems);
  };

  const handleMarkAllComplete = () => {
    const newItems = items.map(group => {
      if (group.groupId === selectedItem.groupId) {
        return {
          ...group,
          tasks: group.tasks.map(task => ({ ...task, completed: true }))
        };
      }
      return group;
    });
    setItems(newItems);
  };

  const handleMarkAllIncomplete = () => {
    const newItems = items.map(group => {
      if (group.groupId === selectedItem.groupId) {
        return {
          ...group,
          tasks: group.tasks.map(task => ({ ...task, completed: false }))
        };
      }
      return group;
    });
    setItems(newItems);
  };

  const handleAddGroup = (newGroupName) => {
    const newGroup = {
      groupId: new Date().getTime(),
      groupName: newGroupName,
      tasks: [],
    };
    setItems([...items, newGroup]);
  }

  const handleDeleteGroup = (groupId) => {
    if (items.length <= 1) return;

    const newItems = items.filter(group => group.groupId !== groupId);
    setItems(newItems);

    if (selectedItem.groupId === groupId) {
      setSelectedItem(newItems[0]);
    }
  };

  return (
    <>
      <Analytics />
      {isMobile ?
        <MobileDevice /> :
        <>
          <BackgroundHeading />
          <main className="main-content">
            <Header />
            <LeftSidebar
              items={items}
              handleSelectedGroup={handleSelectedGroup}
              selectedItem={selectedItem}
              handleAddGroup={handleAddGroup}
              handleDeleteGroup={handleDeleteGroup}
            />
            <ItemList
              items={items}
              handleDeleteItem={handleDeleteItem}
              handleToggleItem={handleToggleItem}
              selectedItem={selectedItem}
            />
            <RightSidebar
              handleAddItem={handleAddItem}
              handleRemoveAllItems={handleRemoveAllItems}
              handleResetAllItems={handleResetAllItems}
              handleMarkAllComplete={handleMarkAllComplete}
              handleMarkAllIncomplete={handleMarkAllIncomplete}
              handleAddGroup={handleAddGroup}
            />
          </main>
          <Footer />
        </>
      }
    </>
  );
}
