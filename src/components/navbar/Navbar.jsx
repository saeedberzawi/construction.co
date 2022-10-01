import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About Us</a>
    </p>
    <p>
      <a href="#message">Message</a>
    </p>
    <p>
      <a href="#contact">Fed Back</a>
    </p>
    <p>
      <a href="#project">Project</a>
    </p>
    <p>
      <a href="#footer">More About</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="con__navbar ">
      <div className="con__navbar--links">
        <div className="con__navbar--links__header">
          <p>
            <a href="#home">CONSTRUCTION</a>
          </p>
        </div>
        <div className="con__navbar--links__container">
          <Menu />
        </div>
      </div>
      <div className="con__navbar--menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#ffce67"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#A52A2A"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="con__navbar--menu__container flip-scale-down-ver">
            <div className="con__navbar--menu__container--links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
