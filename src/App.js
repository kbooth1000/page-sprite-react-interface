import React, { Component } from 'react';

import jsonPageData from './data/data';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: '003'
    };
  }

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
          {page.title}
          {page._id}
        </h2>
        <p>{page.content}</p>
      </div>
    ));

  render() {
    let { activePage } = this.state;

    return (
      <div className="App">
        <div className="page-grid"> {this.pageGrid(activePage)}</div>
        {/* <Route path="/:id" component={ActivePageMarker} /> */}
      </div>
    );
  }
}

export default App;
