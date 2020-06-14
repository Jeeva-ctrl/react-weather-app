import React from 'react';
import dayjs from "dayjs";
import backGroundImg from "../assets/background.jpg";
function WeatherCardSubHeader(date) {
     date = dayjs().isValid(date) ? date : "";    
    return (
        <span>
            {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "}
            {dayjs(date).format("A")}
        </span>
    )
}

const CurrentView = ({current})=>(
    current?
    <div className="current_container">
        <div className="city_cont">
             <div className="city_txt">
                 {current.city} , {current.country}
             </div>

             <div className="date_cont">
             {WeatherCardSubHeader(current.date)}
             </div>
        </div>
        <div className="weather_cont">
              <div className="weather_img">
                 <img src={require(`../assets/${current.icon}.png`)}/>
              </div>
              <div className="report">
                  <div>
                      Max: {current.max} &deg;C
                  </div>
                  <div>
                  Min: {current.min} &deg;C
                  </div>
                  <div>
                  Humidity: {current.humidity} %
                  </div>
              </div>
        </div>
        <div className="temp_cont">
             <div className="temp_txt">
                {current.temperature}&deg;C
             </div>
             <div className="desc">
               {current.description}
             </div>
        </div>
      
    </div>:""
)

export default CurrentView;
