import "./styles.css";
import { IoMdMail } from "react-icons/io";

import React from "react";

function CardGrupo5({ titulo, subtitulo, item, btnContinue }) {
  return (
    <div className="cardGrupo5">
      <div className="grupo5_header">
        <h2 className="subtitulo">{subtitulo}</h2>
        <h1 className="titulo">{titulo}</h1>
      </div>
      <ul className="lista">
        <li className="item">
          <IoMdMail />
          <a href="#" className="lista_link">
            {item}
          </a>
        </li>
        <li className="item">
          <IoMdMail />
          <a href="#" className="lista_link">
            {item}
          </a>
        </li>
        <li className="item">
          <IoMdMail />
          <a href="#" className="lista_link">
            {item}
          </a>
        </li>
        <li className="item">
          <IoMdMail />
          <a href="#" className="lista_link">
            {item}
          </a>
        </li>
      </ul>
      <button className="btn_card" type="button">
        <span>{btnContinue}</span>
      </button>
    </div>
  );
}

export default CardGrupo5;
