import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setNewItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setNewItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setNewItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="Add and item"
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button onClick={() => addItem()}>add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              {item.value}{" "}
              <button
                className="delete-button"
                onClick={() => deleteItem(item.id)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
