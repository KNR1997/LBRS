import React from "react";
import { Audio, Bars } from "react-loader-spinner";
import "./loader.css";

function Loader() {
  return (
    <div className="loader">
      <Bars
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Loader;
