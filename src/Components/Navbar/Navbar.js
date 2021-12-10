import React from "react";
import NavLinks from "../../Reusebales/NavLinks/NavLinks";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="!#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <NavLinks name="home" />
          <NavLinks name="About" />
          <NavLinks name="Contact" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
