import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let Main = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
