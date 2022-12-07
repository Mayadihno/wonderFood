import React from "react";
import "./Navbar.css";
import { BsCart3 } from "react-icons/bs";

const Navbar = ({ cart }) => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="navbar__content">
          <h3>WonderLand</h3>
          <i>
            <BsCart3 />
            <sup>{cart.length}</sup>
          </i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
