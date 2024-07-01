import React from "react";
import "./styles.css";

function OutLinedButton({ children }) {
  return (
    <button className="btn btn-outlined" type="button">
      <span>{children}</span>
    </button>
  );
}

export default OutLinedButton;
