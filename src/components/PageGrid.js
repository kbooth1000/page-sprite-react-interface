import React, { Component } from 'react';
import jsonPageData from '../data/data';
import Rabbit from './Rabbit';
import Comet from './Comet2';
import '../css/App.css';

class PageGrid extends Component {
  constructor(props) {
    super();
  }

  render() {
    return jsonPageData.pages.map(page => (
      <div
        key={page._id}
        className={
          'page c-' +
          page._id +
          (page._id === this.props.activePage ? ' active' : '')
        }
      >
        <h2 className="page-title">{page.title && page.title}</h2>
        <p className="page-content">{page.content && page.content}</p>
        {page.component && page.component === 'Rabbit' && <Rabbit />}
        {page.component && page.component === 'Comet' && <Comet />}
      </div>
    ));
  }
}

export default PageGrid;
