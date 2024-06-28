import React from "react";

function Hijo() {
  return <div>Hijo</div>;
}

function Padre() {
  return (
    <div>
      <div>Padre</div>
      <Hijo />
    </div>
  );
}

export default Padre;
