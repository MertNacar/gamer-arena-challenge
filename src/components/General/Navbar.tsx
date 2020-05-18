import React from "react";
import Logo from "../../assets/logos/Logo.png";
function Navbar() {
  return (
    <header>
      <img src={Logo} className="logo" alt="" />
    </header>
  );
}

export default Navbar;
