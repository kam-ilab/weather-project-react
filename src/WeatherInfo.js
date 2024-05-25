import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="mt-5">{props.data.city}</h1>

          <FormattedDate date={props.data.date} />
        </div>
        <div className="col-2 weather-app-icon">
          <WeatherIcon code={props.data.icon} size={64} />
        </div>
        <div className="col-4 weather-app-temperature">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <br />
      <div className="row mt-1 mb-5">
        <div className="col-6">
          <span className="text-capitalize">{props.data.description}</span>
          <br />
          <span>Humidity: {props.data.humidity}%</span>
          <br />
          <span>Wind: {props.data.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
