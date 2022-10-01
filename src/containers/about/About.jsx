import React from "react";
import about from "../../assets/about.png";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__firstside">
        <div className="about__firstside--left">
          <p>
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
          <button>Explore</button>
        </div>
        <h4>Why Choose us for best construction experience</h4>
      </div>
      <div className="about__secondside">
        <div>
          <img src={about} alt="" />
        </div>
        <div className="about__secondside--section">
          <div className="about__secondside--section__sec1">
            <div>
              <h2>01</h2>
              <div></div>
            </div>
            <p>
              And residence for met the estimable <br /> disposing Mean if he they
              been no hold <br /> mr. Is at much do made took held help.
            </p>
          </div>
          <div className="about__secondside--section__sec2">
            <div>
              <h2>02</h2>
              <div></div>
            </div>
            <p>
              Up maids me an ample stood given. Certainty say suffering his him
              collected intention promotion.
            </p>
          </div>
          <div className="about__secondside--section__sec3">
            <div>
              <h2>03</h2>
              <div></div>
            </div>
            <p>
              Good draw knew bred ham busy his hour. Ask agreed answer rather
              joy nature admire wisdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
