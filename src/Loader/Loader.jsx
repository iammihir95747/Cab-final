// Loader.jsx
import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner" title="Loading..."></div>
    </div>
  );
};

export default Loader;
