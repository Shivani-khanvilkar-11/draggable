import React, { useState } from "react";
import Draggable from "./component/Draggable";
import "./App.css";

const App = () => {
  const [draggables, setDraggables] = useState([<Draggable key={0} />]);

  const addParent = () => {
    setDraggables((prevDraggables) => {
      const newDraggable = (
        <Draggable key={prevDraggables.length}>
          {prevDraggables[prevDraggables.length - 1]}
        </Draggable>
      );
      return [...prevDraggables, newDraggable];
    });
  };

  return (
    <div className="App">
      <button onClick={addParent}>Add Parent</button>
      <div className="draggable-container">
        {draggables[draggables.length - 1]}
      </div>
    </div>
  );
};

export default App;
