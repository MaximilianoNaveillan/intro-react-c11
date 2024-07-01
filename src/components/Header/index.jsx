import { useState } from "react";
import "./styles.css";
import { FaAlignJustify, FaRegTimesCircle } from "react-icons/fa";

function Header({ home, nosotros, contacto }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav_logo">
          Cohorte 11 template
        </a>
        {/*operador ternario ==> condición ? expr1 : expr2 */}
        <div className={`nav__menu ${showMenu ? "show_menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                {home}
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                {nosotros}
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                {contacto}
              </a>
            </li>
          </ul>
          <div className="nav__close" onClick={handleShowMenu}>
            <FaRegTimesCircle />
          </div>
        </div>
        <div className="nav__toggle" onClick={handleShowMenu}>
          <FaAlignJustify />
        </div>
      </nav>
    </header>
  );
}

export default Header;
