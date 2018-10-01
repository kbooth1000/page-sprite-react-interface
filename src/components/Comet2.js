import React from 'react';
import '../css/comet.css';

export default () => {
  let rand = (lo, hi) => {
    console.log('random: ', Math.random() * (hi - lo) + lo);

    return Math.random() * (hi - lo) + lo;
  };

  let stars = () => {
    let starsArr = [];
    for (let i = 0; i < 25; i++) {
      starsArr.push(
        <g
          id={'star-copy-' + i}
          transform={
            'translate(' +
            rand(i * 1 + 3 * i, i * 30 + 3 * i) +
            ', ' +
            rand(i * 1 + 3 * i, i * 30 + 3 * i) +
            ') rotate(-341.000000) translate(' +
            rand(i * 1 + 3 * i, i * 30 + 3 * i) +
            ', ' +
            rand(i * 2 + 3 * i, i * 30 + 3 * i) +
            ') scale(' +
            rand(0.5, 1.2) +
            ')'
          }
        >
          <polygon
            className="spinning-star"
            style={{
              animation:
                'draw-comet ' + rand(3, 9) + 's reverse infinite linear'
            }}
            points="85 81 79 85 80 79 76 74 81 74 85 68 87 74 94 74 89 79 90 85"
          />
        </g>
      );
    }
    return starsArr;
  };

  return (
    <div className="comet">
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
            {stars()}
          </g>
        </g>
      </svg>
    </div>
  );
};
