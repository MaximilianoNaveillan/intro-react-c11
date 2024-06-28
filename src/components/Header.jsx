import React from "react";

function Header({ home, nosotros, contacto }) {
  const headerStyle = { backgroundColor: "rgb(250,0,0)", height: "200px" };

  return (
    <header style={headerStyle}>
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
