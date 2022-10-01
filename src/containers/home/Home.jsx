import React from "react";
import "./home.css";
import home from "../../assets/home.jpg";

const Home = () => {
  return (
    <div className="con__header" id="#home">
      <div className="con__header--content">
        <h1>
          Masters<span> of Consistency and</span> Quality <span>.</span>
        </h1>
        <p>
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </p>
        <div className="con__header--content__button">
          <button className="con__header--content__button--first">
            Explore
          </button>
          <button className="con__header--content__button--two">
            Contact Us
          </button>
        </div>
        <div className="con__header--content__number3">
          <div className="con__header--content__number3__sec01">
            <h2>25,356</h2>
            <p>Projects Done</p>
            {/* <div></div> */}
          </div>
          <div className="con__header--content__number3__sec02">
            <h2>15,200</h2>
            <p>Buildings Done</p>
            <div></div>
          </div>
          <div className="con__header--content__number3__sec03">
            <h2>350+</h2>
            <p>Total Employees</p>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" con__header--content__image">
        <img src={home} alt="home" />
      </div>
    </div>
  );
};

export default Home;
