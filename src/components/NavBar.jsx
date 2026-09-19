import { useState } from "react";


function NavBar({ links }) {
  const [activo, setActivo] = useState(links[0]?.label || "");

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#" className="logo">
        React
      </a>

      {/* Lista de links */}
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={activo === link.label ? "activo" : ""}
              onClick={() => setActivo(link.label)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
