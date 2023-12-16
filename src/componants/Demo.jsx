import React from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div className="Demo">
      <h1 className="demo-cmpny-name">Cloud System Wll</h1>

      <Link style={{ textDecoration: "none" }} to="/SystemCloud">
        {" "}
        <button
          style={{
            cursor: "pointer",
            width: 110,
            height: 30,
            fontSize: 12,
            border: 0,
            backgroundColor: "#000f30",
            color: "white",
            borderRadius: 5,
            marginTop: 30,
          }}
        >
          Back To Table
        </button>
      </Link>
    </div>
  );
};

export default Demo;
