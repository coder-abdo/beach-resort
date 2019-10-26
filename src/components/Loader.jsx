import React from "react";
import loaderGif from "../images/gif/loading-gear.gif";
const Loader = () => {
  return (
    <div className="loading">
      <h4>loading...</h4>
      <img src={loaderGif} alt="loading" />
    </div>
  );
};

export default Loader;
