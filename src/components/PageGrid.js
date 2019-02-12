import React, { Component } from 'react';
import Rabbit from './Rabbit';
import Comet from './Comet2';
import '../css/App.css';

class PageGrid extends Component {

  render() {
    let pages = this.props.jsonPageData.pages.map(page => (
      <div
        key={page._id}
        className={
          'page c-' +
          page._id +
          (page._id === this.props.activePage ? ' active' : '')
        }
      >
        <h2 className="page-title">{page.title && page.title}</h2>
        <h4 className="page-content">{page.description && page.description}</h4>
        {page.content && page.content}
        {page.component && page.component === 'Rabbit' && <Rabbit />}
        {page.component && page.component === 'Comet' && <Comet />}
      </div>
    ));
    return pages;
  }
}

export default PageGrid;
