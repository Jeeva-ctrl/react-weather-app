import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = (props) => {
  let nav = null;

  if (props.locat == "/react-weather-app/") {
    nav = <div className="nav_text">Search</div>;
  } else if (props.locat == "/current") {
    nav = (
      <div>
        {" "}
        <Link to="react-weather-app/" className="nav_text">
          {" "}
          <img src={require(`../assets/left.svg`)} />
          <span>Search</span>
        </Link>
        <Link  className="nav_text active" onClick = {props.handleForeCast}>
          {" "}
          <span>ForeCast</span>
          <img src={require(`../assets/Right.png`)} />
        </Link>
      </div>
    );
  } else if (props.locat == "/foreCast"){
    nav = props.locat &&   <Link to="/current" className="nav_text">
    {" "}
    <img src={require(`../assets/left.svg`)} />
    <span>Current</span>
  </Link>;
  }
  return <div className="nav_container">{nav}</div>;
};

export default Nav;
