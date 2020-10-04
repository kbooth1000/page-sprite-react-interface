import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';

let Main = () => {



  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/" exact render={() => <Redirect to="/1" />} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
