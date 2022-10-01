import React from "react";
import { arrow02 } from "../ourteam/imports";
import "./news.css";

const News = () => {
  return (
    <div className="news">
      <h4>Subscribe to our Newsletter</h4>
      <p>
        Age sold some full like rich new. Amounted repeated as believed in
        confined juvenile.
      </p>
      <div className="news__btn">
        <button>SUBSCRIBE</button>
        <img src={arrow02} alt="" />
      </div>
    </div>
  );
};

export default News;
