import React, { useState } from "react";
import Model from "./Model";

export default function Todo(props) {
  const [ModelisOpen, setModelisOpen] = useState(false);

  function deleteHandler() {
    setModelisOpen(true);
  }

  function closeHandler() {
    setModelisOpen(false);
  }
  return (
    <div className="card">
      <div className="container">
        <h1>{props.title}</h1>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {ModelisOpen ? <Model onClose={closeHandler} /> : null}
    </div>
  );
}
