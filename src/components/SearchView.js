import React from "react";
import backGroundImg from "../assets/background.jpg";

const SearchView = (props) => (
  <div className="search_container">
    <div className="cont">
      <div className="text">Get your Weather dose</div>
      <div className="search_city">
        <input
          className=""
          value={props.value}
           onChange={props.onTextChange}
          placeholder="Enter your city name ..."
        />
      </div>
      <div className="get_button">
        <button className="" onClick={props.onButtonClick}>
          Get Weather
        </button>
      </div>
    </div>
  </div>
);

export default SearchView;
