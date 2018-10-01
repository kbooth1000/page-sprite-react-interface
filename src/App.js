import React, { Component } from 'react';
import Rabbit from './components/Rabbit';
import PageGrid from './components/PageGrid';
import LinkBox from './components/LinkBox';

import jsonPageData from './data/data';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: '3'
    };
  }

  handleClick = nextPageID => {
    this.setState({ activePage: nextPageID });
  };

  componentDidMount() {
    let routePath = this.props.location.pathname.split(/[:/]+/);
    this.setState({ activePage: routePath[1] });
  }

  getContainerTranslateXY = pageNum => {
    let colMultiplier = Math.floor((pageNum - 1) / 3);
    let rowSubtractor = 300 * colMultiplier;
    let x = -100 * (pageNum - 1) + rowSubtractor + 'vw';
    let y = (-100 * colMultiplier).toString() + 'vh';
    return x + ',' + y;
  };

  render() {
    let { activePage } = this.state;

    return (
      <div className="App">
        <div className={'container active-page-' + activePage}>
          <LinkBox handleClick={this.handleClick} />
          <div
            className="inner-container"
            style={{
              transform:
                'translate(' + this.getContainerTranslateXY(activePage) + ' )'
            }}
          >
            <div className="page-grid">
              <PageGrid activePage={activePage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
