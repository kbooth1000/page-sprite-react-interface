import React, { Component } from 'react';
import DeviceOrientation from 'react-device-orientation';

import './compass.css';

class Compass extends Component {

  this.searchValue = 'zombie';
  
  componentDidMount() {
    fetch(`https://www.omdbapi.com/?s=${this.searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log('movies: ', jsonResponse.Search);
          
        } else {
          console.log('error: ', jsonResponse.Error);
          
        }
      })
    }

  render() {
    let windDegree = 225;
      
    
    return (
      <div>
        <DeviceOrientation>
          {({ absolute, alpha, beta, gamma }) => (
            <div>
              {`Absolute: ${absolute}`}
              {`Alpha: ${alpha}`}
              {`Beta: ${beta}`}
              {`Gamma: ${gamma}`}

              <div
                className="compass-circle"
                style={{ transform: `rotate(${alpha}deg)` }}
              >
                <div className="compass-arrow" />
              <div className="wind-arrow"
              style={{ transform: `rotate(${windDegree}deg)` }} />
              </div>
            </div>
          )}
        </DeviceOrientation>
      </div>
    );
  }
}

export default Compass;
