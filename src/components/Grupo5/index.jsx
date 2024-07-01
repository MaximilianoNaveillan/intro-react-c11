import "./styles.css";
import { IoMdMail } from "react-icons/io";

import React from "react";

function CardGrupo5() {
  return (
    <div className="cardGrupo5">
      <nav className="nav_cardGrupo5">
        <div className="grupo5_header">
          <h2 className="subtitulo">Reading Task</h2>
          <h1 className="titulo">Constructive and destructive waves</h1>
        </div>
        <ul className="lista">
          <li className="item">
            <IoMdMail />
            <a href="#" className="lista_link">
              Item
            </a>
          </li>
          <li className="item">
            <IoMdMail />
            <a href="#" className="lista_link">
              Item
            </a>
          </li>
          <li className="item">
            <IoMdMail />
            <a href="#" className="lista_link">
              Item
            </a>
          </li>
          <li className="item">
            <IoMdMail />
            <a href="#" className="lista_link">
              Item
            </a>
          </li>
        </ul>
        <button className="btn_card" type="button">
          <span>Continue</span>
        </button>
      </nav>
    </div>
  );
}

export default CardGrupo5;
