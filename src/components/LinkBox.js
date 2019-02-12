import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkBox extends Component {

  render() {
    let pageLinks = [];
    for(let i = 1; i<=this.props.pageCount; i++){
     pageLinks.push(<li key={i}>
      <Link to={`/${i}`} onClick={() => this.props.handleClick(`${i}`)}>
      {i}
        </Link>
        <br />
        </li>)
    }
    return (
      <div className="linkbox">
        <small>
          CHOOSE
          <br />
          ONE:
        </small>
        <br />
        <br />
        <ul>{pageLinks}</ul>
      </div>
    );
  }
}
export default LinkBox;
