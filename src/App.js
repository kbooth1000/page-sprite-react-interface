import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import jsonPageData from './data/data';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: '003'
    };
  }

  handleClick = nextPageID => {
    this.setState({ activePage: nextPageID });
  };

  componentDidMount() {
    let routePath = this.props.location.pathname.split(/[:/]+/);
    console.log('routePath: ', routePath[1]);

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
            <Link to={'/002'} onClick={() => this.handleClick('002')}>
              002
            </Link>
            <br />
            <Link to={'/003'} onClick={() => this.handleClick('003')}>
              003
            </Link>
            <br />
            <Link to={'/004'} onClick={() => this.handleClick('004')}>
              004
            </Link>
            <br />
            <Link to={'/004'} onClick={() => this.handleClick('005')}>
              005
            </Link>
            <br />
            <Link to={'/004'} onClick={() => this.handleClick('006')}>
              006
            </Link>
            <br />
            <Link to={'/004'} onClick={() => this.handleClick('007')}>
              007
            </Link>
          </p>
        </h2>
        <p>{page.content}</p>
      </div>
    ));

  render() {
    let { activePage } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="inner-container">
            <div className="page-grid"> {this.pageGrid(activePage)}</div>
            {/* <Route path="/:id" component={ActivePageMarker} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
