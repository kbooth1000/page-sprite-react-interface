import React, { Component } from 'react';
import DeviceOrientation from 'react-device-orientation';

import './compass.css';

class Compass extends Component {

  searchValue = 'zombie';
  
  componentDidMount() {
    /*
    fetch(`https://secure2.convio.net/choa?api_key=wDB09SQODRpVIOvX&response_format=json&mode=no-cors`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log('movies: ', jsonResponse.Search);
          
        } else {
          console.log('error: ', jsonResponse.Error);
          
        }
      })  
      */
    
    
    fetch(`https://secure2.convio.net/choa/site/CROrgEventAPI?method=getEvent &api_key=wDB09SQODRpVIOvX&v=1.0&event_id=101902&mode=no-cors`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log('RESPONSE: ', jsonResponse.Search);
          
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
