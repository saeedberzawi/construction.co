import React from "react";
import cont from "../../assets/contact us svg.svg";
import "./contact.css";

const Contact = () => {
  return (
    <div className="cont" id="contact">
      <div className="cont__sec01">
        <h4>Contact Us</h4>
        <p>
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </p>
      </div>
      <div className="cont__sec02">
        <div className="cont__sec02--part">
          <div className="cont__sec02--part__inp01">
            <input type="text" placeholder="your name" />
          </div>
          <div className="cont__sec02--part__inp02">
            <input type="email" placeholder="email" />
          </div>
          <div className="cont__sec02--part__inp03">
            <input type="text" placeholder="subject" />
          </div>
          <div className="cont__sec02--part__inp04">
            <input type="text" placeholder="message" />
          </div>
          <button>Send Massage</button>
        </div>
        <img src={cont} alt="" />
      </div>
    </div>
  );
};

export default Contact;
