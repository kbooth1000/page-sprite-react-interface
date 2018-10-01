import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkBox extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="linkbox">
        <Link to={'/1'} onClick={() => this.props.handleClick('1')}>
          1
        </Link>
        <br />
        <Link to={'/2'} onClick={() => this.props.handleClick('2')}>
          2
        </Link>
        <br />
        <Link to={'/3'} onClick={() => this.props.handleClick('3')}>
          3
        </Link>
        <br />
        <Link to={'/4'} onClick={() => this.props.handleClick('4')}>
          4
        </Link>
        <br />
        <Link to={'/5'} onClick={() => this.props.handleClick('5')}>
          5
        </Link>
        <br />
        <Link to={'/6'} onClick={() => this.props.handleClick('6')}>
          6
        </Link>
        <br />
        <Link to={'/7'} onClick={() => this.props.handleClick('7')}>
          7
        </Link>
      </div>
    );
  }
}
export default LinkBox;
