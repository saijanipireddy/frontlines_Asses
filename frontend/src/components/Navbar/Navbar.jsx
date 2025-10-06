import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const navbarItems = [
  { name: "Home", link: "#homepage" },
  { name: "Companies", link: "#companies" },
  { name: "Resources", link: "#resources" },
  { name: "Contact", link: "#footer" },
  { name: "Admin", link: "/admin" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const renderLink = (menu) => {
    if (menu.link.startsWith("#") && location.pathname === "/") {
      return (
        <HashLink smooth to={menu.link} className="nav-link">
          {menu.name}
        </HashLink>
      );
    } else if (menu.link.startsWith("#")) {
      return (
        <RouterLink to={`/${menu.link}`} className="nav-link">
          {menu.name}
        </RouterLink>
      );
    } else {
      return (
        <RouterLink to={menu.link} className="nav-link">
          {menu.name}
        </RouterLink>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
  <RouterLink to="/" className="logo-text">
    <span className="emoji">🚀</span> CompanyDirectory
  </RouterLink>
</div>

        <ul className="nav-menu">
          {navbarItems.map((menu, idx) => (
            <li key={idx} className="nav-item">
              {renderLink(menu)}
            </li>
          ))}
        </ul>

        <div
          className="mobile-menu-icon"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? "✖" : "☰"}
        </div>
      </div>

      <ul className={`mobile-menu ${openMenu ? "show" : ""}`}>
        {navbarItems.map((menu, idx) => (
          <li key={idx} onClick={() => setOpenMenu(false)}>
            {renderLink(menu)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
