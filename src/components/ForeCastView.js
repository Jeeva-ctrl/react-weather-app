import React from "react";
import ForeCast from "./ForeCast";

const ForeCastView = (props) => {
  const  raw = props.forecast
    ? props.forecast.map(x => <ForeCast data={x} />)
    : "";

return <div className="forecasts_container">{raw}</div>;
};

export default ForeCastView;
