import React, { Component } from 'react';
import '../css/comet.css';

class Comet extends Component {

  constructor(){
    super();
    this.state = {};
  }

  rand = (lo, hi) => {
    return Math.random() * (hi - lo) + lo;
  };


  stars = () => {
    let starsArr = [];
    for (let i = 0; i < 25; i++) {
      starsArr.push(
        <g key={i}
          id={'star-copy-' + i}
          transform={
            'translate(' +
            this.rand(i * 1 + 3 * i, i * 30 + 3 * i) +
            ', ' +
            this.rand(i * 1 + 3 * i, i * 30 + 3 * i) +
            ') rotate(-341.000000) translate(' +
            this.rand(i * 1 + 3 * i, i * 30 + 3 * i) +
            ', ' +
            this.rand(i * 2 + 3 * i, i * 30 + 3 * i) +
            ') scale(' +
            this.rand(0.5, 1.2) +
            ')'
          }
        >
          <polygon
            className="spinning-star"
            style={{
              animation:
                'draw-comet ' + this.rand(3, 9) + 's reverse infinite linear'
            }}
            points="85 81 79 85 80 79 76 74 81 74 85 68 87 74 94 74 89 79 90 85"
          />
        </g>
      );
    }
    return starsArr;
  };
  render() {
    return (
      <div className="comet">
        <div className="comet-box">
          <svg viewBox="10 10 700 700">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              fillOpacity="0"
            >
              <g
                id="Group"
                transform="translate(-3.000000, 0.000000)"
                fill="#D8D8D8"
                fillRule="nonzero"
                stroke="#979797"
              >
                <polygon
                  className="head-star"
                  points="35 32 29 35 30 29 26 24 32 24 35 18 37 24 44 24 39 29 40 35"
                />
                {this.stars()}
              </g>
            </g>
          </svg>
        </div>
        <button onClick={() => this.setState(this.state)}>Reset</button>
      </div>
    );
  }
}

export default Comet;
