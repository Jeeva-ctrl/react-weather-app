import React from "react";
import dayjs from "dayjs";
function WeatherCardSubHeader(date) {
  date = dayjs().isValid(date) ? date : "";
  return (
    <React.Fragment>
      <div className="foreCast_temp">{dayjs(date).format("ddd")}</div>
      <div>
        {" "}
        {dayjs(date).format("h:mm")} {dayjs(date).format("A")}
      </div>
    </React.Fragment>
  );
}

const ForeCast = ({ data }) => (
  <div className="forecast_container">
    <div className="date_forcast">{WeatherCardSubHeader(data.date)}</div>
    <div className="img_forcast">
      <img src={require(`../assets/${data.icon}.png`)} />
    </div>
    <div className="summary_foreCast">
      <div className="foreCast_temp">
        {data.max} /
        {data.min}&deg;C
      </div>
      <div>ForeCast : {data.description}</div>
      <div>Humidity :{data.humidity}</div>
    </div>
  </div>
);

export default ForeCast;
