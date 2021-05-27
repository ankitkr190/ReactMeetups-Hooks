import React from "react";

export default function Model(props) {
  return (
    <div className="body">
      <div className="model">
        <p>Are you sure?</p>
        <button className="btn-secondary" onClick={props.onClose}>
          Confirm
        </button>
        <button className="btn-secondary" onClick={props.onClose}>
          Delete
        </button>
      </div>
    </div>
  );
}
