import React from "react";

const LoadingSpinner = () => {
  return (
    <center>
      <button className="btn btn-primary btnClas" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm spanLoad"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </center>
  );
};

export default LoadingSpinner;
