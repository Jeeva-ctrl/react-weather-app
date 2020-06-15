import axios from "axios";

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: Location " + response.statusText);
  }
}
function mapDataToWeatherInterface(data) {
  console.log(data);
  const mapped = {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    temperature: data.main.temp,
    description: data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod,
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = data.main.temp_max;
    mapped.min = data.main.temp_min;
  }

  // remove undefined fields
  Object.keys(mapped).forEach(
    (key) => mapped[key] === undefined && delete data[key]
  );
  return mapped;
}

export const FetchCurrentWeather = (city, callBack) => (dispatch) => {
  return fetch(
    "https://api.openweathermap.org/data/2.5/weather/?q=" +
      `${city}` +
      "&units=metric&APPID=xxxxx"
  )
    .then((response) => handleResponse(response))
    .then((weather) => mapDataToWeatherInterface(weather))
    .then((current) => {
      callBack();

      return dispatch({
        type: "FETCH_CURRENT",
        payload: current,
      });
    })
    .catch((err) => {
      console.log("Could not fetch products. Try again later.", err);
    });
};
export const FetchForecastWeather = (city, callBack) => (dispatch) => {
  return fetch(
    "https://api.openweathermap.org/data/2.5/forecast/?q=" +
      `${city}` +
      "&units=metric&APPID=xxx"
  )
    .then((response) => handleResponse(response))
    .then((result) => {
      const forecast = [];
      if (Object.entries(result).length) {
      
        for (let i = 0; i < result.list.length; i += 8) {
          forecast.push(mapDataToWeatherInterface(result.list[i + 4]));
        }
      }
      callBack();

      return dispatch({
        type: "FETCH_FORECAST",
        payload: forecast,
      });
    })
    .catch((err) => {
      console.log("Could not fetch products. Try again later.", err);
    });
};
