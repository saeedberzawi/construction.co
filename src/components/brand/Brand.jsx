import React from "react";
import { LOGO1, logo2, LOGO3, LOGO4, LOGO5 } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div>
      <div className="brand__container">
        <img className="cahse" src={LOGO1} alt="chase" />
        <img className="asana" src={logo2} alt="asana" />
        <img className="buzz" src={LOGO3} alt="buzzfeed" />
        <img className="toggl" src={LOGO4} alt="toggl" />
        <img className="walmart" src={LOGO5} alt="walmart" />
      </div>
    </div>
  );
};

export default Brand;
