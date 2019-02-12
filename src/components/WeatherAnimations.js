import React, { Component } from 'react';

import '../css/weather-animations.css';

// let importAll = imgFile => {
//   let images = {};
//   imgFile.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const weatherImages = importAll(require.context('../img/weather-animations', false, /\.(png|jpe?g|svg)$/));

class WeatherAnimations extends Component {
  constructor() {
    super();
    this.state = {
      weatherClass: ''
    };
  }
  render() {
    let clickHandler = weatherType => {
      this.setState({ weatherClass: weatherType });
    };

    return (
      <div
        className={`WeatherAnimations weatherContainer ${
          this.state.weatherClass
        }`}
      >
        <div className="sun" />
        <div className="cloud-03" />
        <div className="cloud-01" />
        <div className="cloud-02" />
        <div className="skyline" />
        <div className="hill" />
        <div className="tree" />
        <div className="rain" />
        <div className="buttonBox">

        <button
          onClick={() => {clickHandler('sunny')}}
          className="btn-sunny"
        >
          Sunny
        </button>
        <button
        onClick={() => {clickHandler('cloudy')}}
          className="btn-cloudy"
        >
          Cloudy
        </button>
        <button
        onClick={() => { clickHandler('cloudy rainy') }}
          className="btn-rainy"
        >
          Rainy
        </button></div>
      </div>
    );
  }
}

export default WeatherAnimations;
