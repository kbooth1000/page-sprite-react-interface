import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rabbit from './components/Rabbit';

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

  pageGrid = activePage =>
    jsonPageData.pages.map(page => (
      <div
        className={
          'page c-' +
          page._id +
          (page._id === this.state.activePage ? ' active' : '')
        }
      >
        <h2>
          {page.title} --
          {page._id}
          <p>
            <Link to={'/1'} onClick={() => this.handleClick('1')}>
              1
            </Link>
            <br />
            <Link to={'/2'} onClick={() => this.handleClick('2')}>
              2
            </Link>
            <br />
            <Link to={'/3'} onClick={() => this.handleClick('3')}>
              3
            </Link>
            <br />
            <Link to={'/4'} onClick={() => this.handleClick('4')}>
              4
            </Link>
            <br />
            <Link to={'/5'} onClick={() => this.handleClick('5')}>
              5
            </Link>
            <br />
            <Link to={'/6'} onClick={() => this.handleClick('6')}>
              6
            </Link>
            <br />
            <Link to={'/7'} onClick={() => this.handleClick('7')}>
              7
            </Link>
          </p>
        </h2>
        <p>{page.content}</p>
        {page.component && page.component}
      </div>
    ));

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
          <div
            className="inner-container"
            style={{
              transform:
                'translate(' + this.getContainerTranslateXY(activePage) + ' )'
            }}
          >
            <div className="page-grid"> {this.pageGrid(activePage)}</div>
            {/* <Route path="/:id" component={ActivePageMarker} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
