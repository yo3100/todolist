import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Adds a new item to the list array
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  //Deletes an item based on the `item.id` key 
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>My Todo List</h1>
      </div>
      <div className="app__input">
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="add__button"
          onClick={() => addItem()}
        >
          Add
        </button>
      </div>

      <div className="app__list">
        <ul>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <li>
                  {item.value}
                  <button
                    className="delete__button"
                    onClick={() => deleteItem(item.id)}
                  >
                    ❌
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
