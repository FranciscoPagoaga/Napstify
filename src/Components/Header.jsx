import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../Styles/Login.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{ color: "#25DBD2" }}>
          Napstify
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
