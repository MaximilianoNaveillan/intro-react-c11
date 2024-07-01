import React from "react";
import ReactPlayer from "react-player";
import "./CardGrupo1.css";

function CardGrupo1() {
  return (
    <div className="card-content">
      <ReactPlayer
        width="100%"
        height="250px"
        playIcon=""
        url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        light={
          <img
            src="./src/assets/mar.jpg"
            alt="mar"
            height="250px"
            width="100%"
          />
        }
      />
      <div className="card-description">
        <span>Jerome Bell</span>
        <p>Constructive and destructive waves</p>
      </div>
    </div>
  );
}
export default CardGrupo1;
