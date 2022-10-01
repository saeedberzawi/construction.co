import React from "react";
import "./ourteam.css";
import { chris, alison, adam, star, mon, arrow, arrow02 } from "./imports";

const Ourteam = () => {
  return (
    <div className="our">
      <h4>Our Best Engineers</h4>
      <p className="our__text">
        Blessing welcomed ladyship she met humoured sir breeding her. Six
        curiosity day assurance bed necessary.
      </p>
      <div className="our__card">
        <div className="our__card--sec1">
          <div className="our__card--sec1__part1">
            <img src={star} alt="" />
            <img src={mon} alt="" />
          </div>
          <div className="our__card--sec1__part2">
            <img src={chris} alt="" />
            <h2>Chris Evans</h2>
            <p className="first">Michigan, TX</p>
            <p className="our__part2--se">989-653-2986</p>
            <p className="our__part2--th">ChrisEvans@const.com</p>
          </div>
        </div>
        <div className="our__card--sec2">
          <div className="our__card--sec2__part1">
            <img src={star} alt="" />
            <img src={mon} alt="" />
          </div>
          <div className="our__card--sec2__part2">
            <img src={alison} alt="" />
            <h2>Chris Evans</h2>
            <p className="first02">Michigan, TX</p>
            <p className="our__part2--se02">989-653-2986</p>
            <p className="our__part2--th02">alisonkiara@const.com</p>
          </div>
        </div>
        <div className="our__card--sec3">
          <div className="our__card--sec3__part1">
            <img src={star} alt="" />
            <img src={mon} alt="" />
          </div>
          <div className="our__card--sec3__part2">
            <img src={adam} alt="" />
            <h2>Chris Evans</h2>
            <p className="first03">Michigan, TX</p>
            <p className="our__part2--se03">989-653-2986</p>
            <p className="our__part2--th03">adamgates@const.com</p>
          </div>
        </div>
      </div>
      <div className="page__btn">
        <div className="page__btn--first">
          <img src={arrow} alt="" />
        </div>
        <div className="page__btn--second">
          <img src={arrow02} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
