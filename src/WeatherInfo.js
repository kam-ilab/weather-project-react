import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-5">{props.data.city}</h1>

      <span>
        <FormattedDate date={props.data.date} />
      </span>
      <br />

      <div className="row mt-1">
        <div className="col-6">
          <span className="text-capitalize">{props.data.description}</span>
          <br />
          <span>Humidity: {props.data.humidity}%</span>
          <br />
          <span>Wind: {props.data.wind} km/h</span>
        </div>
      </div>

      <div className="col-6">
        <div className="weather-app-temperature">
          <WeatherIcon
            className="weather-app-icon"
            code={props.data.icon}
            size={52}
          />
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
