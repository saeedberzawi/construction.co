import React from "react";
import social from "../../assets/Social Icon.svg";
import saeed from "../../assets/saeed.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="foot">
        <div className="footer">
          <div className="footer__p1">
            <h3>CONSTRUCTION</h3>
            <p>
              You’ll find your next Home <br /> loan valu you prefer.
            </p>
            <div>
              <img src={social} alt="" />
            </div>
          </div>
          <div className="footer__p2">
            <h3>Resources</h3>
            <p>Our Agents</p>
            <p>Member Stories</p>
            <p>Video</p>
            <p>Free trial</p>
          </div>
          <div className="footer__p3">
            <h3>Company</h3>
            <p>Patnerships</p>
            <p>Terms of use</p>
            <p>Privacy</p>
            <p>Sitemap</p>
          </div>
        </div>
        <div className="saeed">
          <div className="saeed__side1">
            <img src={saeed} alt="" />
            <h3>saeed al_Berzawi</h3>
          </div>
          <div className="saeed__side2">
            <h3>
              web developer <br /> full stack - mern-Stack
            </h3>
            <div className="saeed__p">
              <p>email - saidberzawi@gmail.com</p>
              <p>(mob)+964 7510429521</p>
            </div>
            <div>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copy">UNION-BRZ, All rights reserved.</p>
    </div>
  );
};

export default Footer;
