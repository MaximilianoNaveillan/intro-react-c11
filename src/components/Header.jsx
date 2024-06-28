import React from "react";

function Header({ home, nosotros, contacto }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">{home}</a>
          </li>
          <li>
            <a href="#">{nosotros}</a>
          </li>
          <li>
            <a href="#">{contacto}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
