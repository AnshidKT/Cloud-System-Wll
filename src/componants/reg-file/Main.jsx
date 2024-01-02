// Main.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <div ck>
      <nav className="nav">
        <Link to="/" style={{ marginRight: 10 }}>
          Entry
        </Link>
        <Link to="/Lists">List</Link>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Main;
